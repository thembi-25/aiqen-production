import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pencil } from "lucide-react";

import { getWorkflowById } from "@/lib/data/workforce/workflows";
import { getDeployedEmployees } from "@/lib/data/workforce/employees";
import { PageHeader } from "@/components/dashboard/page-header";
import { StepSequence } from "@/components/workforce/step-sequence";
import { RunHistory } from "@/components/workforce/run-history";
import { WorkflowStatusToggle } from "@/components/workforce/workflow-status-toggle";
import { WorkflowTestRun } from "@/components/workforce/workflow-test-run";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const workflow = getWorkflowById(id);
  return { title: workflow ? `${workflow.name} — AI Workforce` : "Workflow — AI Workforce" };
}

export default async function WorkflowDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workflow = getWorkflowById(id);

  if (!workflow) notFound();

  const employees = getDeployedEmployees();
  const employeeName = workflow.employeeId
    ? employees.find((e) => e.id === workflow.employeeId)?.name
    : null;

  return (
    <div>
      <PageHeader
        title={workflow.name}
        description={employeeName ? `Assigned to ${employeeName}` : "Team-wide workflow"}
        action={
          <div className="flex items-center gap-3">
            <WorkflowStatusToggle initialStatus={workflow.status} />
            <Link
              href={`/workforce/automations/${workflow.id}/edit`}
              className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
            >
              <Pencil className="size-4" /> Edit
            </Link>
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Steps</h2>
          <StepSequence steps={workflow.steps} />
          <WorkflowTestRun steps={workflow.steps} />
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Run history
          </h2>
          <RunHistory runs={workflow.runs} />
        </div>
      </div>
    </div>
  );
}
