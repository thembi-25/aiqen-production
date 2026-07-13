import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";

import { db } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { leadStatusToneAndLabel } from "@/lib/data/admin/status-presentation";
import { painPointOptions, type AssessmentInput } from "@/lib/assessment/scoring";
import { industries } from "@/lib/data/industries";
import { PageHeader } from "@/components/dashboard/page-header";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { LeadStatusSelect } from "@/components/admin/lead-status-select";
import { LeadNotesForm } from "@/components/admin/lead-notes-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const [lead] = await db.select({ name: leads.name }).from(leads).where(eq(leads.id, id)).limit(1);
  return { title: lead ? `${lead.name} — AIQEN Admin` : "Lead — AIQEN Admin" };
}

export default async function AdminLeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [lead] = await db.select().from(leads).where(eq(leads.id, id)).limit(1);

  if (!lead) notFound();

  const { tone, label } = leadStatusToneAndLabel(lead.status);

  const isAssessment = lead.source === "assessment";

  let answers: AssessmentInput | null = null;
  if (isAssessment) {
    try {
      answers = lead.answers ? JSON.parse(lead.answers) : null;
    } catch {
      answers = null;
    }
  }

  let roiData: { inputs: Record<string, number>; results: Record<string, number> } | null = null;
  if (!isAssessment && lead.source === "roi-calculator") {
    try {
      roiData = lead.answers ? JSON.parse(lead.answers) : null;
    } catch {
      roiData = null;
    }
  }

  const selectedPainPoints = answers
    ? painPointOptions.filter((option) => answers!.painPoints.includes(option.id))
    : [];
  const industryTitle = answers
    ? industries.find((industry) => industry.slug === answers!.industry)?.title
    : undefined;

  return (
    <div>
      <Link
        href="/admin/leads"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Back to leads
      </Link>

      <PageHeader
        title={lead.name}
        description={`${lead.company} · ${lead.email}`}
        action={<StatusBadge tone={tone}>{label}</StatusBadge>}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <AiqenCard className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-foreground">AI Business Assessment</h2>
          {roiData ? (
            <dl className="mt-4 grid grid-cols-2 gap-4">
              {Object.entries(roiData.results).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-sm text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">
                    {typeof value === "number" ? value.toLocaleString() : String(value)}
                  </dd>
                </div>
              ))}
            </dl>
          ) : !answers ? (
            <p className="mt-3 text-sm text-muted-foreground">
              This lead came from {lead.source.replace(/-/g, " ")} — no assessment was completed.
            </p>
          ) : (
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm text-muted-foreground">Industry</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{industryTitle ?? answers.industry}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Company size</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{answers.companySize} employees</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Primary goal</dt>
                <dd className="mt-1 text-sm font-medium text-foreground capitalize">
                  {answers.primaryGoal.replace(/-/g, " ")}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Uses a CRM today</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{answers.usesCrm ? "Yes" : "No"}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Weekly customer interactions</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{answers.weeklyInteractions}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Pain points flagged</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {selectedPainPoints.map((option) => (
                    <span
                      key={option.id}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {option.label}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <a
                  href={`/api/assessment/pdf/${lead.id}`}
                  className="text-sm font-medium text-primary-text hover:underline"
                >
                  Download full PDF report
                </a>
              </div>
            </dl>
          )}

          <h2 className="mt-8 text-sm font-semibold text-foreground">Notes</h2>
          <div className="mt-3">
            <LeadNotesForm leadId={lead.id} notes={lead.notes} />
          </div>
        </AiqenCard>

        <AiqenCard className="space-y-5">
          <div>
            <h2 className="text-sm font-semibold text-foreground">Status</h2>
            <div className="mt-3">
              <LeadStatusSelect leadId={lead.id} status={lead.status} />
            </div>
          </div>

          <dl className="space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Source</dt>
              <dd className="capitalize text-foreground">{lead.source.replace(/-/g, " ")}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Readiness score</dt>
              <dd className="text-foreground">{lead.score ?? "N/A"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Created</dt>
              <dd className="text-foreground">{lead.createdAt.toLocaleDateString()}</dd>
            </div>
          </dl>
        </AiqenCard>
      </div>
    </div>
  );
}
