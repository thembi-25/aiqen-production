"use client";

import { useActionState } from "react";

import { changePasswordAction, type AuthActionState } from "@/app/actions/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { FormMessage } from "@/components/auth/form-message";
import { cn } from "@/lib/utils";

export function ChangePasswordForm({ hasPassword }: { hasPassword: boolean }) {
  const [state, action, isPending] = useActionState<AuthActionState, FormData>(
    changePasswordAction,
    undefined
  );

  return (
    <div>
      <FormMessage error={state?.error} success={state?.success} />

      <form action={action} className="space-y-4" noValidate>
        {hasPassword && (
          <div>
            <Label htmlFor="currentPassword">Current password</Label>
            <Input
              id="currentPassword"
              name="currentPassword"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
        )}

        <div>
          <Label htmlFor="newPassword">{hasPassword ? "New password" : "Set a password"}</Label>
          <Input
            id="newPassword"
            name="newPassword"
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
          className={cn(buttonVariants({ variant: "outline" }), "h-10")}
        >
          {isPending ? "Updating..." : hasPassword ? "Update password" : "Set password"}
        </button>
      </form>
    </div>
  );
}
