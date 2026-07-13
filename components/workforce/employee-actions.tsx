"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";

import type { EmployeeStatus } from "@/lib/data/workforce/employees";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { buttonVariants } from "@/components/ui/button";
import { employeeStatusToneAndLabel } from "@/lib/data/workforce/status-presentation";
import { cn } from "@/lib/utils";

export function EmployeeActions({ initialStatus }: { initialStatus: EmployeeStatus }) {
  const [status, setStatus] = useState(initialStatus);
  const tone = employeeStatusToneAndLabel(status);
  const isActive = status === "active";

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
