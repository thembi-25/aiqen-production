import Link from "next/link";

import { MobileSidebar } from "@/components/workforce/mobile-sidebar";
import { WorkspaceSwitcher } from "@/components/workforce/workspace-switcher";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Container } from "@/components/shared/container";

export function Topbar({ userName }: { userName: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <MobileSidebar />
            <Link href="/" className="hidden text-2xl font-bold tracking-tight text-foreground sm:inline">
              AIQEN
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
