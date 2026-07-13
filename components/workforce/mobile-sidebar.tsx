"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { navItems } from "@/components/workforce/nav-items";
import { cn } from "@/lib/utils";

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger
        aria-label="Open menu"
        className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
      >
        <Menu className="size-5" />
      </DialogTrigger>

      <DialogPopup aria-describedby={undefined}>
        <DialogTitle>AI Workforce</DialogTitle>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive =
              item.href === "/workforce"
                ? pathname === "/workforce"
                : pathname.startsWith(item.href);

            return (
              <DialogClose
                key={item.href}
                render={<Link href={item.href} />}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                  isActive ? "bg-primary/10 text-primary-text" : "text-foreground hover:bg-muted"
                )}
              >
                <item.icon className="size-4 shrink-0" />
                {item.label}
              </DialogClose>
            );
          })}
        </nav>
      </DialogPopup>
    </Dialog>
  );
}
