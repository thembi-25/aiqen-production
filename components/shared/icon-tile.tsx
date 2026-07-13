import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface IconTileProps {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const tileSizes = {
  sm: "size-9 rounded-lg",
  md: "size-11 rounded-xl",
  lg: "size-14 rounded-2xl",
};

const iconSizes = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

export function IconTile({ icon: Icon, className, size = "md" }: IconTileProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center border border-border bg-muted",
        tileSizes[size],
        className
      )}
    >
      <Icon className={cn(iconSizes[size], "text-primary-text")} />
    </div>
  );
}
