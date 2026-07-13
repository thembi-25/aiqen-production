"use client";

import { useActionState } from "react";

import { forgotPasswordAction, type AuthActionState } from "@/app/actions/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { FormMessage } from "@/components/auth/form-message";
import { cn } from "@/lib/utils";

export function ForgotPasswordForm() {
  const [state, action, isPending] = useActionState<AuthActionState, FormData>(
    forgotPasswordAction,
    undefined
  );

  if (state?.success) {
    return <FormMessage success={state.success} />;
  }

  return (
    <div>
      <FormMessage error={state?.error} />

      <form action={action} className="space-y-4" noValidate>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}
        >
          {isPending ? "Sending..." : "Send reset link"}
        </button>
      </form>
    </div>
  );
}
