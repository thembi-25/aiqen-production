import type { Metadata } from "next";

import { getDealsByStage, type DealStage } from "@/lib/data/workforce/crm/deals";
import { getCompanies } from "@/lib/data/workforce/crm/companies";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { CrmTabs } from "@/components/workforce/crm-tabs";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { dealStageToneAndLabel } from "@/lib/data/workforce/status-presentation";

export const metadata: Metadata = {
  title: "Deals — AI Workforce CRM",
};

const stages: DealStage[] = ["new", "qualified", "proposal", "won", "lost"];

export default function DealsPage() {
  const companies = getCompanies();
  const companyNameById = Object.fromEntries(companies.map((company) => [company.id, company.name]));

  return (
    <div>
      <PageHeader title="CRM" description="Contacts, companies, and deals your AI workforce is working." />
      <CrmTabs />

      <div className="grid gap-4 lg:grid-cols-5">
        {stages.map((stage) => {
          const dealsInStage = getDealsByStage(stage);
          const badge = dealStageToneAndLabel(stage);
          const total = dealsInStage.reduce((sum, deal) => sum + deal.value, 0);

          return (
            <div key={stage}>
              <div className="mb-3">
                <StatusBadge tone={badge.tone}>{badge.label}</StatusBadge>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {dealsInStage.length} deals &middot; ${total.toLocaleString()}
                </p>
              </div>

              <div className="space-y-3">
                {dealsInStage.map((deal) => (
                  <AiqenCard key={deal.id}>
                    <p className="text-sm font-medium text-foreground">{deal.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{companyNameById[deal.companyId]}</p>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground">${deal.value.toLocaleString()}</span>
                      <span className="text-muted-foreground">{deal.closeDate}</span>
                    </div>
                  </AiqenCard>
                ))}

                {dealsInStage.length === 0 && (
                  <p className="rounded-lg border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
                    No deals
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
