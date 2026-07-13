import type { Metadata } from "next";

import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { WorkspaceSettingsForm } from "@/components/workforce/workspace-settings-form";

export const metadata: Metadata = {
  title: "Settings — AI Workforce",
};

export default function WorkforceSettingsPage() {
  return (
    <div>
      <PageHeader title="Settings" description="Workspace name and preferences." />

      <AiqenCard>
        <h2 className="text-lg font-semibold text-foreground">Workspace</h2>
        <div className="mt-5">
          <WorkspaceSettingsForm />
        </div>
      </AiqenCard>
    </div>
  );
}
