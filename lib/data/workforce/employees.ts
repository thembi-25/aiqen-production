export type EmployeeStatus = "active" | "paused";

export interface ActivityEntry {
  label: string;
  timestamp: string;
}

export interface DeployedEmployee {
  id: string;
  catalogSlug: string;
  name: string;
  status: EmployeeStatus;
  deployedAt: string;
  tasksThisWeek: number;
  successRate: number;
  integrations: string[];
  recentActivity: ActivityEntry[];
  weeklyTaskCounts: number[];
}

export const deployedEmployees: DeployedEmployee[] = [
  {
    id: "emp-sdr-1",
    catalogSlug: "sdr",
    name: "Outbound SDR",
    status: "active",
    deployedAt: "Mar 12, 2026",
    tasksThisWeek: 184,
    successRate: 92,
    integrations: ["HubSpot", "Slack"],
    recentActivity: [
      { label: "Qualified 12 new leads from the Q3 campaign list", timestamp: "2 hours ago" },
      { label: "Booked a meeting with Nova Health for Jul 15", timestamp: "5 hours ago" },
      { label: "Sent 40 personalized outreach emails", timestamp: "Yesterday" },
    ],
    weeklyTaskCounts: [120, 138, 145, 160, 172, 178, 184],
  },
  {
    id: "emp-support-1",
    catalogSlug: "support-agent",
    name: "Support Agent — Tier 1",
    status: "active",
    deployedAt: "Feb 2, 2026",
    tasksThisWeek: 312,
    successRate: 89,
    integrations: ["Zendesk", "Slack"],
    recentActivity: [
      { label: "Resolved a billing question without escalation", timestamp: "34 minutes ago" },
      { label: "Escalated a refund request to a human agent", timestamp: "3 hours ago" },
      { label: "Answered 28 chat messages", timestamp: "Yesterday" },
    ],
    weeklyTaskCounts: [260, 275, 268, 290, 300, 305, 312],
  },
  {
    id: "emp-receptionist-1",
    catalogSlug: "receptionist",
    name: "Front Desk",
    status: "active",
    deployedAt: "Apr 20, 2026",
    tasksThisWeek: 96,
    successRate: 95,
    integrations: ["Google Calendar"],
    recentActivity: [
      { label: "Scheduled a consultation for Thursday 2pm", timestamp: "1 hour ago" },
      { label: "Answered 6 inbound calls", timestamp: "This morning" },
    ],
    weeklyTaskCounts: [70, 75, 80, 84, 88, 92, 96],
  },
  {
    id: "emp-ops-1",
    catalogSlug: "operations-manager",
    name: "Ops Monitor",
    status: "paused",
    deployedAt: "Jan 15, 2026",
    tasksThisWeek: 0,
    successRate: 97,
    integrations: ["n8n", "Slack"],
    recentActivity: [
      { label: "Paused by Jamie Rivera pending a workflow review", timestamp: "3 days ago" },
      { label: "Flagged a stalled order sync before pausing", timestamp: "4 days ago" },
    ],
    weeklyTaskCounts: [58, 60, 55, 40, 10, 0, 0],
  },
];

export function getDeployedEmployees() {
  return deployedEmployees;
}

export function getDeployedEmployeeById(id: string) {
  return deployedEmployees.find((employee) => employee.id === id);
}

export function getAvailableCatalogSlugs(allSlugs: string[]) {
  const deployedSlugs = new Set(deployedEmployees.map((employee) => employee.catalogSlug));
  return allSlugs.filter((slug) => !deployedSlugs.has(slug));
}
