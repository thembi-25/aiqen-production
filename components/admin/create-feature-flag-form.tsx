"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import { createFeatureFlagAction } from "@/app/actions/admin";
import type { AdminActionState } from "@/app/actions/admin";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { FormMessage } from "@/components/auth/form-message";
import { cn } from "@/lib/utils";

export function CreateFeatureFlagForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action, isPending] = useActionState<AdminActionState, FormData>(
    createFeatureFlagAction,
    undefined
  );

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
      router.refresh();
    }
  }, [state, router]);

  return (
    <div>
      <FormMessage error={state?.error} success={state?.success} />

      <form ref={formRef} action={action} className="grid gap-4 sm:grid-cols-2" noValidate>
        <div>
          <Label htmlFor="key">Key</Label>
          <Input id="key" name="key" type="text" placeholder="new-workflow-editor" required />
        </div>
        <div>
          <Label htmlFor="label">Label</Label>
          <Input id="label" name="label" type="text" placeholder="New Workflow Editor" required />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="description">Description (optional)</Label>
          <Input id="description" name="description" type="text" placeholder="What this flag controls" />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className={cn(buttonVariants({ size: "lg" }), "sm:col-span-2 h-10")}
        >
          {isPending ? "Creating..." : "Create feature flag"}
        </button>
      </form>
    </div>
  );
}
