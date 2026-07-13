import type { Metadata } from "next";

import { getPlatformIntegrations, type IntegrationLifecycle } from "@/lib/data/admin/integrations";
import { PageHeader } from "@/components/dashboard/page-header";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { StatusBadge, type StatusTone } from "@/components/dashboard/status-badge";

export const metadata: Metadata = {
  title: "Integrations — AIQEN Admin",
};

const lifecycleTone: Record<IntegrationLifecycle, StatusTone> = {
  available: "success",
  beta: "info",
  deprecated: "danger",
};

const lifecycleLabel: Record<IntegrationLifecycle, string> = {
  available: "Available",
  beta: "Beta",
  deprecated: "Deprecated",
};

export default function AdminIntegrationsPage() {
  const integrations = getPlatformIntegrations();
  const totalConnections = integrations.reduce((sum, i) => sum + i.workspacesConnected, 0);

  return (
    <div>
      <PageHeader
        title="Integrations"
        description="Catalog of integrations offered across every workspace on the AI Workforce platform."
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <AiqenCard>
          <div className="text-2xl font-bold text-foreground">{integrations.length}</div>
          <div className="text-sm text-muted-foreground">Catalog integrations</div>
        </AiqenCard>
        <AiqenCard>
          <div className="text-2xl font-bold text-foreground">
            {integrations.filter((i) => i.lifecycle === "beta").length}
          </div>
          <div className="text-sm text-muted-foreground">In beta</div>
        </AiqenCard>
        <AiqenCard>
          <div className="text-2xl font-bold text-foreground">{totalConnections}</div>
          <div className="text-sm text-muted-foreground">Total workspace connections</div>
        </AiqenCard>
      </div>

      <AiqenCard className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/50 text-xs text-muted-foreground">
                <th className="px-4 py-3 font-medium">Integration</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Lifecycle</th>
                <th className="px-4 py-3 font-medium text-right">Workspaces connected</th>
              </tr>
            </thead>
            <tbody>
              {integrations.map((integration) => (
                <tr key={integration.id} className="border-b border-border/50 last:border-0">
                  <td className="px-4 py-3">
                    <div className="font-medium text-foreground">{integration.name}</div>
                    <div className="text-xs text-muted-foreground">{integration.description}</div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{integration.category}</td>
                  <td className="px-4 py-3">
                    <StatusBadge tone={lifecycleTone[integration.lifecycle]}>
                      {lifecycleLabel[integration.lifecycle]}
                    </StatusBadge>
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-foreground">
                    {integration.workspacesConnected}
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
