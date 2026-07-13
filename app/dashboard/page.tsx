import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, TriangleAlert, ArrowRight, FolderKanban, Ticket, MessageSquare, Receipt } from "lucide-react";

import { getCurrentUser, hasRole } from "@/lib/auth/dal";
import { getProjects } from "@/lib/data/portal/projects";
import { getTickets } from "@/lib/data/portal/tickets";
import { getConversations } from "@/lib/data/portal/messages";
import { getInvoices } from "@/lib/data/portal/invoices";
import { getNotifications } from "@/lib/data/portal/notifications";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { PageHeader } from "@/components/dashboard/page-header";
import { ResendVerificationButton } from "@/components/auth/resend-verification-button";
import { automationToneAndLabel, projectStatusToneAndLabel } from "@/lib/data/portal/status-presentation";

export const metadata: Metadata = {
  title: "Overview — AIQEN Client Portal",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  const projects = getProjects();
  const tickets = getTickets();
  const conversations = getConversations();
  const invoices = getInvoices();
  const notifications = getNotifications();

  const activeProjects = projects.filter((project) => project.status === "active");
  const openTickets = tickets.filter((ticket) => ticket.status !== "closed");
  const unreadConversations = conversations.filter((conversation) => conversation.unread);
  const nextInvoiceDue = invoices.find((invoice) => invoice.status === "due");

  const stats = [
    {
      label: "Active projects",
      value: activeProjects.length,
      icon: FolderKanban,
      href: "/dashboard/projects",
    },
    { label: "Open tickets", value: openTickets.length, icon: Ticket, href: "/dashboard/tickets" },
    {
      label: "Unread messages",
      value: unreadConversations.length,
      icon: MessageSquare,
      href: "/dashboard/messages",
    },
    {
      label: "Next invoice due",
      value: nextInvoiceDue ? `$${nextInvoiceDue.amount.toLocaleString()}` : "None due",
      icon: Receipt,
      href: "/dashboard/invoices",
    },
  ];

  return (
    <div>
      <PageHeader
        title={`Welcome back, ${user.name?.split(" ")[0] ?? "there"}`}
        description="Here's what's happening across your AIQEN engagement."
      />

      {!user.emailVerified && (
        <div className="mb-8 flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 p-4">
          <TriangleAlert className="size-5 shrink-0 text-accent" />
          <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-foreground">Please verify your email address.</p>
            <ResendVerificationButton />
          </div>
        </div>
      )}

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
            <h2 className="text-lg font-semibold text-foreground">Projects & automation status</h2>
            <Link
              href="/dashboard/projects"
              className="flex items-center gap-1 text-sm font-medium text-primary-text hover:underline"
            >
              View all <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-5 space-y-4">
            {projects.map((project) => {
              const status = projectStatusToneAndLabel(project.status);
              const automation = automationToneAndLabel(project.automationStatus);

              return (
                <Link
                  key={project.slug}
                  href={`/dashboard/projects/${project.slug}`}
                  className="block rounded-xl border border-border p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-foreground">{project.name}</p>
                    <div className="flex gap-2">
                      <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
                      <StatusBadge tone={automation.tone}>{automation.label}</StatusBadge>
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </AiqenCard>

        <AiqenCard>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Recent notifications</h2>
            <Link
              href="/dashboard/notifications"
              className="flex items-center gap-1 text-sm font-medium text-primary-text hover:underline"
            >
              View all <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <ul className="mt-5 space-y-4">
            {notifications.slice(0, 4).map((notification) => (
              <li key={notification.id}>
                <Link href={notification.href} className="block">
                  <p
                    className={`text-sm ${notification.read ? "text-muted-foreground" : "font-medium text-foreground"}`}
                  >
                    {notification.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{notification.timestamp}</p>
                </Link>
              </li>
            ))}
          </ul>
        </AiqenCard>
      </div>

      {hasRole(user.role, "admin") && (
        <AiqenCard className="mt-6 border-primary/30">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Admin access</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            You have administrator privileges. The full admin panel is coming in a later milestone.
          </p>
        </AiqenCard>
      )}
    </div>
  );
}
