import type { StatusTone } from "@/components/dashboard/status-badge";
import type { EmployeeStatus } from "@/lib/data/workforce/employees";
import type { ConversationStatus } from "@/lib/data/workforce/conversations";
import type { TaskPriority, TaskStatus } from "@/lib/data/workforce/tasks";
import type { DealStage } from "@/lib/data/workforce/crm/deals";
import type { RunStepStatus, WorkflowStatus } from "@/lib/data/workforce/workflows";
import type { KnowledgeSourceStatus } from "@/lib/data/workforce/knowledge-sources";

function present(tone: StatusTone, label: string) {
  return { tone, label };
}

export function employeeStatusToneAndLabel(status: EmployeeStatus) {
  switch (status) {
    case "active":
      return present("success", "Active");
    case "paused":
      return present("warning", "Paused");
  }
}

export function conversationStatusToneAndLabel(status: ConversationStatus) {
  switch (status) {
    case "open":
      return present("info", "Open");
    case "resolved":
      return present("neutral", "Resolved");
  }
}

export function taskStatusToneAndLabel(status: TaskStatus) {
  switch (status) {
    case "todo":
      return present("neutral", "To Do");
    case "in-progress":
      return present("progress", "In Progress");
    case "done":
      return present("success", "Done");
  }
}

export function taskPriorityToneAndLabel(priority: TaskPriority) {
  switch (priority) {
    case "high":
      return present("danger", "High");
    case "medium":
      return present("warning", "Medium");
    case "low":
      return present("neutral", "Low");
  }
}

export function dealStageToneAndLabel(stage: DealStage) {
  switch (stage) {
    case "new":
      return present("neutral", "New");
    case "qualified":
      return present("info", "Qualified");
    case "proposal":
      return present("progress", "Proposal");
    case "won":
      return present("success", "Won");
    case "lost":
      return present("danger", "Lost");
  }
}

export function workflowStatusToneAndLabel(status: WorkflowStatus) {
  switch (status) {
    case "active":
      return present("success", "Active");
    case "paused":
      return present("warning", "Paused");
    case "draft":
      return present("neutral", "Draft");
  }
}

export function runStepStatusToneAndLabel(status: RunStepStatus) {
  switch (status) {
    case "success":
      return present("success", "Success");
    case "failed":
      return present("danger", "Failed");
    case "retried":
      return present("warning", "Retried");
  }
}

export function knowledgeSourceStatusToneAndLabel(status: KnowledgeSourceStatus) {
  switch (status) {
    case "indexed":
      return present("success", "Indexed");
    case "processing":
      return present("warning", "Processing");
  }
}
