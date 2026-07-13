import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "interactive" | "featured";
}

export function AiqenCard({
  children,
  className,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevation-1)] transition-colors duration-200",
        variant === "interactive" &&
          "hover:border-foreground/15 hover:shadow-[var(--shadow-elevation-2)]",
        variant === "featured" &&
          "border-primary/25 ring-1 ring-primary/10",
        className
      )}
    >
      {children}
    </div>
  );
}
