import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Phone, Building2, ArrowLeft } from "lucide-react";

import { getContactById } from "@/lib/data/workforce/crm/contacts";
import { getCompanyById } from "@/lib/data/workforce/crm/companies";
import { getDeals } from "@/lib/data/workforce/crm/deals";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { dealStageToneAndLabel } from "@/lib/data/workforce/status-presentation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const contact = getContactById(id);
  return { title: contact ? `${contact.name} — AI Workforce CRM` : "Contact — AI Workforce" };
}

const statusTone = { lead: "info", customer: "success", churned: "neutral" } as const;

export default async function ContactDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const contact = getContactById(id);

  if (!contact) notFound();

  const company = getCompanyById(contact.companyId);
  const relatedDeals = getDeals().filter((deal) => deal.contactId === contact.id);

  return (
    <div>
      <Link
        href="/workforce/crm"
        className="mb-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Back to CRM
      </Link>

      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">{contact.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {contact.title} {company && `at ${company.name}`}
          </p>
        </div>
        <StatusBadge tone={statusTone[contact.status]}>{contact.status}</StatusBadge>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <AiqenCard>
          <h2 className="text-lg font-semibold text-foreground">Activity timeline</h2>
          <ol className="mt-5 space-y-5 border-l border-border pl-5">
            {contact.activity.map((entry, index) => (
              <li key={index} className="relative">
                <span className="absolute top-1.5 -left-[1.4rem] size-2 rounded-full bg-primary" />
                <p className="text-sm text-foreground">{entry.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{entry.timestamp}</p>
              </li>
            ))}
          </ol>
        </AiqenCard>

        <div className="space-y-6">
          <AiqenCard>
            <h2 className="text-lg font-semibold text-foreground">Contact info</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground" />
                <a href={`mailto:${contact.email}`} className="text-foreground hover:text-primary-text">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-muted-foreground" />
                <span className="text-foreground">{contact.phone}</span>
              </div>
              {company && (
                <div className="flex items-center gap-2">
                  <Building2 className="size-4 text-muted-foreground" />
                  <span className="text-foreground">{company.name}</span>
                </div>
              )}
            </dl>
          </AiqenCard>

          {relatedDeals.length > 0 && (
            <AiqenCard>
              <h2 className="text-lg font-semibold text-foreground">Deals</h2>
              <div className="mt-4 space-y-3">
                {relatedDeals.map((deal) => {
                  const stage = dealStageToneAndLabel(deal.stage);
                  return (
                    <div key={deal.id} className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">{deal.name}</p>
                        <p className="text-xs text-muted-foreground">
                          ${deal.value.toLocaleString()}
                        </p>
                      </div>
                      <StatusBadge tone={stage.tone}>{stage.label}</StatusBadge>
                    </div>
                  );
                })}
              </div>
            </AiqenCard>
          )}
        </div>
      </div>
    </div>
  );
}
