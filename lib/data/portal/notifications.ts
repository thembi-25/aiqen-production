export type NotificationType = "ticket" | "invoice" | "project" | "message" | "system";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  href: string;
}

export const notifications: Notification[] = [
  {
    id: "notif-1",
    type: "message",
    title: "New message from AIQEN Account Team",
    description: "Sounds good — we'll bring the updated timeline to Thursday's call.",
    timestamp: "Jul 11, 2026, 8:40 AM",
    read: false,
    href: "/dashboard/messages",
  },
  {
    id: "notif-2",
    type: "ticket",
    title: "Update on TCK-1042",
    description: "Diego Alvarez replied: fix is out, keeping an eye on it for 24 hours.",
    timestamp: "Jul 12, 2026, 3:40 PM",
    read: false,
    href: "/dashboard/tickets/TCK-1042",
  },
  {
    id: "notif-3",
    type: "invoice",
    title: "Invoice INV-1041 is due soon",
    description: "$18,500 due Jul 31, 2026 for Website Automation Overhaul — Milestone 2.",
    timestamp: "Jul 1, 2026, 9:00 AM",
    read: false,
    href: "/dashboard/invoices",
  },
  {
    id: "notif-4",
    type: "project",
    title: "Milestone completed on AI Support Triage Agent",
    description: "Draft-reply generation model shipped and is now live in production.",
    timestamp: "May 28, 2026, 2:15 PM",
    read: true,
    href: "/dashboard/projects/ai-support-triage-agent",
  },
  {
    id: "notif-5",
    type: "system",
    title: "New meeting notes available",
    description: "Notes from \"Website Automation — Integration Review\" have been posted.",
    timestamp: "Jul 8, 2026, 5:30 PM",
    read: true,
    href: "/dashboard/meeting-notes/mtg-2026-07-08",
  },
  {
    id: "notif-6",
    type: "invoice",
    title: "Invoice INV-1035 paid",
    description: "$24,000 payment received for AI Support Triage Agent — Production Rollout.",
    timestamp: "Jun 3, 2026, 10:00 AM",
    read: true,
    href: "/dashboard/invoices",
  },
];

export function getNotifications() {
  return notifications;
}

export function getUnreadNotificationCount() {
  return notifications.filter((notification) => !notification.read).length;
}
