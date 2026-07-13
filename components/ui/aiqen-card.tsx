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
        "relative rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-elevation-1)] transition-all duration-300",
        variant === "interactive" &&
          "hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elevation-3)]",
        variant === "featured" &&
          "border-primary/30 bg-gradient-to-b from-primary/[0.07] to-transparent shadow-[var(--shadow-elevation-3)] ring-1 ring-primary/15",
        className
      )}
    >
      {children}
    </div>
  );
}
