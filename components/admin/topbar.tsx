import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { MobileSidebar } from "@/components/admin/mobile-sidebar";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Container } from "@/components/shared/container";

export function Topbar({ userName }: { userName: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <MobileSidebar />
            <Link href="/admin" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground">
              <ShieldCheck className="size-5 text-primary-text" />
              AIQEN Admin
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
