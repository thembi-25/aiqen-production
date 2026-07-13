"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";

import { subscribeToNewsletterAction, type NewsletterActionState } from "@/app/actions/newsletter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className, source = "footer" }: { className?: string; source?: string }) {
  const [state, action, isPending] = useActionState<NewsletterActionState, FormData>(
    subscribeToNewsletterAction,
    undefined
  );

  return (
    <div className={cn("space-y-2", className)}>
      <form action={action} className="flex gap-2">
        <input type="hidden" name="source" value={source} />
        <Input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          aria-label="Email address"
          className="h-10"
        />
        <Button type="submit" disabled={isPending} size="icon-lg" aria-label="Subscribe">
          {isPending ? (
            <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
          ) : (
            <Send className="size-4" />
          )}
        </Button>
      </form>
      {(state?.error || state?.success) && (
        <p className={cn("text-xs", state?.error ? "text-destructive" : "text-primary-text")}>
          {state?.error ?? state?.success}
        </p>
      )}
    </div>
  );
}
