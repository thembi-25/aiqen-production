import { AlertCircle, CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";

export function FormMessage({ error, success }: { error?: string; success?: string }) {
  if (!error && !success) return null;

  const isError = Boolean(error);

  return (
    <div
      role="alert"
      className={cn(
        "mb-5 flex items-start gap-2 rounded-lg border p-3 text-sm",
        isError
          ? "border-destructive/30 bg-destructive/10 text-destructive"
          : "border-primary/30 bg-primary/10 text-foreground"
      )}
    >
      {isError ? (
        <AlertCircle className="mt-0.5 size-4 shrink-0" />
      ) : (
        <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
      )}
      <span>{error ?? success}</span>
    </div>
  );
}
