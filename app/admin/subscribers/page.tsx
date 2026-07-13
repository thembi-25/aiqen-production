import type { Metadata } from "next";
import { desc } from "drizzle-orm";

import { db } from "@/lib/db";
import { subscribers } from "@/lib/db/schema";
import { PageHeader } from "@/components/dashboard/page-header";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { SubscriberStatusToggle } from "@/components/admin/subscriber-status-toggle";

export const metadata: Metadata = {
  title: "Subscribers — AIQEN Admin",
};

export default async function AdminSubscribersPage() {
  const rows = await db.select().from(subscribers).orderBy(desc(subscribers.createdAt));
  const activeCount = rows.filter((row) => row.status === "subscribed").length;

  return (
    <div>
      <PageHeader
        title="Subscribers"
        description="Newsletter and updates signups collected from the site footer."
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <AiqenCard>
          <div className="text-2xl font-bold text-foreground">{rows.length}</div>
          <div className="text-sm text-muted-foreground">Total signups</div>
        </AiqenCard>
        <AiqenCard>
          <div className="text-2xl font-bold text-foreground">{activeCount}</div>
          <div className="text-sm text-muted-foreground">Active subscribers</div>
        </AiqenCard>
      </div>

      <AiqenCard className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/50 text-xs text-muted-foreground">
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Source</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Subscribed</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                    No subscribers yet — they&apos;ll show up here as visitors sign up in the
                    footer.
                  </td>
                </tr>
              )}
              {rows.map((subscriber) => (
                <tr key={subscriber.id} className="border-b border-border/50 last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{subscriber.email}</td>
                  <td className="px-4 py-3 text-muted-foreground capitalize">{subscriber.source}</td>
                  <td className="px-4 py-3">
                    <StatusBadge tone={subscriber.status === "subscribed" ? "success" : "neutral"}>
                      {subscriber.status === "subscribed" ? "Subscribed" : "Unsubscribed"}
                    </StatusBadge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {subscriber.createdAt.toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <SubscriberStatusToggle subscriberId={subscriber.id} status={subscriber.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AiqenCard>
    </div>
  );
}
