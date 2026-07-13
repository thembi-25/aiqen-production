import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function AiqenBadge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-3 py-1 text-sm text-primary-text",
        className
      )}
    >
      {children}
    </span>
  );
}
