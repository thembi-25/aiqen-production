"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { stopImpersonationAction } from "@/app/actions/admin";
import { Container } from "@/components/shared/container";

export function ImpersonationBanner() {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  if (!session?.user?.impersonatorId) return null;

  function handleStop() {
    startTransition(async () => {
      await stopImpersonationAction();
      await update({ stopImpersonating: true });
      router.push("/admin/users");
      router.refresh();
    });
  }

  return (
    <div className="sticky top-0 z-50 bg-amber-500/90 text-amber-950">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-2 py-2 text-sm font-medium">
          <span>
            Viewing as {session.user.name ?? session.user.email} — impersonation active.
          </span>
          <button
            type="button"
            disabled={isPending}
            onClick={handleStop}
            className="rounded-md bg-amber-950/10 px-3 py-1 font-semibold outline-none transition-colors hover:bg-amber-950/20 focus-visible:ring-2 focus-visible:ring-amber-950/50 disabled:opacity-50"
          >
            {isPending ? "Stopping…" : "Stop impersonating"}
          </button>
        </div>
      </Container>
    </div>
  );
}
