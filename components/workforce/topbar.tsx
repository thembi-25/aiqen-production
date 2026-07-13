import Link from "next/link";

import { MobileSidebar } from "@/components/workforce/mobile-sidebar";
import { WorkspaceSwitcher } from "@/components/workforce/workspace-switcher";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Container } from "@/components/shared/container";

export function Topbar({ userName }: { userName: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <MobileSidebar />
            <Link href="/" className="hidden items-center gap-2.5 sm:flex">
              <span
                aria-hidden="true"
                className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground"
              >
                A
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">AIQEN</span>
            </Link>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <WorkspaceSwitcher />
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">{userName}</span>
            <SignOutButton />
          </div>
        </div>
      </Container>
    </header>
  );
}
