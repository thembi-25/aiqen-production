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
import { navItems } from "@/components/dashboard/nav-items";
import { getUnreadNotificationCount } from "@/lib/data/portal/notifications";
import { cn } from "@/lib/utils";

const unreadCount = getUnreadNotificationCount();

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
        <DialogTitle>Client Portal</DialogTitle>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <DialogClose
                key={item.href}
                render={<Link href={item.href} />}
                className={cn(
                  "flex items-center justify-between gap-2 rounded-lg px-3 py-3 text-base font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "bg-primary/10 text-primary-text"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <span className="flex items-center gap-3">
                  <item.icon className="size-4 shrink-0" />
                  {item.label}
                </span>
                {item.label === "Notifications" && unreadCount > 0 && (
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[0.65rem] font-semibold text-primary-foreground">
                    {unreadCount}
                  </span>
                )}
              </DialogClose>
            );
          })}
        </nav>
      </DialogPopup>
    </Dialog>
  );
}
