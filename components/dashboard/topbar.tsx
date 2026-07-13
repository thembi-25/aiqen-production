import Link from "next/link";
import { Bell } from "lucide-react";

import { MobileSidebar } from "@/components/dashboard/mobile-sidebar";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { getUnreadNotificationCount } from "@/lib/data/portal/notifications";
import { Container } from "@/components/shared/container";

export function Topbar({ userName }: { userName: string }) {
  const unreadCount = getUnreadNotificationCount();

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <MobileSidebar />
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              AIQEN
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">{userName}</span>

            <Link
              href="/dashboard/notifications"
              aria-label="Notifications"
              className="relative inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
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
