"use client";

import { useActionState } from "react";
import Link from "next/link";

import { resetPasswordAction, type AuthActionState } from "@/app/actions/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { FormMessage } from "@/components/auth/form-message";
import { cn } from "@/lib/utils";

export function ResetPasswordForm({ email, token }: { email: string; token: string }) {
  const [state, action, isPending] = useActionState<AuthActionState, FormData>(
    resetPasswordAction,
    undefined
  );

  if (state?.success === "reset") {
    return (
      <div>
        <FormMessage success="Your password has been reset." />
        <Link
          href="/sign-in"
          className={cn(buttonVariants({ size: "lg" }), "mt-2 h-11 w-full")}
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <div>
      <FormMessage error={state?.error} />

      <form action={action} className="space-y-4" noValidate>
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="token" value={token} />

        <div>
          <Label htmlFor="password">New password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <p className="mt-1.5 text-xs text-muted-foreground">
            At least 8 characters, with a letter and a number.
          </p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}
        >
          {isPending ? "Resetting..." : "Reset password"}
        </button>
      </form>
    </div>
  );
}
