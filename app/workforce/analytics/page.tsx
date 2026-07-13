import type { Metadata } from "next";
import { Bot, CheckCircle2, MessagesSquare, Workflow } from "lucide-react";

import { getDeployedEmployees } from "@/lib/data/workforce/employees";
import { getConversations } from "@/lib/data/workforce/conversations";
import { getWorkflows } from "@/lib/data/workforce/workflows";
import { getDealsByStage, type DealStage } from "@/lib/data/workforce/crm/deals";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { BarChart } from "@/components/workforce/bar-chart";

export const metadata: Metadata = {
  title: "Analytics — AI Workforce",
};

const dayLabels = ["6d ago", "5d ago", "4d ago", "3d ago", "2d ago", "Yesterday", "Today"];
const stages: DealStage[] = ["new", "qualified", "proposal", "won", "lost"];
const stageLabels: Record<DealStage, string> = {
  new: "New",
  qualified: "Qualified",
  proposal: "Proposal",
  won: "Won",
  lost: "Lost",
};

export default function AnalyticsPage() {
  const employees = getDeployedEmployees();
  const conversations = getConversations();
  const workflows = getWorkflows();

  const totalTasksThisWeek = employees.reduce((sum, e) => sum + e.tasksThisWeek, 0);
  const avgSuccessRate = Math.round(
    employees.reduce((sum, e) => sum + e.successRate, 0) / employees.length
  );

  const stats = [
    { label: "Tasks this week", value: totalTasksThisWeek, icon: Bot },
    { label: "Avg. success rate", value: `${avgSuccessRate}%`, icon: CheckCircle2 },
    {
      label: "Open conversations",
      value: conversations.filter((c) => c.status === "open").length,
      icon: MessagesSquare,
    },
    {
      label: "Active workflows",
      value: workflows.filter((w) => w.status === "active").length,
      icon: Workflow,
    },
  ];

  const tasksByEmployee = employees.map((e) => ({ label: e.name.split(" ")[0], value: e.tasksThisWeek }));

  const weeklyVolume = dayLabels.map((label, index) => ({
    label,
    value: employees.reduce((sum, e) => sum + (e.weeklyTaskCounts[index] ?? 0), 0),
  }));

  const dealsByStage = stages.map((stage) => ({
    label: stageLabels[stage],
    value: getDealsByStage(stage).reduce((sum, deal) => sum + deal.value, 0),
  }));

  return (
    <div>
      <PageHeader title="Analytics" description="Performance across your AI workforce and pipeline." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <AiqenCard key={stat.label}>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <stat.icon className="size-4 text-muted-foreground" />
            </div>
            <p className="mt-3 text-2xl font-bold text-foreground">{stat.value}</p>
          </AiqenCard>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <AiqenCard>
          <h2 className="text-lg font-semibold text-foreground">Weekly task volume</h2>
          <p className="text-xs text-muted-foreground">Tasks completed across all employees, last 7 days</p>
          <div className="mt-6">
            <BarChart data={weeklyVolume} />
          </div>
        </AiqenCard>

        <AiqenCard>
          <h2 className="text-lg font-semibold text-foreground">Tasks by employee</h2>
          <p className="text-xs text-muted-foreground">This week</p>
          <div className="mt-6">
            <BarChart data={tasksByEmployee} />
          </div>
        </AiqenCard>

        <AiqenCard className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-foreground">Pipeline value by stage</h2>
          <p className="text-xs text-muted-foreground">Total deal value across your CRM pipeline</p>
          <div className="mt-6">
            <BarChart data={dealsByStage} valueFormatter={(v) => `$${v.toLocaleString()}`} />
          </div>
        </AiqenCard>
      </div>
    </div>
  );
}
