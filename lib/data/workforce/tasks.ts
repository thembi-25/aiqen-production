export type TaskStatus = "todo" | "in-progress" | "done";
export type TaskPriority = "low" | "medium" | "high";

export interface WorkforceTask {
  id: string;
  title: string;
  status: TaskStatus;
  employeeId: string | null;
  dueDate: string;
  priority: TaskPriority;
}

export const tasks: WorkforceTask[] = [
  {
    id: "task-1",
    title: "Follow up with Nova Health after Thursday's call",
    status: "todo",
    employeeId: "emp-sdr-1",
    dueDate: "Jul 16, 2026",
    priority: "high",
  },
  {
    id: "task-2",
    title: "Review escalated refund requests from this week",
    status: "in-progress",
    employeeId: "emp-support-1",
    dueDate: "Jul 14, 2026",
    priority: "medium",
  },
  {
    id: "task-3",
    title: "Re-enable Ops Monitor after workflow review",
    status: "todo",
    employeeId: null,
    dueDate: "Jul 15, 2026",
    priority: "high",
  },
  {
    id: "task-4",
    title: "Confirm Thursday consultation with Marcus Boone",
    status: "done",
    employeeId: "emp-receptionist-1",
    dueDate: "Jul 13, 2026",
    priority: "low",
  },
  {
    id: "task-5",
    title: "Sync new lead list into HubSpot for outbound campaign",
    status: "in-progress",
    employeeId: "emp-sdr-1",
    dueDate: "Jul 17, 2026",
    priority: "medium",
  },
  {
    id: "task-6",
    title: "Audit Tier 1 support responses for tone consistency",
    status: "todo",
    employeeId: null,
    dueDate: "Jul 20, 2026",
    priority: "low",
  },
];

export function getTasks() {
  return tasks;
}

export function getTasksByStatus(status: TaskStatus) {
  return tasks.filter((task) => task.status === status);
}
