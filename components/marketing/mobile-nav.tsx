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
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/ai-workforce", label: "AI Workforce" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
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
        </nav>

        <div className="space-y-2 border-t border-border pt-4">
          <DialogClose
            render={<Link href={isAuthenticated ? "/dashboard" : "/sign-in"} />}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 w-full")}
          >
            {isAuthenticated ? "Dashboard" : "Sign In"}
          </DialogClose>

          <DialogClose
            render={<Link href="/contact" />}
            className={cn(buttonVariants({ size: "lg" }), "h-12 w-full")}
          >
            Book Consultation
          </DialogClose>
        </div>
      </DialogPopup>
    </Dialog>
  );
}
