import type { WorkflowStep } from "@/lib/data/workforce/workflows";
import { stepKindIcon, stepKindLabel } from "@/components/workforce/step-kind";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { cn } from "@/lib/utils";

export function StepSequence({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="space-y-3">
      {steps.map((step) => {
        const Icon = stepKindIcon[step.kind];
        const isTrigger = step.kind === "trigger";

        return (
          <AiqenCard key={step.id}>
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full",
                  isTrigger ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary-text"
                )}
              >
                <Icon className="size-4.5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {stepKindLabel[step.kind]}
                </p>
                <p className="mt-0.5 font-medium text-foreground">{step.label}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{step.detail}</p>
              </div>
            </div>
          </AiqenCard>
        );
      })}
    </div>
  );
}
