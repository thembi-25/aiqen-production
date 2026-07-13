import type { Metadata } from "next";
import { KeyRound, Plus } from "lucide-react";

import { getApiKeys } from "@/lib/data/workforce/api-keys";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "API — AI Workforce",
};

export default function ApiPage() {
  const apiKeys = getApiKeys();

  return (
    <div>
      <PageHeader
        title="API"
        description="Programmatic access to your AI Workforce workspace."
        action={
          <button
            type="button"
            disabled
            title="The public API is still in development"
            className={cn(buttonVariants(), "gap-1.5 opacity-50")}
          >
            <Plus className="size-4" /> Generate key
          </button>
        }
      />

      <AiqenCard className="divide-y divide-border p-0">
        {apiKeys.map((key) => (
          <div key={key.id} className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
            <div className="flex items-center gap-3">
              <KeyRound className="size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">{key.label}</p>
                <p className="font-mono text-xs text-muted-foreground">{key.maskedKey}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Created {key.createdAt} &middot; Last used {key.lastUsedAt ?? "never"}
            </p>
          </div>
        ))}
      </AiqenCard>

      <p className="mt-4 text-xs text-muted-foreground">
        The AI Workforce REST API is still in development — keys shown here are for reference only.
      </p>
    </div>
  );
}
