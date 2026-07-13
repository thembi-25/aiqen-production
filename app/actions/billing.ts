"use server";

import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

import { requireAuth } from "@/lib/auth/dal";
import { db } from "@/lib/db";
import { subscriptions } from "@/lib/db/schema";
import { getStripeClient, getAppUrl } from "@/lib/stripe/client";
import { getOrCreateStripeCustomerId } from "@/lib/billing/subscription";
import { getStripePriceId, type PlanId } from "@/lib/billing/plans";

export type BillingActionState = { error?: string } | undefined;

function isStripeNotConfigured(error: unknown) {
  return error instanceof Error && error.message === "STRIPE_SECRET_KEY is not set";
}

export async function createCheckoutSessionAction(planId: PlanId): Promise<BillingActionState> {
  const session = await requireAuth();

  const priceId = getStripePriceId(planId);
  if (!priceId) {
    return { error: "This plan isn't available yet." };
  }

  let checkoutUrl: string;
  try {
    const customerId = await getOrCreateStripeCustomerId(session.user.id, session.user.email ?? "");

    const checkoutSession = await getStripeClient().checkout.sessions.create({
      customer: customerId,
      client_reference_id: session.user.id,
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${getAppUrl()}/workforce/billing?checkout=success`,
      cancel_url: `${getAppUrl()}/workforce/billing?checkout=cancelled`,
    });

    if (!checkoutSession.url) {
      return { error: "Could not start checkout. Please try again." };
    }
    checkoutUrl = checkoutSession.url;
  } catch (error) {
    if (isStripeNotConfigured(error)) {
      return { error: "Billing isn't configured yet." };
    }
    throw error;
  }

  redirect(checkoutUrl);
}

export async function createBillingPortalSessionAction(): Promise<BillingActionState> {
  const session = await requireAuth();

  const [existing] = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, session.user.id))
    .limit(1);

  if (!existing) {
    return { error: "Subscribe to a plan first to manage billing." };
  }

  let portalUrl: string;
  try {
    const portalSession = await getStripeClient().billingPortal.sessions.create({
      customer: existing.stripeCustomerId,
      return_url: `${getAppUrl()}/workforce/billing`,
    });
    portalUrl = portalSession.url;
  } catch (error) {
    if (isStripeNotConfigured(error)) {
      return { error: "Billing isn't configured yet." };
    }
    throw error;
  }

  redirect(portalUrl);
}
