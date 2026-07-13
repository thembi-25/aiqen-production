import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, CircleDashed, CircleDot } from "lucide-react";

import { getProjectBySlug } from "@/lib/data/portal/projects";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { automationToneAndLabel, projectStatusToneAndLabel } from "@/lib/data/portal/status-presentation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.name} — AIQEN Client Portal` : "Project — AIQEN Client Portal" };
}

const milestoneIcon = {
  done: CheckCircle2,
  "in-progress": CircleDot,
  upcoming: CircleDashed,
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const status = projectStatusToneAndLabel(project.status);
  const automation = automationToneAndLabel(project.automationStatus);

  return (
    <div>
      <PageHeader
        title={project.name}
        description={project.summary}
        action={
          <div className="flex gap-2">
            <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
            <StatusBadge tone={automation.tone}>{automation.label}</StatusBadge>
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <AiqenCard>
          <h2 className="text-lg font-semibold text-foreground">Milestones</h2>
          <ol className="mt-5 space-y-5">
            {project.milestones.map((milestone) => {
              const Icon = milestoneIcon[milestone.status];
              return (
                <li key={milestone.label} className="flex items-start gap-3">
                  <Icon
                    className={
                      milestone.status === "done"
                        ? "mt-0.5 size-5 shrink-0 text-primary"
                        : milestone.status === "in-progress"
                          ? "mt-0.5 size-5 shrink-0 text-accent"
                          : "mt-0.5 size-5 shrink-0 text-muted-foreground"
                    }
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{milestone.label}</p>
                    <p className="text-xs text-muted-foreground">{milestone.date}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </AiqenCard>

        <div className="space-y-6">
          <AiqenCard>
            <h2 className="text-lg font-semibold text-foreground">Details</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Owner</dt>
                <dd className="text-right font-medium text-foreground">{project.owner}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Started</dt>
                <dd className="font-medium text-foreground">{project.startDate}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Target</dt>
                <dd className="font-medium text-foreground">{project.targetDate}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Progress</dt>
                <dd className="font-medium text-foreground">{project.progress}%</dd>
              </div>
            </dl>
          </AiqenCard>

          <AiqenCard>
            <h2 className="text-lg font-semibold text-foreground">Integrations</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.integrations.map((integration) => (
                <AiqenBadge key={integration} className="border-border bg-muted">
                  {integration}
                </AiqenBadge>
              ))}
            </div>
          </AiqenCard>
        </div>
      </div>
    </div>
  );
}
