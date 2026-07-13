import type { Metadata } from "next";
import { Building2 } from "lucide-react";

import { getCompanies } from "@/lib/data/workforce/crm/companies";
import { getContacts } from "@/lib/data/workforce/crm/contacts";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { CrmTabs } from "@/components/workforce/crm-tabs";

export const metadata: Metadata = {
  title: "Companies — AI Workforce CRM",
};

export default function CompaniesPage() {
  const companies = getCompanies();
  const contacts = getContacts();

  return (
    <div>
      <PageHeader title="CRM" description="Contacts, companies, and deals your AI workforce is working." />
      <CrmTabs />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => {
          const contactCount = contacts.filter((contact) => contact.companyId === company.id).length;

          return (
            <AiqenCard key={company.id}>
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Building2 className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{company.name}</p>
                  <p className="text-xs text-muted-foreground">{company.domain}</p>
                </div>
              </div>
              <dl className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <dt>Industry</dt>
                  <dd className="text-foreground">{company.industry}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Company size</dt>
                  <dd className="text-foreground">{company.size}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Contacts</dt>
                  <dd className="text-foreground">{contactCount}</dd>
                </div>
              </dl>
            </AiqenCard>
          );
        })}
      </div>
    </div>
  );
}
