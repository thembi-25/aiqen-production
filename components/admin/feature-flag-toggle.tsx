"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { toggleFeatureFlagAction } from "@/app/actions/admin";
import { cn } from "@/lib/utils";

export function FeatureFlagToggle({ flagId, enabled }: { flagId: string; enabled: boolean }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleToggle() {
    startTransition(async () => {
      await toggleFeatureFlagAction(flagId, !enabled);
      router.refresh();
    });
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      disabled={isPending}
      onClick={handleToggle}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
        enabled ? "bg-primary" : "bg-muted"
      )}
    >
      <span
        className={cn(
          "inline-block size-4 transform rounded-full bg-background transition-transform",
          enabled ? "translate-x-5" : "translate-x-1"
        )}
      />
    </button>
  );
}
