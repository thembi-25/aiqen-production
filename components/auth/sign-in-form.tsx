"use client";

import { useActionState } from "react";
import Link from "next/link";

import { signInAction, type AuthActionState } from "@/app/actions/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { FormMessage } from "@/components/auth/form-message";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { cn } from "@/lib/utils";

export function SignInForm({
  callbackUrl,
  initialError,
  initialSuccess,
}: {
  callbackUrl: string;
  initialError?: string;
  initialSuccess?: string;
}) {
  const [state, action, isPending] = useActionState<AuthActionState, FormData>(
    signInAction,
    undefined
  );

  const error = state?.error ?? (!state ? initialError : undefined);
  const success = !error ? initialSuccess : undefined;

  return (
    <div>
      <FormMessage error={error} success={success} />

      <form action={action} className="space-y-4" noValidate>
        <input type="hidden" name="callbackUrl" value={callbackUrl} />

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="mb-2 text-xs text-primary-text hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}
        >
          {isPending ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">OR</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <OAuthButtons callbackUrl={callbackUrl} />
    </div>
  );
}
