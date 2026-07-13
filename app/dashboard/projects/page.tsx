import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { getProjects } from "@/lib/data/portal/projects";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { automationToneAndLabel, projectStatusToneAndLabel } from "@/lib/data/portal/status-presentation";

export const metadata: Metadata = {
  title: "Projects — AIQEN Client Portal",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div>
      <PageHeader
        title="Projects"
        description="Every consulting and automation engagement AIQEN is running for you."
      />

      <div className="space-y-4">
        {projects.map((project) => {
          const status = projectStatusToneAndLabel(project.status);
          const automation = automationToneAndLabel(project.automationStatus);

          return (
            <Link key={project.slug} href={`/dashboard/projects/${project.slug}`}>
              <AiqenCard className="transition-colors hover:border-primary/40">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="font-semibold text-foreground">{project.name}</h2>
                    <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{project.summary}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {project.owner} &middot; {project.startDate} &ndash; {project.targetDate}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <div className="flex gap-2">
                      <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
                      <StatusBadge tone={automation.tone}>{automation.label}</StatusBadge>
                    </div>
                    <ChevronRight className="size-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{project.progress}%</span>
                </div>
              </AiqenCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
