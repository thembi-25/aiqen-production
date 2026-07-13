import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { MobileSidebar } from "@/components/admin/mobile-sidebar";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Container } from "@/components/shared/container";

export function Topbar({ userName }: { userName: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <MobileSidebar />
            <Link href="/admin" className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground"
              >
                <ShieldCheck className="size-4" />
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">AIQEN</span>
              <span className="hidden rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground sm:inline">
                Admin
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">{userName}</span>
            <Link
              href="/dashboard"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              Exit to app
            </Link>
            <SignOutButton />
          </div>
        </div>
      </Container>
    </header>
  );
}
