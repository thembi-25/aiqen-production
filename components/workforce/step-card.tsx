"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Pencil, Trash2 } from "lucide-react";

import type { WorkflowStep } from "@/lib/data/workforce/workflows";
import { stepKindIcon, stepKindLabel } from "@/components/workforce/step-kind";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StepCard({
  step,
  isFirst,
  isLast,
  onChange,
  onRemove,
  onMoveUp,
  onMoveDown,
}: {
  step: WorkflowStep;
  isFirst: boolean;
  isLast: boolean;
  onChange: (updated: WorkflowStep) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const Icon = stepKindIcon[step.kind];
  const isTrigger = step.kind === "trigger";

  return (
    <AiqenCard>
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full",
            isTrigger ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary-text"
          )}
        >
          <Icon className="size-4.5" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {stepKindLabel[step.kind]}
          </p>

          {isEditing ? (
            <div className="mt-2 space-y-3">
              <div>
                <Label htmlFor={`${step.id}-label`}>Label</Label>
                <Input
                  id={`${step.id}-label`}
                  value={step.label}
                  onChange={(event) => onChange({ ...step, label: event.target.value })}
                />
              </div>
              <div>
                <Label htmlFor={`${step.id}-detail`}>Details</Label>
                <Input
                  id={`${step.id}-detail`}
                  value={step.detail}
                  onChange={(event) => onChange({ ...step, detail: event.target.value })}
                />
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <p className="mt-0.5 font-medium text-foreground">{step.label}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{step.detail}</p>
            </>
          )}
        </div>

        {!isEditing && (
          <div className="flex shrink-0 items-center gap-1">
            {!isTrigger && (
              <>
                <button
                  type="button"
                  onClick={onMoveUp}
                  disabled={isFirst}
                  title="Move up"
                  className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
                >
                  <ChevronUp className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={onMoveDown}
                  disabled={isLast}
                  title="Move down"
                  className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
                >
                  <ChevronDown className="size-4" />
                </button>
              </>
            )}
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              title="Configure"
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Pencil className="size-4" />
            </button>
            {!isTrigger && (
              <button
                type="button"
                onClick={onRemove}
                title="Remove step"
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="size-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </AiqenCard>
  );
}
