import type { Metadata } from "next";

import { getNotifications } from "@/lib/data/portal/notifications";
import { PageHeader } from "@/components/dashboard/page-header";
import { NotificationsList } from "@/components/dashboard/notifications-list";

export const metadata: Metadata = {
  title: "Notifications — AIQEN Client Portal",
};

export default function NotificationsPage() {
  const notifications = getNotifications();

  return (
    <div>
      <PageHeader title="Notifications" description="Updates across your projects, tickets, and billing." />
      <NotificationsList initialNotifications={notifications} />
    </div>
  );
}
