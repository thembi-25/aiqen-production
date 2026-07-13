import Link from "next/link";

import { Container } from "@/components/shared/container";
import { MegaMenu } from "@/components/marketing/mega-menu";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { NavAuthLink } from "@/components/marketing/nav-auth-link";
import { ScrollHeader } from "@/components/marketing/scroll-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <ScrollHeader>
      <Container>

        <div className="flex h-16 items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              aria-hidden="true"
              className="flex size-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground"
            >
              A
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground">
              AIQEN
            </span>
          </Link>

          <div className="hidden lg:flex">
            <MegaMenu />
          </div>

          <div className="flex items-center gap-2.5">
            <NavAuthLink className="hidden h-9 px-4 sm:inline-flex" />

            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "hidden h-9 px-4 sm:inline-flex")}
            >
              Book Consultation
            </Link>

            <MobileNav />
          </div>

        </div>

      </Container>
    </ScrollHeader>
  );
}
