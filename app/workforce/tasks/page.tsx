import type { Metadata } from "next";

import { getTasks } from "@/lib/data/workforce/tasks";
import { getDeployedEmployees } from "@/lib/data/workforce/employees";
import { PageHeader } from "@/components/dashboard/page-header";
import { TasksBoard } from "@/components/workforce/tasks-board";

export const metadata: Metadata = {
  title: "Tasks — AI Workforce",
};

export default function TasksPage() {
  const tasks = getTasks();
  const employees = getDeployedEmployees();
  const employeeNameById = Object.fromEntries(employees.map((e) => [e.id, e.name]));

  return (
    <div>
      <PageHeader title="Tasks" description="Work assigned to your AI employees and team." />
      <TasksBoard initialTasks={tasks} employeeNameById={employeeNameById} />
    </div>
  );
}
