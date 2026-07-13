import { GitBranch, PlayCircle, Zap, type LucideIcon } from "lucide-react";

import type { StepKind } from "@/lib/data/workforce/workflows";

export const stepKindIcon: Record<StepKind, LucideIcon> = {
  trigger: Zap,
  condition: GitBranch,
  action: PlayCircle,
};

export const stepKindLabel: Record<StepKind, string> = {
  trigger: "Trigger",
  condition: "Condition",
  action: "Action",
};
