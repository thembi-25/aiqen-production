"use client";

import { useState } from "react";

import type { WorkflowStep } from "@/lib/data/workforce/workflows";

export type TestStepStatus = "pending" | "running" | "success";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useWorkflowTestRun(steps: WorkflowStep[]) {
  const [testResults, setTestResults] = useState<Record<string, TestStepStatus> | null>(null);
  const [isTesting, setIsTesting] = useState(false);

  async function runTest() {
    if (steps.length === 0) return;
    setIsTesting(true);
    setTestResults(Object.fromEntries(steps.map((step) => [step.id, "pending" as TestStepStatus])));

    for (const step of steps) {
      setTestResults((prev) => ({ ...prev, [step.id]: "running" }));
      await sleep(500);
      setTestResults((prev) => ({ ...prev, [step.id]: "success" }));
    }

    setIsTesting(false);
  }

  return { testResults, isTesting, runTest };
}
