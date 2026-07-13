import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getWorkflowById } from "@/lib/data/workforce/workflows";
import { PageHeader } from "@/components/dashboard/page-header";
import { WorkflowBuilder } from "@/components/workforce/workflow-builder";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const workflow = getWorkflowById(id);
  return {
    title: workflow ? `Edit ${workflow.name} — AI Workforce` : "Edit Workflow — AI Workforce",
  };
}

export default async function EditWorkflowPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workflow = getWorkflowById(id);

  if (!workflow) notFound();

  return (
    <div>
      <PageHeader title="Edit workflow" description="Changes here are local to this session." />
      <WorkflowBuilder initialName={workflow.name} initialSteps={workflow.steps} />
    </div>
  );
}
