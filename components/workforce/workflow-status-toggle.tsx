"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";

import type { WorkflowStatus } from "@/lib/data/workforce/workflows";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { buttonVariants } from "@/components/ui/button";
import { workflowStatusToneAndLabel } from "@/lib/data/workforce/status-presentation";
import { cn } from "@/lib/utils";

export function WorkflowStatusToggle({ initialStatus }: { initialStatus: WorkflowStatus }) {
  const [status, setStatus] = useState(initialStatus);
  const tone = workflowStatusToneAndLabel(status);
  const isActive = status === "active";

  if (status === "draft") {
    return <StatusBadge tone={tone.tone}>{tone.label}</StatusBadge>;
  }

  return (
    <div className="flex items-center gap-3">
      <StatusBadge tone={tone.tone}>{tone.label}</StatusBadge>
      <button
        type="button"
        onClick={() => setStatus(isActive ? "paused" : "active")}
        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5")}
      >
        {isActive ? (
          <>
            <Pause className="size-3.5" /> Pause
          </>
        ) : (
          <>
            <Play className="size-3.5" /> Resume
          </>
        )}
      </button>
    </div>
  );
}
