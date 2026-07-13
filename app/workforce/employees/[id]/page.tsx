import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDeployedEmployeeById } from "@/lib/data/workforce/employees";
import { aiWorkforce } from "@/lib/data/ai-workforce";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { PageHeader } from "@/components/dashboard/page-header";
import { BarChart } from "@/components/workforce/bar-chart";
import { EmployeeActions } from "@/components/workforce/employee-actions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const employee = getDeployedEmployeeById(id);
  return { title: employee ? `${employee.name} — AI Workforce` : "AI Employee — AI Workforce" };
}

const dayLabels = ["6d ago", "5d ago", "4d ago", "3d ago", "2d ago", "Yesterday", "Today"];

export default async function EmployeeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const employee = getDeployedEmployeeById(id);

  if (!employee) notFound();

  const catalog = aiWorkforce.find((role) => role.slug === employee.catalogSlug);
  const chartData = employee.weeklyTaskCounts.map((value, index) => ({
    label: dayLabels[index],
    value,
  }));

  return (
    <div>
      <PageHeader
        title={employee.name}
        description={catalog ? `${catalog.title} · ${catalog.role}` : undefined}
        action={<EmployeeActions initialStatus={employee.status} />}
      />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <AiqenCard>
            <h2 className="text-lg font-semibold text-foreground">Tasks — last 7 days</h2>
            <div className="mt-6">
              <BarChart data={chartData} />
            </div>
          </AiqenCard>

          <AiqenCard>
            <h2 className="text-lg font-semibold text-foreground">Recent activity</h2>
            <ul className="mt-4 space-y-4">
              {employee.recentActivity.map((entry, index) => (
                <li key={index} className="flex items-start justify-between gap-4 text-sm">
                  <span className="text-foreground">{entry.label}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">{entry.timestamp}</span>
                </li>
              ))}
              {employee.recentActivity.length === 0 && (
                <li className="text-sm text-muted-foreground">No activity yet.</li>
              )}
            </ul>
          </AiqenCard>
        </div>

        <div className="space-y-6">
          <AiqenCard>
            <h2 className="text-lg font-semibold text-foreground">Performance</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Tasks this week</dt>
                <dd className="font-medium text-foreground">{employee.tasksThisWeek}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Success rate</dt>
                <dd className="font-medium text-foreground">{employee.successRate}%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Deployed</dt>
                <dd className="font-medium text-foreground">{employee.deployedAt}</dd>
              </div>
            </dl>
          </AiqenCard>

          <AiqenCard>
            <h2 className="text-lg font-semibold text-foreground">Integrations</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {employee.integrations.map((integration) => (
                <AiqenBadge key={integration} className="border-border bg-muted">
                  {integration}
                </AiqenBadge>
              ))}
              {employee.integrations.length === 0 && (
                <p className="text-sm text-muted-foreground">No integrations connected.</p>
              )}
            </div>
          </AiqenCard>

          {catalog && (
            <AiqenCard>
              <h2 className="text-lg font-semibold text-foreground">Capabilities</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {catalog.capabilities.map((capability) => (
                  <li key={capability}>• {capability}</li>
                ))}
              </ul>
            </AiqenCard>
          )}
        </div>
      </div>
    </div>
  );
}
