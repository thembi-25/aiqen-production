import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { getTickets } from "@/lib/data/portal/tickets";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { ticketPriorityToneAndLabel, ticketStatusToneAndLabel } from "@/lib/data/portal/status-presentation";

export const metadata: Metadata = {
  title: "Tickets — AIQEN Client Portal",
};

export default function TicketsPage() {
  const tickets = getTickets();

  return (
    <div>
      <PageHeader
        title="Support Tickets"
        description="Questions or issues with a live automation? Open a ticket and the team will jump in."
      />

      <div className="space-y-3">
        {tickets.map((ticket) => {
          const status = ticketStatusToneAndLabel(ticket.status);
          const priority = ticketPriorityToneAndLabel(ticket.priority);

          return (
            <Link key={ticket.id} href={`/dashboard/tickets/${ticket.id}`}>
              <AiqenCard className="transition-colors hover:border-primary/40">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground">{ticket.id}</p>
                    <h2 className="mt-0.5 font-semibold text-foreground">{ticket.subject}</h2>
                    <p className="mt-1 text-xs text-muted-foreground">Updated {ticket.updatedAt}</p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <div className="flex gap-2">
                      <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
                      <StatusBadge tone={priority.tone}>{priority.label}</StatusBadge>
                    </div>
                    <ChevronRight className="size-4 text-muted-foreground" />
                  </div>
                </div>
              </AiqenCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
