import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Plus } from "lucide-react";

import { getWorkflows } from "@/lib/data/workforce/workflows";
import { getDeployedEmployees } from "@/lib/data/workforce/employees";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { buttonVariants } from "@/components/ui/button";
import { workflowStatusToneAndLabel } from "@/lib/data/workforce/status-presentation";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Automations — AI Workforce",
};

export default function AutomationsPage() {
  const workflows = getWorkflows();
  const employees = getDeployedEmployees();
  const employeeNameById = Object.fromEntries(employees.map((e) => [e.id, e.name]));

  return (
    <div>
      <PageHeader
        title="Automations"
        description="Workflows connecting triggers to your AI employees' actions."
        action={
          <Link href="/workforce/automations/new" className={cn(buttonVariants(), "gap-1.5")}>
            <Plus className="size-4" /> New workflow
          </Link>
        }
      />

      <AiqenCard className="divide-y divide-border p-0">
        {workflows.map((workflow) => {
          const status = workflowStatusToneAndLabel(workflow.status);
          const trigger = workflow.steps[0];
          const lastRun = workflow.runs[0];

          return (
            <Link
              key={workflow.id}
              href={`/workforce/automations/${workflow.id}`}
              className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-muted"
            >
              <div className="min-w-0">
                <p className="font-medium text-foreground">{workflow.name}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                  <span>{trigger?.label}</span>
                  {workflow.steps.length > 1 && (
                    <>
                      <ArrowRight className="size-3.5 shrink-0" />
                      <span>
                        {workflow.steps.length - 1} more step{workflow.steps.length - 1 === 1 ? "" : "s"}
                      </span>
                    </>
                  )}
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {workflow.employeeId ? employeeNameById[workflow.employeeId] : "Team-wide"} &middot;{" "}
                  {lastRun ? `Last ran ${lastRun.startedAt}` : "Never run"}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
                <ChevronRight className="size-4 text-muted-foreground" />
              </div>
            </Link>
          );
        })}
      </AiqenCard>
    </div>
  );
}
