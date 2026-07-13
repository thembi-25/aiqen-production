"use client";

import { useActionState } from "react";
import { CreditCard } from "lucide-react";

import { createBillingPortalSessionAction, type BillingActionState } from "@/app/actions/billing";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ManageBillingButton() {
  const [state, action, isPending] = useActionState<BillingActionState, FormData>(
    createBillingPortalSessionAction,
    undefined
  );

  return (
    <form action={action}>
      <button
        type="submit"
        disabled={isPending}
        className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
      >
        <CreditCard className="size-4" />
        {isPending ? "Redirecting..." : "Manage billing"}
      </button>
      {state?.error && <p className="mt-2 text-xs text-destructive">{state.error}</p>}
    </form>
  );
}
