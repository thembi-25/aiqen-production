import "server-only";
import { cache } from "react";
import { eq } from "drizzle-orm";

import { requireAuth } from "@/lib/auth/dal";
import { db } from "@/lib/db";
import { subscriptions } from "@/lib/db/schema";
import { getStripeClient } from "@/lib/stripe/client";

export const getCurrentSubscription = cache(async () => {
  const session = await requireAuth();

  const [subscription] = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, session.user.id))
    .limit(1);

  return subscription ?? null;
});

export async function getOrCreateStripeCustomerId(userId: string, email: string): Promise<string> {
  const [existing] = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, userId))
    .limit(1);

  if (existing) return existing.stripeCustomerId;

  const customer = await getStripeClient().customers.create({ email, metadata: { userId } });
  await db.insert(subscriptions).values({ userId, stripeCustomerId: customer.id });

  return customer.id;
}

export async function upsertSubscriptionFromStripe(params: {
  userId?: string;
  stripeCustomerId: string;
  stripeSubscriptionId?: string | null;
  stripePriceId?: string | null;
  status: string;
  currentPeriodEnd?: Date | null;
}) {
  const [existing] = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.stripeCustomerId, params.stripeCustomerId))
    .limit(1);

  if (existing) {
    await db
      .update(subscriptions)
      .set({
        stripeSubscriptionId: params.stripeSubscriptionId ?? existing.stripeSubscriptionId,
        stripePriceId: params.stripePriceId ?? existing.stripePriceId,
        status: params.status,
        currentPeriodEnd: params.currentPeriodEnd ?? existing.currentPeriodEnd,
      })
      .where(eq(subscriptions.stripeCustomerId, params.stripeCustomerId));
    return;
  }

  if (!params.userId) return;

  await db.insert(subscriptions).values({
    userId: params.userId,
    stripeCustomerId: params.stripeCustomerId,
    stripeSubscriptionId: params.stripeSubscriptionId ?? null,
    stripePriceId: params.stripePriceId ?? null,
    status: params.status,
    currentPeriodEnd: params.currentPeriodEnd ?? null,
  });
}

export async function getInvoiceHistory(stripeCustomerId: string | undefined) {
  if (!stripeCustomerId) return [];

  try {
    const invoices = await getStripeClient().invoices.list({ customer: stripeCustomerId, limit: 12 });
    return invoices.data;
  } catch {
    return [];
  }
}
