import type { Metadata } from "next";
import { desc, eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { auditLogs, users } from "@/lib/db/schema";
import { PageHeader } from "@/components/dashboard/page-header";
import { AiqenCard } from "@/components/ui/aiqen-card";

export const metadata: Metadata = {
  title: "Audit Logs — AIQEN Admin",
};

export default async function AdminAuditLogsPage() {
  const rows = await db
    .select({
      id: auditLogs.id,
      action: auditLogs.action,
      targetId: auditLogs.targetId,
      metadata: auditLogs.metadata,
      createdAt: auditLogs.createdAt,
      actorName: users.name,
      actorEmail: users.email,
    })
    .from(auditLogs)
    .leftJoin(users, eq(auditLogs.actorId, users.id))
    .orderBy(desc(auditLogs.createdAt))
    .limit(100);

  return (
    <div>
      <PageHeader
        title="Audit Logs"
        description="Every admin action — role changes, suspensions, impersonation, and feature flag toggles — logged for accountability."
      />

      <AiqenCard className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/50 text-xs text-muted-foreground">
                <th className="px-4 py-3 font-medium">Actor</th>
                <th className="px-4 py-3 font-medium">Action</th>
                <th className="px-4 py-3 font-medium">Target</th>
                <th className="px-4 py-3 font-medium">Metadata</th>
                <th className="px-4 py-3 font-medium">When</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                    No admin activity has been recorded yet.
                  </td>
                </tr>
              )}
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-border/50 last:border-0">
                  <td className="px-4 py-3">
                    <div className="font-medium text-foreground">{row.actorName ?? "Unknown"}</div>
                    <div className="text-xs text-muted-foreground">{row.actorEmail}</div>
                  </td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">{row.action}</code>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{row.targetId ?? "—"}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{row.metadata ?? "—"}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {row.createdAt.toLocaleString()}
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
