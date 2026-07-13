"use client";

import { useState, useTransition } from "react";

import { resendVerificationAction } from "@/app/actions/auth";

export function ResendVerificationButton() {
  const [isPending, startTransition] = useTransition();
  const [sent, setSent] = useState(false);

  if (sent) {
    return <span className="text-sm font-medium text-foreground">Verification email sent.</span>;
  }

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await resendVerificationAction();
          setSent(true);
        })
      }
      className="text-sm font-medium text-primary-text underline-offset-4 hover:underline disabled:opacity-50"
    >
      {isPending ? "Sending..." : "Resend verification email"}
    </button>
  );
}
