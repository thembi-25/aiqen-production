"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import type { WorkforceTask, TaskStatus } from "@/lib/data/workforce/tasks";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { taskPriorityToneAndLabel, taskStatusToneAndLabel } from "@/lib/data/workforce/status-presentation";
import { cn } from "@/lib/utils";

const columns: { status: TaskStatus; next: TaskStatus | null; nextLabel: string }[] = [
  { status: "todo", next: "in-progress", nextLabel: "Start" },
  { status: "in-progress", next: "done", nextLabel: "Complete" },
  { status: "done", next: null, nextLabel: "" },
];

export function TasksBoard({
  initialTasks,
  employeeNameById,
}: {
  initialTasks: WorkforceTask[];
  employeeNameById: Record<string, string>;
}) {
  const [tasks, setTasks] = useState(initialTasks);

  function advance(taskId: string, next: TaskStatus) {
    setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, status: next } : task)));
  }

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {columns.map((column) => {
        const columnTasks = tasks.filter((task) => task.status === column.status);
        const badge = taskStatusToneAndLabel(column.status);

        return (
          <div key={column.status}>
            <div className="mb-3 flex items-center justify-between">
              <StatusBadge tone={badge.tone}>{badge.label}</StatusBadge>
              <span className="text-xs text-muted-foreground">{columnTasks.length}</span>
            </div>

            <div className="space-y-3">
              {columnTasks.map((task) => {
                const priority = taskPriorityToneAndLabel(task.priority);

                return (
                  <AiqenCard key={task.id}>
                    <p className="text-sm font-medium text-foreground">{task.title}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <StatusBadge tone={priority.tone}>{priority.label}</StatusBadge>
                      <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {task.employeeId ? employeeNameById[task.employeeId] ?? "Unassigned" : "Team task"}
                    </p>

                    {column.next && (
                      <button
                        type="button"
                        onClick={() => advance(task.id, column.next as TaskStatus)}
                        className={cn(
                          "mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {column.nextLabel} <ArrowRight className="size-3" />
                      </button>
                    )}
                  </AiqenCard>
                );
              })}

              {columnTasks.length === 0 && (
                <p className="rounded-lg border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
                  Nothing here.
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
