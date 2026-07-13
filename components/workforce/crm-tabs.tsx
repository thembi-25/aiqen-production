"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const tabs = [
  { href: "/workforce/crm", label: "Contacts" },
  { href: "/workforce/crm/companies", label: "Companies" },
  { href: "/workforce/crm/deals", label: "Deals" },
];

export function CrmTabs() {
  const pathname = usePathname();

  return (
    <div className="mb-6 flex gap-1 border-b border-border">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "border-b-2 px-3 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
