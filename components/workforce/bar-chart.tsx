"use client";

export interface BarChartDatum {
  label: string;
  value: number;
}

export function BarChart({
  data,
  valueFormatter = (value: number) => String(value),
  height = 160,
}: {
  data: BarChartDatum[];
  valueFormatter?: (value: number) => string;
  height?: number;
}) {
  const max = Math.max(...data.map((datum) => datum.value), 1);

  return (
    <div className="flex items-end gap-2" style={{ height }}>
      {data.map((datum) => {
        const pct = (datum.value / max) * 100;

        return (
          <div
            key={datum.label}
            className="group relative flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <div className="pointer-events-none absolute -top-2 z-10 -translate-y-full rounded-md border border-border bg-popover px-2 py-1 text-xs font-medium whitespace-nowrap text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
              {valueFormatter(datum.value)}
            </div>
            <div
              className="w-full max-w-6 rounded-t-[4px] bg-primary transition-colors group-hover:bg-primary/80"
              style={{ height: `${Math.max(pct, 2)}%` }}
            />
            <span className="text-[0.65rem] text-muted-foreground">{datum.label}</span>
          </div>
        );
      })}
    </div>
  );
}
