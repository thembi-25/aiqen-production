import type { Metadata } from "next";

import { getContacts } from "@/lib/data/workforce/crm/contacts";
import { getCompanies } from "@/lib/data/workforce/crm/companies";
import { PageHeader } from "@/components/dashboard/page-header";
import { CrmTabs } from "@/components/workforce/crm-tabs";
import { ContactsList } from "@/components/workforce/contacts-list";

export const metadata: Metadata = {
  title: "CRM — AI Workforce",
};

export default function CrmContactsPage() {
  const contacts = getContacts();
  const companies = getCompanies();
  const companyNameById = Object.fromEntries(companies.map((company) => [company.id, company.name]));

  return (
    <div>
      <PageHeader title="CRM" description="Contacts, companies, and deals your AI workforce is working." />
      <CrmTabs />
      <ContactsList contacts={contacts} companyNameById={companyNameById} />
    </div>
  );
}
