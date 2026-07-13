import type { Metadata } from "next";
import { FileText, Link as LinkIcon, HelpCircle } from "lucide-react";

import { getKnowledgeSources, type KnowledgeSourceType } from "@/lib/data/workforce/knowledge-sources";
import { getDeployedEmployees } from "@/lib/data/workforce/employees";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { knowledgeSourceStatusToneAndLabel } from "@/lib/data/workforce/status-presentation";

export const metadata: Metadata = {
  title: "Knowledge Base — AI Workforce",
};

const typeIcon: Record<KnowledgeSourceType, typeof FileText> = {
  document: FileText,
  url: LinkIcon,
  faq: HelpCircle,
};

export default function KnowledgeBasePage() {
  const sources = getKnowledgeSources();
  const employees = getDeployedEmployees();
  const employeeNameById = Object.fromEntries(employees.map((e) => [e.id, e.name]));

  return (
    <div>
      <PageHeader
        title="Knowledge Base"
        description="Sources your AI employees are grounded in when they respond."
      />

      <AiqenCard className="divide-y divide-border p-0">
        {sources.map((source) => {
          const Icon = typeIcon[source.type];
          const status = knowledgeSourceStatusToneAndLabel(source.status);

          return (
            <div key={source.id} className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <Icon className="size-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{source.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Used by{" "}
                    {source.linkedEmployeeIds.map((id) => employeeNameById[id]).filter(Boolean).join(", ") ||
                      "No employees yet"}{" "}
                    &middot; Updated {source.updatedAt}
                  </p>
                </div>
              </div>
              <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
            </div>
          );
        })}
      </AiqenCard>
    </div>
  );
}
