import type { Metadata } from "next";
import Link from "next/link";
import { Bot, MessagesSquare, ListTodo, Workflow, ArrowRight } from "lucide-react";

import { getDeployedEmployees } from "@/lib/data/workforce/employees";
import { getConversations } from "@/lib/data/workforce/conversations";
import { getTasks } from "@/lib/data/workforce/tasks";
import { getWorkflows } from "@/lib/data/workforce/workflows";
import { aiWorkforce } from "@/lib/data/ai-workforce";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { employeeStatusToneAndLabel } from "@/lib/data/workforce/status-presentation";

export const metadata: Metadata = {
  title: "Dashboard — AI Workforce",
};

export default function WorkforceDashboardPage() {
  const employees = getDeployedEmployees();
  const conversations = getConversations();
  const tasks = getTasks();
  const workflows = getWorkflows();

  const stats = [
    {
      label: "Active employees",
      value: employees.filter((e) => e.status === "active").length,
      icon: Bot,
      href: "/workforce/employees",
    },
    {
      label: "Open conversations",
      value: conversations.filter((c) => c.status === "open").length,
      icon: MessagesSquare,
      href: "/workforce/conversations",
    },
    {
      label: "Tasks in progress",
      value: tasks.filter((t) => t.status === "in-progress").length,
      icon: ListTodo,
      href: "/workforce/tasks",
    },
    {
      label: "Workflows running",
      value: workflows.filter((w) => w.status === "active").length,
      icon: Workflow,
      href: "/workforce/automations",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Welcome back"
        description="Here's how your AI workforce is performing across Acme Robotics."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <AiqenCard className="transition-colors hover:border-primary/40">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <stat.icon className="size-4 text-muted-foreground" />
              </div>
              <p className="mt-3 text-2xl font-bold text-foreground">{stat.value}</p>
            </AiqenCard>
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <AiqenCard>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Your AI employees</h2>
            <Link
              href="/workforce/employees"
              className="flex items-center gap-1 text-sm font-medium text-primary-text hover:underline"
            >
              View all <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {employees.map((employee) => {
              const catalog = aiWorkforce.find((role) => role.slug === employee.catalogSlug);
              const status = employeeStatusToneAndLabel(employee.status);

              return (
                <Link
                  key={employee.id}
                  href={`/workforce/employees/${employee.id}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-border p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center gap-3">
                    {catalog && (
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-text">
                        <catalog.icon className="size-4.5" />
                      </span>
                    )}
                    <div>
                      <p className="text-sm font-medium text-foreground">{employee.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {employee.tasksThisWeek} tasks this week
                      </p>
                    </div>
                  </div>
                  <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
                </Link>
              );
            })}
          </div>
        </AiqenCard>

        <AiqenCard>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Recent conversations</h2>
            <Link
              href="/workforce/conversations"
              className="flex items-center gap-1 text-sm font-medium text-primary-text hover:underline"
            >
              View all <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <ul className="mt-5 space-y-4">
            {conversations.slice(0, 4).map((conversation) => (
              <li key={conversation.id}>
                <Link href="/workforce/conversations" className="block">
                  <p className="text-sm font-medium text-foreground">{conversation.withName}</p>
                  <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                    {conversation.messages[conversation.messages.length - 1]?.body}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{conversation.lastMessageAt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </AiqenCard>
      </div>
    </div>
  );
}
