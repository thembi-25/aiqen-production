"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { UserCog } from "lucide-react";

import { startImpersonationAction } from "@/app/actions/admin";
import { Button } from "@/components/ui/button";

export function ImpersonateButton({ userId, disabled }: { userId: string; disabled?: boolean }) {
  const router = useRouter();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleImpersonate() {
    setError(null);
    startTransition(async () => {
      const result = await startImpersonationAction(userId);

      if (!result || !result.target) {
        setError(result?.error ?? "Something went wrong.");
        return;
      }

      await update({ impersonateUserId: result.target.id });
      router.push("/dashboard");
      router.refresh();
    });
  }

  return (
    <span className="inline-flex flex-col items-end gap-1">
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={disabled || isPending}
        onClick={handleImpersonate}
      >
        <UserCog className="size-3.5" />
        Impersonate
      </Button>
      {error && <span className="text-xs text-destructive">{error}</span>}
    </span>
  );
}
