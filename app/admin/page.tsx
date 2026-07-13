import type { Metadata } from "next";
import Link from "next/link";
import { Users, CreditCard, Target, ScrollText, ArrowRight } from "lucide-react";

import {
  getUserMetrics,
  getSubscriptionMetrics,
  getRecentAuditEvents,
  getAuditEventCount,
  getOpenLeadCount,
} from "@/lib/admin/metrics";
import { getTickets } from "@/lib/data/portal/tickets";
import { getWorkflows } from "@/lib/data/workforce/workflows";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { inArray } from "drizzle-orm";
import { PageHeader } from "@/components/dashboard/page-header";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { BarChart } from "@/components/workforce/bar-chart";

export const metadata: Metadata = {
  title: "Overview — AIQEN Admin",
};

export default async function AdminOverviewPage() {
  const [userMetrics, subscriptionMetrics, recentEvents, auditEventCount, openLeads] = await Promise.all([
    getUserMetrics(),
    getSubscriptionMetrics(),
    getRecentAuditEvents(6),
    getAuditEventCount(),
    getOpenLeadCount(),
  ]);

  const actorIds = Array.from(new Set(recentEvents.map((event) => event.actorId)));
  const actors = actorIds.length
    ? await db
        .select({ id: users.id, name: users.name, email: users.email })
        .from(users)
        .where(inArray(users.id, actorIds))
    : [];
  const actorMap = new Map(actors.map((actor) => [actor.id, actor.name ?? actor.email]));

  const openTickets = getTickets().filter((ticket) => ticket.status !== "closed").length;
  const activeWorkflows = getWorkflows().filter((workflow) => workflow.status === "active").length;

  const stats = [
    { label: "Total users", value: userMetrics.total, icon: Users, href: "/admin/users" },
    {
      label: "Active subscriptions",
      value: subscriptionMetrics.active,
      icon: CreditCard,
      href: "/admin/users",
    },
    { label: "Open leads", value: openLeads, icon: Target, href: "/admin/leads" },
    { label: "Audit events (all time)", value: auditEventCount, icon: ScrollText, href: "/admin/audit-logs" },
  ];

  return (
    <div>
      <PageHeader
        title="Overview"
        description="Platform-wide health across users, billing, leads, and automation."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <AiqenCard key={stat.label}>
            <div className="flex items-center justify-between">
              <stat.icon className="size-4 text-muted-foreground" />
              <Link href={stat.href} className="text-xs text-muted-foreground hover:text-foreground">
                View <ArrowRight className="inline size-3" />
              </Link>
            </div>
            <div className="mt-3 text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </AiqenCard>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <AiqenCard>
          <h2 className="text-sm font-semibold text-foreground">User accounts</h2>
          <p className="mt-1 text-xs text-muted-foreground">Breakdown by verification and status.</p>
          <div className="mt-6">
            <BarChart
              data={[
                { label: "Total", value: userMetrics.total },
                { label: "Verified", value: userMetrics.verified },
                { label: "Admins", value: userMetrics.admins },
                { label: "Suspended", value: userMetrics.suspended },
              ]}
            />
          </div>
        </AiqenCard>

        <AiqenCard>
          <h2 className="text-sm font-semibold text-foreground">Platform activity</h2>
          <p className="mt-1 text-xs text-muted-foreground">Live snapshot across the Client Portal and AI Workforce SaaS.</p>
          <div className="mt-6">
            <BarChart
              data={[
                { label: "Active workflows", value: activeWorkflows },
                { label: "Open tickets", value: openTickets },
                { label: "Open leads", value: openLeads },
                { label: "Subscriptions", value: subscriptionMetrics.total },
              ]}
            />
          </div>
        </AiqenCard>
      </div>

      <AiqenCard className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Recent admin activity</h2>
          <Link href="/admin/audit-logs" className="text-xs text-primary-text hover:underline">
            View all
          </Link>
        </div>

        <ul className="mt-4 divide-y divide-border/50">
          {recentEvents.length === 0 && (
            <li className="py-4 text-sm text-muted-foreground">No admin activity recorded yet.</li>
          )}
          {recentEvents.map((event) => (
            <li key={event.id} className="flex items-center justify-between gap-4 py-3 text-sm">
              <div>
                <span className="font-medium text-foreground">{actorMap.get(event.actorId) ?? "Unknown"}</span>{" "}
                <span className="text-muted-foreground">{event.action.replace(/_/g, " ").replace(/\./g, " · ")}</span>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">
                {event.createdAt.toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      </AiqenCard>
    </div>
  );
}
