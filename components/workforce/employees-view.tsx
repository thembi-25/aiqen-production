"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Plus } from "lucide-react";

import { aiWorkforce } from "@/lib/data/ai-workforce";
import type { DeployedEmployee } from "@/lib/data/workforce/employees";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { employeeStatusToneAndLabel } from "@/lib/data/workforce/status-presentation";
import { cn } from "@/lib/utils";

const catalogBySlug = Object.fromEntries(aiWorkforce.map((role) => [role.slug, role]));

export function EmployeesView({
  deployed,
  availableSlugs,
}: {
  deployed: DeployedEmployee[];
  availableSlugs: string[];
}) {
  const [justDeployed, setJustDeployed] = useState<Set<string>>(new Set());
  const available = availableSlugs.map((slug) => catalogBySlug[slug]).filter(Boolean);

  return (
    <div className="space-y-10">
      <div>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Deployed
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deployed.map((employee) => {
            const catalog = catalogBySlug[employee.catalogSlug];
            const status = employeeStatusToneAndLabel(employee.status);

            return (
              <Link key={employee.id} href={`/workforce/employees/${employee.id}`}>
                <AiqenCard className="h-full transition-colors hover:border-primary/40">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {catalog && (
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-text">
                          <catalog.icon className="size-5" />
                        </span>
                      )}
                      <div>
                        <p className="font-semibold text-foreground">{employee.name}</p>
                        <p className="text-xs text-muted-foreground">{catalog?.title}</p>
                      </div>
                    </div>
                    <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
                  </div>

                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>{employee.tasksThisWeek} tasks this week</span>
                    <span>{employee.successRate}% success</span>
                  </div>
                </AiqenCard>
              </Link>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Available to deploy
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((role) => {
            const isDeployed = justDeployed.has(role.slug);

            return (
              <AiqenCard key={role.slug} className="h-full">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <role.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{role.title}</p>
                    <p className="text-xs text-muted-foreground">{role.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{role.description}</p>

                <button
                  type="button"
                  disabled={isDeployed}
                  onClick={() => setJustDeployed((prev) => new Set(prev).add(role.slug))}
                  className={cn(buttonVariants({ variant: isDeployed ? "outline" : "default" }), "mt-4 w-full gap-1.5")}
                >
                  {isDeployed ? (
                    <>
                      <CheckCircle2 className="size-4" /> Deployed
                    </>
                  ) : (
                    <>
                      <Plus className="size-4" /> Deploy
                    </>
                  )}
                </button>
              </AiqenCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
