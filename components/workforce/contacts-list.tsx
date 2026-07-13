"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import type { Contact, ContactStatus } from "@/lib/data/workforce/crm/contacts";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { cn } from "@/lib/utils";

const statusFilters: { value: ContactStatus | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "lead", label: "Leads" },
  { value: "customer", label: "Customers" },
  { value: "churned", label: "Churned" },
];

const statusTone: Record<ContactStatus, "info" | "success" | "neutral"> = {
  lead: "info",
  customer: "success",
  churned: "neutral",
};

export function ContactsList({
  contacts,
  companyNameById,
}: {
  contacts: Contact[];
  companyNameById: Record<string, string>;
}) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<ContactStatus | "all">("all");

  const filtered = useMemo(() => {
    return contacts.filter((contact) => {
      const matchesStatus = statusFilter === "all" || contact.status === statusFilter;
      const matchesQuery =
        !query ||
        contact.name.toLowerCase().includes(query.toLowerCase()) ||
        companyNameById[contact.companyId]?.toLowerCase().includes(query.toLowerCase());
      return matchesStatus && matchesQuery;
    });
  }, [contacts, companyNameById, query, statusFilter]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search contacts or companies..."
            className="pl-9"
          />
        </div>

        <div className="flex gap-1.5">
          {statusFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setStatusFilter(filter.value)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                statusFilter === filter.value
                  ? "bg-primary/10 text-primary-text"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <AiqenCard className="divide-y divide-border p-0">
        {filtered.map((contact) => (
          <Link
            key={contact.id}
            href={`/workforce/crm/contacts/${contact.id}`}
            className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-muted"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground">{contact.name}</p>
              <p className="text-xs text-muted-foreground">
                {contact.title} &middot; {companyNameById[contact.companyId]}
              </p>
            </div>
            <StatusBadge tone={statusTone[contact.status]}>{contact.status}</StatusBadge>
          </Link>
        ))}

        {filtered.length === 0 && (
          <p className="px-6 py-8 text-center text-sm text-muted-foreground">
            No contacts match your search.
          </p>
        )}
      </AiqenCard>
    </div>
  );
}
