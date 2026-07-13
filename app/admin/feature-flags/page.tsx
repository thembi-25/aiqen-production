import type { Metadata } from "next";

import { db } from "@/lib/db";
import { featureFlags } from "@/lib/db/schema";
import { PageHeader } from "@/components/dashboard/page-header";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { FeatureFlagToggle } from "@/components/admin/feature-flag-toggle";
import { CreateFeatureFlagForm } from "@/components/admin/create-feature-flag-form";

export const metadata: Metadata = {
  title: "Feature Flags — AIQEN Admin",
};

export default async function AdminFeatureFlagsPage() {
  const flags = await db.select().from(featureFlags);

  return (
    <div>
      <PageHeader
        title="Feature Flags"
        description="Roll features out gradually across the platform without a deploy."
      />

      <AiqenCard className="mb-6">
        <h2 className="mb-4 text-sm font-semibold text-foreground">Create a feature flag</h2>
        <CreateFeatureFlagForm />
      </AiqenCard>

      <AiqenCard className="p-0">
        {flags.length === 0 ? (
          <p className="p-6 text-sm text-muted-foreground">No feature flags yet — create one above.</p>
        ) : (
          <ul className="divide-y divide-border/50">
            {flags.map((flag) => (
              <li key={flag.id} className="flex items-center justify-between gap-4 p-4">
                <div className="min-w-0">
                  <div className="font-medium text-foreground">{flag.label}</div>
                  <div className="text-xs text-muted-foreground">
                    <code className="rounded bg-muted px-1 py-0.5">{flag.key}</code>
                    {flag.description ? ` — ${flag.description}` : ""}
                  </div>
                </div>
                <FeatureFlagToggle flagId={flag.id} enabled={flag.enabled} />
              </li>
            ))}
          </ul>
        )}
      </AiqenCard>
    </div>
  );
}
