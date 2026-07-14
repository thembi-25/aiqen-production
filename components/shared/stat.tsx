import { cn } from "@/lib/utils";

interface StatProps {
  value: string;
  label: string;
  className?: string;
}

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <p className="text-3xl font-semibold tracking-tight text-foreground tabular-nums md:text-4xl">
        {value}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
