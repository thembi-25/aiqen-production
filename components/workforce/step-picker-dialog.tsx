"use client";

import { Plus } from "lucide-react";

import { actionTypes, conditionType, triggerTypes, type StepTypeDefinition } from "@/lib/data/workforce/step-library";
import { Dialog, DialogTrigger, DialogPopup, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StepPickerDialog({
  mode,
  triggerLabel,
  onSelect,
}: {
  mode: "trigger" | "step";
  triggerLabel: string;
  onSelect: (type: StepTypeDefinition) => void;
}) {
  const options: StepTypeDefinition[] = mode === "trigger" ? triggerTypes : [conditionType, ...actionTypes];
  const categories = Array.from(new Set(options.map((option) => option.category)));

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "w-full justify-center gap-1.5 border-dashed"
        )}
      >
        <Plus className="size-4" />
        {triggerLabel}
      </DialogTrigger>

      <DialogPopup aria-describedby={undefined}>
        <DialogTitle>{mode === "trigger" ? "Choose a trigger" : "Add a step"}</DialogTitle>

        <div className="flex-1 space-y-6 overflow-y-auto">
          {categories.map((category) => (
            <div key={category}>
              <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {category}
              </p>
              <div className="space-y-1">
                {options
                  .filter((option) => option.category === category)
                  .map((option) => (
                    <DialogClose
                      key={option.id}
                      onClick={() => onSelect(option)}
                      className="block w-full rounded-lg px-3 py-2.5 text-left outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <p className="text-sm font-medium text-foreground">{option.label}</p>
                      <p className="text-xs text-muted-foreground">{option.description}</p>
                    </DialogClose>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </DialogPopup>
    </Dialog>
  );
}
