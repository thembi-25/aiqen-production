import type { ThreadMessage } from "@/lib/data/portal/types";

export type TicketStatus = "open" | "pending" | "closed";
export type TicketPriority = "low" | "medium" | "high";

export interface Ticket {
  id: string;
  subject: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: string;
  updatedAt: string;
  messages: ThreadMessage[];
}

export const tickets: Ticket[] = [
  {
    id: "TCK-1042",
    subject: "Slack integration returning duplicate messages",
    status: "open",
    priority: "high",
    createdAt: "Jul 10, 2026",
    updatedAt: "Jul 12, 2026",
    messages: [
      {
        id: "m1",
        author: "You",
        authorRole: "client",
        body: "Since yesterday the lead-alert bot is posting every new lead twice in #sales-leads. Can someone take a look?",
        timestamp: "Jul 10, 2026, 9:14 AM",
      },
      {
        id: "m2",
        author: "Diego Alvarez",
        authorRole: "aiqen",
        body: "Thanks for flagging — looks like the webhook retry logic is firing on a slow response instead of a real failure. Deploying a fix to add idempotency keys now.",
        timestamp: "Jul 10, 2026, 11:02 AM",
      },
      {
        id: "m3",
        author: "Diego Alvarez",
        authorRole: "aiqen",
        body: "Fix is out. Keeping an eye on it for 24 hours before I close this out — let us know if you see any more duplicates.",
        timestamp: "Jul 12, 2026, 3:40 PM",
      },
    ],
  },
  {
    id: "TCK-1038",
    subject: "Update dispatch automation business hours",
    status: "pending",
    priority: "medium",
    createdAt: "Jul 6, 2026",
    updatedAt: "Jul 8, 2026",
    messages: [
      {
        id: "m1",
        author: "You",
        authorRole: "client",
        body: "We're extending Saturday support hours to 6pm starting next month — can the dispatch agent's business-hours logic be updated?",
        timestamp: "Jul 6, 2026, 2:20 PM",
      },
      {
        id: "m2",
        author: "Priya Nair",
        authorRole: "aiqen",
        body: "Sure thing. Can you confirm the new Saturday hours and whether this applies to all regions or just US-East?",
        timestamp: "Jul 8, 2026, 10:05 AM",
      },
    ],
  },
  {
    id: "TCK-1021",
    subject: "Question about invoice INV-1029",
    status: "closed",
    priority: "low",
    createdAt: "Jun 28, 2026",
    updatedAt: "Jun 29, 2026",
    messages: [
      {
        id: "m1",
        author: "You",
        authorRole: "client",
        body: "Was Phase 1 of the CRM sync project billed separately from the discovery workshop? Trying to match this up for our books.",
        timestamp: "Jun 28, 2026, 4:45 PM",
      },
      {
        id: "m2",
        author: "Accounts Team",
        authorRole: "aiqen",
        body: "Good question — the discovery workshop was included in the Phase 1 fixed fee, so INV-1029 covers both. Let me know if you need a breakdown for your records.",
        timestamp: "Jun 29, 2026, 9:30 AM",
      },
    ],
  },
];

export function getTickets() {
  return tickets;
}

export function getTicketById(id: string) {
  return tickets.find((ticket) => ticket.id === id);
}
