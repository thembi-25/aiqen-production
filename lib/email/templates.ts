import "server-only";

import { getAppUrl, getEmailFrom, getResendClient } from "@/lib/email/resend";
import type { AssessmentResult } from "@/lib/assessment/scoring";

function layout(heading: string, body: string, ctaLabel: string, ctaUrl: string) {
  return `
  <div style="background-color:#0F172A;padding:40px 24px;font-family:Inter,Arial,sans-serif;">
    <div style="max-width:480px;margin:0 auto;background-color:#111827;border-radius:16px;padding:32px;">
      <p style="color:#06B6D4;font-weight:700;font-size:14px;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 24px;">AIQEN</p>
      <h1 style="color:#F8FAFC;font-size:20px;margin:0 0 16px;">${heading}</h1>
      <p style="color:#94A3B8;font-size:14px;line-height:1.6;margin:0 0 24px;">${body}</p>
      <a href="${ctaUrl}" style="display:inline-block;background-color:#2563EB;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;">${ctaLabel}</a>
      <p style="color:#475569;font-size:12px;line-height:1.6;margin:24px 0 0;">If the button doesn't work, copy and paste this link: ${ctaUrl}</p>
    </div>
  </div>`;
}

export async function sendVerificationEmail(email: string, token: string) {
  const url = `${getAppUrl()}/api/verify-email?token=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`;

  await getResendClient().emails.send({
    from: getEmailFrom(),
    to: email,
    subject: "Verify your AIQEN account",
    html: layout(
      "Verify your email",
      "Confirm this is your email address to finish setting up your AIQEN account. This link expires in 24 hours.",
      "Verify email",
      url
    ),
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const url = `${getAppUrl()}/reset-password?token=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`;

  await getResendClient().emails.send({
    from: getEmailFrom(),
    to: email,
    subject: "Reset your AIQEN password",
    html: layout(
      "Reset your password",
      "We received a request to reset your AIQEN password. This link expires in 1 hour. If you didn't request this, you can safely ignore this email.",
      "Reset password",
      url
    ),
  });
}

export async function sendNewsletterWelcomeEmail(email: string) {
  await getResendClient().emails.send({
    from: getEmailFrom(),
    to: email,
    subject: "You're subscribed to AIQEN updates",
    html: layout(
      "You're on the list",
      "Thanks for subscribing — you'll get practical AI strategy and automation insights from the AIQEN team, plus updates on new features. No spam, unsubscribe anytime.",
      "Read the blog",
      `${getAppUrl()}/blog`
    ),
  });
}

export async function sendAssessmentReportEmail(
  email: string,
  name: string,
  result: AssessmentResult,
  leadId: string
) {
  const url = `${getAppUrl()}/api/assessment/pdf/${leadId}`;

  await getResendClient().emails.send({
    from: getEmailFrom(),
    to: email,
    subject: "Your AI Business Assessment results",
    html: layout(
      `Your results are in, ${name.split(" ")[0] || name}`,
      `Opportunity score: ${result.opportunityScore}/100 · AI Readiness: ${result.aiReadiness}/100 · Estimated savings: ~${result.estimatedHoursSavedPerWeek} hours/week ($${result.estimatedMonthlySavings.toLocaleString()}/month). Download your full report below.`,
      "Download your report",
      url
    ),
  });
}
