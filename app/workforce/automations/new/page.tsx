import type { Metadata } from "next";

import { PageHeader } from "@/components/dashboard/page-header";
import { NewWorkflowView } from "@/components/workforce/new-workflow-view";

export const metadata: Metadata = {
  title: "New Workflow — AI Workforce",
};

export default function NewWorkflowPage() {
  return (
    <div>
      <PageHeader title="New workflow" description="Start from a template or build one from scratch." />
      <NewWorkflowView />
    </div>
  );
}
