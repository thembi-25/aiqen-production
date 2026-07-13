import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { desc } from "drizzle-orm";

import { db } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { leadStatusToneAndLabel } from "@/lib/data/admin/status-presentation";
import { PageHeader } from "@/components/dashboard/page-header";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { StatusBadge } from "@/components/dashboard/status-badge";

export const metadata: Metadata = {
  title: "Leads & Assessments — AIQEN Admin",
};

export default async function AdminLeadsPage() {
  const rows = await db.select().from(leads).orderBy(desc(leads.createdAt));

  return (
    <div>
      <PageHeader
        title="Leads & AI Business Assessments"
        description="Inbound leads from the AI Business Assessment, ROI calculator, and contact form."
      />

      <AiqenCard className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/50 text-xs text-muted-foreground">
                <th className="px-4 py-3 font-medium">Lead</th>
                <th className="px-4 py-3 font-medium">Source</th>
                <th className="px-4 py-3 font-medium">Score</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Created</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                    No leads yet — they&apos;ll show up here as visitors complete the AI Business
                    Assessment.
                  </td>
                </tr>
              )}
              {rows.map((lead) => {
                const { tone, label } = leadStatusToneAndLabel(lead.status);

                return (
                  <tr key={lead.id} className="border-b border-border/50 last:border-0">
                    <td className="px-4 py-3">
                      <div className="font-medium text-foreground">{lead.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {lead.company} · {lead.email}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground capitalize">
                      {lead.source.replace(/-/g, " ")}
                    </td>
                    <td className="px-4 py-3 text-foreground">{lead.score ?? "—"}</td>
                    <td className="px-4 py-3">
                      <StatusBadge tone={tone}>{label}</StatusBadge>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {lead.createdAt.toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary-text hover:underline"
                      >
                        View <ArrowUpRight className="size-3" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </AiqenCard>
    </div>
  );
}
