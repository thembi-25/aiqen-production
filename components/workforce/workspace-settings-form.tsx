"use client";

import { useState, type FormEvent } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { FormMessage } from "@/components/auth/form-message";
import { cn } from "@/lib/utils";

export function WorkspaceSettingsForm() {
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <div>
      {saved && (
        <FormMessage success="Saved for this session — workspace settings aren't connected to a backend yet." />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="workspace-name">Workspace name</Label>
          <Input id="workspace-name" name="workspace-name" defaultValue="Acme Robotics" />
        </div>

        <div>
          <Label htmlFor="workspace-timezone">Timezone</Label>
          <Input id="workspace-timezone" name="workspace-timezone" defaultValue="America/Chicago (CST)" />
        </div>

        <button type="submit" className={cn(buttonVariants(), "h-10")}>
          Save changes
        </button>
      </form>
    </div>
  );
}
