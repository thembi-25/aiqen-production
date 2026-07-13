"use client";

import { useTransition } from "react";

import { signOutAction } from "@/app/actions/auth";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SignOutButton({ className }: { className?: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => startTransition(() => signOutAction())}
      className={cn(buttonVariants({ variant: "outline" }), className)}
    >
      {isPending ? "Signing out..." : "Sign out"}
    </button>
  );
}
