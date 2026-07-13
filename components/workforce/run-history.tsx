"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import type { WorkflowRun } from "@/lib/data/workforce/workflows";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { runStepStatusToneAndLabel } from "@/lib/data/workforce/status-presentation";
import { cn } from "@/lib/utils";

export function RunHistory({ runs }: { runs: WorkflowRun[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(runs[0]?.id ?? null);

  if (runs.length === 0) {
    return (
      <AiqenCard>
        <p className="text-sm text-muted-foreground">This workflow hasn&apos;t run yet.</p>
      </AiqenCard>
    );
  }

  return (
    <AiqenCard className="divide-y divide-border p-0">
      {runs.map((run) => {
        const isExpanded = expandedId === run.id;

        return (
          <div key={run.id}>
            <button
              type="button"
              onClick={() => setExpandedId(isExpanded ? null : run.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-muted"
            >
              <div className="flex items-center gap-3">
                {isExpanded ? (
                  <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
                ) : (
                  <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                )}
                <div>
                  <p className="text-sm font-medium text-foreground">{run.startedAt}</p>
                  <p className="text-xs text-muted-foreground">{run.durationLabel}</p>
                </div>
              </div>
              <StatusBadge tone={run.status === "success" ? "success" : "danger"}>
                {run.status === "success" ? "Success" : "Failed"}
              </StatusBadge>
            </button>

            {isExpanded && (
              <div className="space-y-3 border-t border-border bg-muted/30 px-6 py-4">
                {run.steps.map((step) => {
                  const stepStatus = runStepStatusToneAndLabel(step.status);
                  return (
                    <div key={step.stepId} className="flex items-start justify-between gap-4 text-sm">
                      <div className={cn("min-w-0", step.detail && "flex-1")}>
                        <p className="text-foreground">{step.label}</p>
                        {step.detail && <p className="mt-0.5 text-xs text-muted-foreground">{step.detail}</p>}
                      </div>
                      <StatusBadge tone={stepStatus.tone} className="shrink-0">
                        {stepStatus.label}
                      </StatusBadge>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </AiqenCard>
  );
}
