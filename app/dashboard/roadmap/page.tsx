import type { Metadata } from "next";

import { getRoadmapItemsByStage, type RoadmapStage } from "@/lib/data/portal/roadmap";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { roadmapStageToneAndLabel } from "@/lib/data/portal/status-presentation";

export const metadata: Metadata = {
  title: "Roadmap — AIQEN Client Portal",
};

const columns: { stage: RoadmapStage; description: string }[] = [
  { stage: "planned", description: "Scoped and queued up next" },
  { stage: "in-progress", description: "Actively being built" },
  { stage: "shipped", description: "Live in your environment" },
];

export default function RoadmapPage() {
  return (
    <div>
      <PageHeader
        title="Roadmap"
        description="What's planned, in progress, and shipped across your automations."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {columns.map((column) => {
          const items = getRoadmapItemsByStage(column.stage);
          const badge = roadmapStageToneAndLabel(column.stage);

          return (
            <div key={column.stage}>
              <div className="mb-3 flex items-center justify-between">
                <StatusBadge tone={badge.tone}>{badge.label}</StatusBadge>
                <span className="text-xs text-muted-foreground">{items.length}</span>
              </div>
              <p className="mb-3 text-xs text-muted-foreground">{column.description}</p>

              <div className="space-y-3">
                {items.map((item) => (
                  <AiqenCard key={item.id}>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="mt-3 text-xs font-medium text-muted-foreground">{item.quarter}</p>
                  </AiqenCard>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
