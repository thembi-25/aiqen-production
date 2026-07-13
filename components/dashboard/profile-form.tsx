"use client";

import { useActionState } from "react";

import { updateProfileAction, type AuthActionState } from "@/app/actions/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { FormMessage } from "@/components/auth/form-message";
import { cn } from "@/lib/utils";

export function ProfileForm({ name, email }: { name: string; email: string }) {
  const [state, action, isPending] = useActionState<AuthActionState, FormData>(
    updateProfileAction,
    undefined
  );

  return (
    <div>
      <FormMessage error={state?.error} success={state?.success} />

      <form action={action} className="space-y-4" noValidate>
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" type="text" defaultValue={name} autoComplete="name" required />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue={email} disabled />
          <p className="mt-1.5 text-xs text-muted-foreground">
            Contact support to change the email on your account.
          </p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={cn(buttonVariants(), "h-10")}
        >
          {isPending ? "Saving..." : "Save changes"}
        </button>
      </form>
    </div>
  );
}
