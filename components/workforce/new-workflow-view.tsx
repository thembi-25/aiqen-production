"use client";

import { useState } from "react";
import { FilePlus2 } from "lucide-react";

import type { WorkflowStep } from "@/lib/data/workforce/workflows";
import { getWorkflowTemplates, type WorkflowTemplate } from "@/lib/data/workforce/workflow-templates";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { WorkflowBuilder } from "@/components/workforce/workflow-builder";

const templates = getWorkflowTemplates();

export function NewWorkflowView() {
  const [builderState, setBuilderState] = useState<{ name: string; steps: WorkflowStep[] } | null>(null);

  if (builderState) {
    return <WorkflowBuilder initialName={builderState.name} initialSteps={builderState.steps} />;
  }

  function startFromTemplate(template: WorkflowTemplate) {
    setBuilderState({
      name: template.name,
      steps: template.steps.map((step) => ({ ...step, id: crypto.randomUUID() })),
    });
  }

  function startBlank() {
    setBuilderState({ name: "Untitled workflow", steps: [] });
  }

  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        Start from a template
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {templates.map((template) => (
          <button key={template.id} type="button" onClick={() => startFromTemplate(template)} className="text-left">
            <AiqenCard className="h-full transition-colors hover:border-primary/40">
              <p className="text-xs font-medium text-muted-foreground">{template.category}</p>
              <p className="mt-1 font-semibold text-foreground">{template.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{template.description}</p>
              <p className="mt-3 text-xs text-muted-foreground">{template.steps.length} steps</p>
            </AiqenCard>
          </button>
        ))}

        <button type="button" onClick={startBlank} className="text-left">
          <AiqenCard className="flex h-full min-h-40 flex-col items-center justify-center gap-2 border-dashed text-center transition-colors hover:border-primary/40">
            <FilePlus2 className="size-6 text-muted-foreground" />
            <p className="font-medium text-foreground">Start from blank</p>
            <p className="text-xs text-muted-foreground">Build a workflow step by step</p>
          </AiqenCard>
        </button>
      </div>
    </div>
  );
}
