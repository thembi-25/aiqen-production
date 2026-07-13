import Link from "next/link";
import { Bell } from "lucide-react";

import { MobileSidebar } from "@/components/dashboard/mobile-sidebar";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { getUnreadNotificationCount } from "@/lib/data/portal/notifications";
import { Container } from "@/components/shared/container";

export function Topbar({ userName }: { userName: string }) {
  const unreadCount = getUnreadNotificationCount();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <MobileSidebar />
            <Link href="/" className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground"
              >
                A
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">AIQEN</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">{userName}</span>

            <Link
              href="/dashboard/notifications"
              aria-label="Notifications"
              className="relative inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Bell className="size-4" />
              {unreadCount > 0 && (
                <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-primary" />
              )}
            </Link>

            <SignOutButton />
          </div>
        </div>
      </Container>
    </header>
  );
}
