import "server-only";
import { sql } from "drizzle-orm";

import { db } from "@/lib/db";
import { users, subscriptions, auditLogs, leads } from "@/lib/db/schema";

export async function getUserMetrics() {
  const [row] = await db
    .select({
      total: sql<number>`count(*)::int`,
      suspended: sql<number>`count(*) filter (where ${users.suspended} = true)::int`,
      admins: sql<number>`count(*) filter (where ${users.role} = 'admin')::int`,
      verified: sql<number>`count(*) filter (where ${users.emailVerified} is not null)::int`,
    })
    .from(users);

  return row ?? { total: 0, suspended: 0, admins: 0, verified: 0 };
}

export async function getSubscriptionMetrics() {
  const [row] = await db
    .select({
      active: sql<number>`count(*) filter (where ${subscriptions.status} = 'active')::int`,
      trialing: sql<number>`count(*) filter (where ${subscriptions.status} = 'trialing')::int`,
      pastDue: sql<number>`count(*) filter (where ${subscriptions.status} = 'past_due')::int`,
      total: sql<number>`count(*)::int`,
    })
    .from(subscriptions);

  return row ?? { active: 0, trialing: 0, pastDue: 0, total: 0 };
}

export async function getOpenLeadCount() {
  const [row] = await db
    .select({
      count: sql<number>`count(*) filter (where ${leads.status} in ('new', 'contacted', 'qualified'))::int`,
    })
    .from(leads);

  return row?.count ?? 0;
}

export async function getAuditEventCount() {
  const [row] = await db.select({ count: sql<number>`count(*)::int` }).from(auditLogs);
  return row?.count ?? 0;
}

export async function getRecentAuditEvents(limit = 5) {
  return db
    .select()
    .from(auditLogs)
    .orderBy(sql`${auditLogs.createdAt} desc`)
    .limit(limit);
}
