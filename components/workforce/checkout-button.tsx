"use client";

import { useActionState } from "react";

import { createCheckoutSessionAction, type BillingActionState } from "@/app/actions/billing";
import type { PlanId } from "@/lib/billing/plans";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CheckoutButton({ planId, highlighted }: { planId: PlanId; highlighted: boolean }) {
  const [state, action, isPending] = useActionState<BillingActionState, FormData>(
    createCheckoutSessionAction.bind(null, planId),
    undefined
  );

  return (
    <form action={action}>
      <button
        type="submit"
        disabled={isPending}
        className={cn(buttonVariants({ variant: highlighted ? "default" : "outline" }), "w-full")}
      >
        {isPending ? "Redirecting..." : "Subscribe"}
      </button>
      {state?.error && <p className="mt-2 text-xs text-destructive">{state.error}</p>}
    </form>
  );
}
