"use client";

import { useState } from "react";
import { Loader2, PlayCircle } from "lucide-react";

import type { WorkflowStep } from "@/lib/data/workforce/workflows";
import type { StepTypeDefinition } from "@/lib/data/workforce/step-library";
import { useWorkflowTestRun } from "@/lib/hooks/use-workflow-test-run";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { FormMessage } from "@/components/auth/form-message";
import { StepCard } from "@/components/workforce/step-card";
import { StepPickerDialog } from "@/components/workforce/step-picker-dialog";
import { TestRunPanel } from "@/components/workforce/test-run-panel";
import { cn } from "@/lib/utils";

function createStep(type: StepTypeDefinition): WorkflowStep {
  return {
    id: crypto.randomUUID(),
    kind: type.kind,
    typeId: type.id,
    label: type.label,
    detail: type.description,
  };
}

export function WorkflowBuilder({
  initialName,
  initialSteps,
}: {
  initialName: string;
  initialSteps: WorkflowStep[];
}) {
  const [name, setName] = useState(initialName);
  const [steps, setSteps] = useState(initialSteps);
  const [saved, setSaved] = useState(false);
  const { testResults, isTesting, runTest } = useWorkflowTestRun(steps);

  function updateStep(updated: WorkflowStep) {
    setSteps((prev) => prev.map((step) => (step.id === updated.id ? updated : step)));
    setSaved(false);
  }

  function removeStep(id: string) {
    setSteps((prev) => prev.filter((step) => step.id !== id));
    setSaved(false);
  }

  function moveStep(index: number, direction: -1 | 1) {
    setSteps((prev) => {
      const next = [...prev];
      const target = index + direction;
      if (target < 1 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
    setSaved(false);
  }

  function addStep(type: StepTypeDefinition) {
    setSteps((prev) => [...prev, createStep(type)]);
    setSaved(false);
  }

  return (
    <div className="space-y-6">
      <AiqenCard>
        <Label htmlFor="workflow-name">Workflow name</Label>
        <Input
          id="workflow-name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setSaved(false);
          }}
        />
      </AiqenCard>

      {steps.length === 0 ? (
        <StepPickerDialog mode="trigger" triggerLabel="Choose a trigger to get started" onSelect={addStep} />
      ) : (
        <>
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              isFirst={index === 1}
              isLast={index === steps.length - 1}
              onChange={updateStep}
              onRemove={() => removeStep(step.id)}
              onMoveUp={() => moveStep(index, -1)}
              onMoveDown={() => moveStep(index, 1)}
            />
          ))}

          <StepPickerDialog mode="step" triggerLabel="Add step" onSelect={addStep} />
        </>
      )}

      {testResults && <TestRunPanel steps={steps} testResults={testResults} />}

      {saved && <FormMessage success="Saved for this session — workflows aren't connected to a backend yet." />}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={runTest}
          disabled={isTesting || steps.length === 0}
          className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
        >
          {isTesting ? <Loader2 className="size-4 animate-spin" /> : <PlayCircle className="size-4" />}
          Test run
        </button>
        <button type="button" onClick={() => setSaved(true)} className={cn(buttonVariants())}>
          Save workflow
        </button>
      </div>
    </div>
  );
}
