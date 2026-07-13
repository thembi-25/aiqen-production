import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { services } from "@/lib/data/services";
import { solutions } from "@/lib/data/solutions";

const links = [
  { href: "/industries", label: "Industries" },
  { href: "/ai-workforce", label: "AI Workforce" },
  { href: "/resources", label: "Resources" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[560px] grid-cols-2 gap-1">
              {services.map((service) => (
                <NavigationMenuLink
                  key={service.slug}
                  render={<Link href={`/services#${service.slug}`} />}
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <service.icon className="size-4 text-primary" />
                    {service.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {service.summary}
                  </span>
                </NavigationMenuLink>
              ))}
            </div>
            <Link
              href="/services"
              className="mt-3 flex items-center gap-1.5 rounded-xl bg-muted px-3 py-3 text-sm font-medium text-primary-text transition-colors hover:bg-muted/70"
            >
              View all services <ArrowRight className="size-3.5" />
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[560px] grid-cols-2 gap-1">
              {solutions.map((solution) => (
                <NavigationMenuLink
                  key={solution.slug}
                  render={<Link href={`/solutions#${solution.slug}`} />}
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <solution.icon className="size-4 text-primary" />
                    {solution.title}
                  </span>
                </NavigationMenuLink>
              ))}
            </div>
            <Link
              href="/solutions"
              className="mt-3 flex items-center gap-1.5 rounded-xl bg-muted px-3 py-3 text-sm font-medium text-primary-text transition-colors hover:bg-muted/70"
            >
              View all solutions <ArrowRight className="size-3.5" />
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              render={<Link href={link.href} />}
              className="p-0 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground"
            >
              {link.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
