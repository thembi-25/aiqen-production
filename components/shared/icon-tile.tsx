import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface IconTileProps {
  icon: LucideIcon;
  className?: string;
}

export function IconTile({ icon: Icon, className }: IconTileProps) {
  return (
    <div
      className={cn(
        "flex size-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10",
        className
      )}
    >
      <Icon className="size-5 text-primary-text" />
    </div>
  );
}
