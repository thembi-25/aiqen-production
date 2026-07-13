"use client";

import { ChevronsUpDown, Plus, Check } from "lucide-react";

import { Menu, MenuTrigger, MenuPopup, MenuItem } from "@/components/ui/menu";
import { cn } from "@/lib/utils";

export function WorkspaceSwitcher() {
  return (
    <Menu>
      <MenuTrigger
        className={cn(
          "flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-xs font-semibold text-primary-text">
          AR
        </span>
        <span className="hidden sm:inline">Acme Robotics</span>
        <ChevronsUpDown className="size-3.5 text-muted-foreground" />
      </MenuTrigger>

      <MenuPopup>
        <MenuItem className="justify-between">
          <span className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-xs font-semibold text-primary-text">
              AR
            </span>
            Acme Robotics
          </span>
          <Check className="size-4 text-primary" />
        </MenuItem>
        <div className="my-1 h-px bg-border" />
        <MenuItem disabled title="Multi-workspace support is coming soon">
          <Plus className="size-4" />
          New workspace
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
