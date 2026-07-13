"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";

import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/ai-workforce", label: "AI Workforce" },
  { href: "/resources", label: "Resources" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <Dialog>
      <DialogTrigger
        aria-label="Open menu"
        className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
      >
        <Menu className="size-5" />
      </DialogTrigger>

      <DialogPopup aria-describedby={undefined}>
        <DialogTitle>Menu</DialogTitle>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {links.map((link) => (
            <DialogClose
              key={link.href}
              render={<Link href={link.href} />}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </DialogClose>
          ))}

          <div className="mt-2 border-t border-border pt-4">
            <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Services
            </p>
            {services.map((service) => (
              <DialogClose
                key={service.slug}
                render={<Link href={`/services#${service.slug}`} />}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                {service.title}
              </DialogClose>
            ))}
          </div>
        </nav>

        <DialogClose
          render={<Link href={isAuthenticated ? "/dashboard" : "/sign-in"} />}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 w-full")}
        >
          {isAuthenticated ? "Dashboard" : "Sign In"}
        </DialogClose>

        <DialogClose
          render={<Link href="/assessment" />}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-2 h-12 w-full")}
        >
          Free AI Business Assessment
        </DialogClose>

        <DialogClose
          render={<Link href="/contact" />}
          className={cn(buttonVariants({ size: "lg" }), "mt-2 h-12 w-full")}
        >
          Book Consultation
        </DialogClose>
      </DialogPopup>
    </Dialog>
  );
}
