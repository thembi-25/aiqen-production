import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/auth/dal";
import { getTicketById } from "@/lib/data/portal/tickets";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { ThreadView } from "@/components/dashboard/thread-view";
import { ticketPriorityToneAndLabel, ticketStatusToneAndLabel } from "@/lib/data/portal/status-presentation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const ticket = getTicketById(id);
  return { title: ticket ? `${ticket.id} — AIQEN Client Portal` : "Ticket — AIQEN Client Portal" };
}

export default async function TicketDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ticket = getTicketById(id);

  if (!ticket) notFound();

  const user = await getCurrentUser();
  const status = ticketStatusToneAndLabel(ticket.status);
  const priority = ticketPriorityToneAndLabel(ticket.priority);

  return (
    <div>
      <PageHeader
        title={ticket.subject}
        description={`${ticket.id} · Opened ${ticket.createdAt}`}
        action={
          <div className="flex gap-2">
            <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
            <StatusBadge tone={priority.tone}>{priority.label}</StatusBadge>
          </div>
        }
      />

      <AiqenCard>
        <ThreadView
          initialMessages={ticket.messages}
          currentUserName={user.name ?? user.email}
        />
      </AiqenCard>
    </div>
  );
}
