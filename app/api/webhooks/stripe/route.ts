import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";

import { getStripeClient } from "@/lib/stripe/client";
import { upsertSubscriptionFromStripe } from "@/lib/billing/subscription";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return new NextResponse("Missing signature or webhook secret", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = getStripeClient().webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return new NextResponse("Invalid signature", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      if (typeof session.customer === "string") {
        await upsertSubscriptionFromStripe({
          userId: session.client_reference_id ?? undefined,
          stripeCustomerId: session.customer,
          stripeSubscriptionId: typeof session.subscription === "string" ? session.subscription : null,
          status: "active",
        });
      }
      break;
    }

    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const item = subscription.items.data[0];

      if (typeof subscription.customer === "string") {
        await upsertSubscriptionFromStripe({
          stripeCustomerId: subscription.customer,
          stripeSubscriptionId: subscription.id,
          stripePriceId: item?.price.id ?? null,
          status: event.type === "customer.subscription.deleted" ? "canceled" : subscription.status,
          currentPeriodEnd: item ? new Date(item.current_period_end * 1000) : null,
        });
      }
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      if (typeof invoice.customer === "string") {
        await upsertSubscriptionFromStripe({ stripeCustomerId: invoice.customer, status: "past_due" });
      }
      break;
    }

    case "invoice.paid": {
      const invoice = event.data.object as Stripe.Invoice;
      if (typeof invoice.customer === "string") {
        await upsertSubscriptionFromStripe({ stripeCustomerId: invoice.customer, status: "active" });
      }
      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
