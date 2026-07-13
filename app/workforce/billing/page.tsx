import type { Metadata } from "next";
import { Sparkles, TriangleAlert } from "lucide-react";

import { getDeployedEmployees } from "@/lib/data/workforce/employees";
import { getBillingPlans } from "@/lib/billing/plans";
import { getCurrentSubscription, getInvoiceHistory } from "@/lib/billing/subscription";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge, type StatusTone } from "@/components/dashboard/status-badge";
import { CheckoutButton } from "@/components/workforce/checkout-button";
import { ManageBillingButton } from "@/components/workforce/manage-billing-button";

export const metadata: Metadata = {
  title: "Billing — AI Workforce",
};

function subscriptionStatusPresentation(status: string): { tone: StatusTone; label: string } {
  switch (status) {
    case "active":
    case "trialing":
      return { tone: "success", label: "Active" };
    case "past_due":
    case "unpaid":
      return { tone: "danger", label: "Past due" };
    case "canceled":
    case "incomplete_expired":
      return { tone: "neutral", label: "Canceled" };
    case "none":
      return { tone: "neutral", label: "No active plan" };
    default:
      return { tone: "neutral", label: status };
  }
}

export default async function BillingPage() {
  const employees = getDeployedEmployees();
  const tasksThisMonth = employees.reduce((sum, e) => sum + e.tasksThisWeek * 4, 0);

  const plans = getBillingPlans();
  const subscription = await getCurrentSubscription();
  const invoices = await getInvoiceHistory(subscription?.stripeCustomerId);
  const status = subscriptionStatusPresentation(subscription?.status ?? "none");

  return (
    <div>
      <PageHeader
        title="Billing"
        description="Your AI Workforce plan and usage."
        action={<ManageBillingButton />}
      />

      {status.tone === "danger" && (
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4">
          <TriangleAlert className="size-5 shrink-0 text-destructive" />
          <p className="text-sm text-foreground">
            Your last payment failed. Update your payment method to avoid losing access.
          </p>
        </div>
      )}

      <AiqenCard className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="size-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Current plan</h2>
          </div>
          <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          {subscription
            ? "Manage your subscription, payment method, and invoices through the billing portal."
            : "You're not subscribed to a plan yet. Choose one below to get started."}
        </p>
      </AiqenCard>

      <div className="grid gap-4 sm:grid-cols-3">
        {plans.map((plan) => (
          <AiqenCard key={plan.id} className={plan.highlighted ? "border-primary/40" : undefined}>
            <p className="font-semibold text-foreground">{plan.name}</p>
            <p className="mt-2">
              <span className="text-2xl font-bold text-foreground">{plan.price}</span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-5">
              <CheckoutButton planId={plan.id} highlighted={plan.highlighted} />
            </div>
          </AiqenCard>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <AiqenCard>
          <h2 className="text-lg font-semibold text-foreground">Usage this month</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Deployed employees</dt>
              <dd className="font-medium text-foreground">{employees.length}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Tasks completed</dt>
              <dd className="font-medium text-foreground">{tasksThisMonth.toLocaleString()}</dd>
            </div>
          </dl>
        </AiqenCard>

        <AiqenCard>
          <h2 className="text-lg font-semibold text-foreground">Invoice history</h2>
          {invoices.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">
              No invoices yet — they&apos;ll show up here once you subscribe.
            </p>
          ) : (
            <ul className="mt-4 space-y-3 text-sm">
              {invoices.map((invoice) => (
                <li key={invoice.id} className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    {invoice.created ? new Date(invoice.created * 1000).toLocaleDateString() : "—"}
                  </span>
                  <span className="font-medium text-foreground">
                    ${(invoice.amount_paid / 100).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </AiqenCard>
      </div>
    </div>
  );
}
