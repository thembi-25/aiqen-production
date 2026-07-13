import Link from "next/link";

import { Container } from "@/components/shared/container";
import { MegaMenu } from "@/components/marketing/mega-menu";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { NavAuthLink } from "@/components/marketing/nav-auth-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <Container>

        <div className="flex h-20 items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-foreground"
          >
            AIQEN
          </Link>

          <div className="hidden lg:flex">
            <MegaMenu />
          </div>

          <div className="flex items-center gap-3">
            <NavAuthLink className="hidden h-10 px-5 sm:inline-flex" />

            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "hidden h-10 px-5 sm:inline-flex")}
            >
              Book Consultation
            </Link>

            <MobileNav />
          </div>

        </div>

      </Container>
    </header>
  );
}
