"use server";

import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { subscribers } from "@/lib/db/schema";
import { sendNewsletterWelcomeEmail } from "@/lib/email/templates";

export type NewsletterActionState = { error?: string; success?: string } | undefined;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToNewsletterAction(
  prevState: NewsletterActionState,
  formData: FormData
): Promise<NewsletterActionState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const source = String(formData.get("source") ?? "footer");

  if (!EMAIL_PATTERN.test(email)) {
    return { error: "Enter a valid email address." };
  }

  const [existing] = await db
    .select({ id: subscribers.id })
    .from(subscribers)
    .where(eq(subscribers.email, email))
    .limit(1);

  if (existing) {
    return { success: "You're already subscribed." };
  }

  await db.insert(subscribers).values({ email, source });

  try {
    await sendNewsletterWelcomeEmail(email);
  } catch {
    // Welcome email is best-effort — the subscription itself still succeeds.
  }

  return { success: "Subscribed! Check your inbox for a welcome email." };
}
