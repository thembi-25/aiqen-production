import type { Metadata } from "next";

import { getIntegrations } from "@/lib/data/workforce/integrations";
import { PageHeader } from "@/components/dashboard/page-header";
import { IntegrationsGrid } from "@/components/workforce/integrations-grid";

export const metadata: Metadata = {
  title: "Integrations — AI Workforce",
};

export default function IntegrationsPage() {
  const integrations = getIntegrations();

  return (
    <div>
      <PageHeader title="Integrations" description="Connect the tools your AI employees work with." />
      <IntegrationsGrid integrations={integrations} />
    </div>
  );
}
