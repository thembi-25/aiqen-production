"use client";

import { useActionState } from "react";

import { signUpAction, type AuthActionState } from "@/app/actions/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { FormMessage } from "@/components/auth/form-message";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { cn } from "@/lib/utils";

export function SignUpForm({ callbackUrl }: { callbackUrl: string }) {
  const [state, action, isPending] = useActionState<AuthActionState, FormData>(
    signUpAction,
    undefined
  );

  if (state?.success === "registered") {
    return (
      <FormMessage success="Account created. Check your email for a verification link, then sign in below." />
    );
  }

  return (
    <div>
      <FormMessage error={state?.error} />

      <form action={action} className="space-y-4" noValidate>
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" type="text" autoComplete="name" required />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
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
          {isPending ? "Creating account..." : "Create account"}
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
