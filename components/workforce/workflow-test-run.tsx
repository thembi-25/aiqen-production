"use client";

import { Loader2, PlayCircle } from "lucide-react";

import type { WorkflowStep } from "@/lib/data/workforce/workflows";
import { useWorkflowTestRun } from "@/lib/hooks/use-workflow-test-run";
import { buttonVariants } from "@/components/ui/button";
import { TestRunPanel } from "@/components/workforce/test-run-panel";
import { cn } from "@/lib/utils";

export function WorkflowTestRun({ steps }: { steps: WorkflowStep[] }) {
  const { testResults, isTesting, runTest } = useWorkflowTestRun(steps);

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={runTest}
        disabled={isTesting}
        className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
      >
        {isTesting ? <Loader2 className="size-4 animate-spin" /> : <PlayCircle className="size-4" />}
        Test run
      </button>

      {testResults && <TestRunPanel steps={steps} testResults={testResults} />}
    </div>
  );
}
