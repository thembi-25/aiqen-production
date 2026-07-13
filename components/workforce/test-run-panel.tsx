import { Loader2 } from "lucide-react";

import type { WorkflowStep } from "@/lib/data/workforce/workflows";
import type { TestStepStatus } from "@/lib/hooks/use-workflow-test-run";
import { AiqenCard } from "@/components/ui/aiqen-card";

export function TestRunPanel({
  steps,
  testResults,
}: {
  steps: WorkflowStep[];
  testResults: Record<string, TestStepStatus>;
}) {
  return (
    <AiqenCard>
      <h2 className="text-sm font-semibold text-foreground">Test run (simulated)</h2>
      <ul className="mt-3 space-y-2">
        {steps.map((step) => {
          const status = testResults[step.id];
          return (
            <li key={step.id} className="flex items-center gap-2 text-sm">
              {status === "success" ? (
                <span className="size-2 shrink-0 rounded-full bg-emerald-500" />
              ) : status === "running" ? (
                <Loader2 className="size-3.5 shrink-0 animate-spin text-primary" />
              ) : (
                <span className="size-2 shrink-0 rounded-full bg-muted-foreground/40" />
              )}
              <span className="text-foreground">{step.label}</span>
            </li>
          );
        })}
      </ul>
    </AiqenCard>
  );
}
