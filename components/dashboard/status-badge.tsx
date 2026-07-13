import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const statusBadgeVariants = cva(
  "inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium whitespace-nowrap",
  {
    variants: {
      tone: {
        neutral: "border-border bg-muted text-muted-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-400",
        danger: "border-destructive/30 bg-destructive/10 text-destructive",
        info: "border-accent/30 bg-accent/10 text-accent",
        progress: "border-primary/30 bg-primary/10 text-primary-text",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  }
);

export type StatusTone = NonNullable<VariantProps<typeof statusBadgeVariants>["tone"]>;

type StatusBadgeProps = React.ComponentProps<"span"> & VariantProps<typeof statusBadgeVariants>;

export function StatusBadge({ tone, className, children, ...props }: StatusBadgeProps) {
  return (
    <span className={cn(statusBadgeVariants({ tone }), className)} {...props}>
      <span className="size-1.5 shrink-0 rounded-full bg-current" />
      {children}
    </span>
  );
}
