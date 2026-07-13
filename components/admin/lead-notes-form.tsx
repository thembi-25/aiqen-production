"use client";

import { useActionState } from "react";

import { updateLeadNotesAction } from "@/app/actions/admin";
import type { AdminActionState } from "@/app/actions/admin";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { FormMessage } from "@/components/auth/form-message";
import { cn } from "@/lib/utils";

export function LeadNotesForm({ leadId, notes }: { leadId: string; notes: string | null }) {
  const [state, action, isPending] = useActionState<AdminActionState, FormData>(
    updateLeadNotesAction,
    undefined
  );

  return (
    <form action={action} className="space-y-3">
      <input type="hidden" name="leadId" value={leadId} />
      <Textarea name="notes" defaultValue={notes ?? ""} placeholder="Add internal notes..." className="min-h-24" />
      <FormMessage error={state?.error} success={state?.success} />
      <button type="submit" disabled={isPending} className={cn(buttonVariants({ size: "sm" }), "h-8")}>
        {isPending ? "Saving..." : "Save notes"}
      </button>
    </form>
  );
}
