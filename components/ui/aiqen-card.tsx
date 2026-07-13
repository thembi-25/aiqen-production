import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function AiqenCard({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
