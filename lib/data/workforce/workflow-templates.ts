import type { StepKind } from "@/lib/data/workforce/workflows";

export interface TemplateStep {
  kind: StepKind;
  typeId: string;
  label: string;
  detail: string;
}

export interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  steps: TemplateStep[];
}

export const workflowTemplates: WorkflowTemplate[] = [
  {
    id: "template-lead-handoff",
    name: "Lead qualification hand-off",
    description: "Route high-intent leads straight to an AI SDR for outreach.",
    category: "Sales",
    steps: [
      { kind: "trigger", typeId: "trigger-new-lead", label: "New lead created", detail: "New lead created in your CRM" },
      {
        kind: "condition",
        typeId: "condition-field-compare",
        label: "Lead score is greater than 80",
        detail: "Only continue for high-intent leads",
      },
      {
        kind: "action",
        typeId: "action-assign-employee",
        label: "Assign to AI employee",
        detail: "Hand off to an AI SDR for personalized outreach",
      },
    ],
  },
  {
    id: "template-support-escalation",
    name: "Support escalation alert",
    description: "Escalate unhappy conversations to a human and alert the team.",
    category: "Support",
    steps: [
      {
        kind: "trigger",
        typeId: "trigger-sentiment",
        label: "Sentiment drops below threshold",
        detail: "Chat sentiment score falls below a set value",
      },
      {
        kind: "action",
        typeId: "action-escalate",
        label: "Escalate to human",
        detail: "Escalate the conversation to a human agent",
      },
      {
        kind: "action",
        typeId: "action-send-slack",
        label: "Post to Slack",
        detail: "Post an alert to your support channel",
      },
    ],
  },
  {
    id: "template-appointment-reminder",
    name: "Appointment confirmation reminder",
    description: "Text customers a reminder before their scheduled appointment.",
    category: "Scheduling",
    steps: [
      {
        kind: "trigger",
        typeId: "trigger-appointment",
        label: "Appointment booked",
        detail: "A new appointment is booked",
      },
      {
        kind: "action",
        typeId: "action-send-sms",
        label: "Send SMS",
        detail: "Send a reminder before the meeting",
      },
    ],
  },
  {
    id: "template-scheduled-check",
    name: "Nightly data sync check",
    description: "Run a nightly check and flag anything that needs attention.",
    category: "Operations",
    steps: [
      { kind: "trigger", typeId: "trigger-schedule", label: "On a schedule", detail: "Every day at a set time" },
      {
        kind: "condition",
        typeId: "condition-field-compare",
        label: "Only continue if a mismatch is found",
        detail: "Skip the rest of the workflow if everything is in sync",
      },
      {
        kind: "action",
        typeId: "action-create-task",
        label: "Create a task",
        detail: "Flag the issue for your team to review",
      },
    ],
  },
];

export function getWorkflowTemplates() {
  return workflowTemplates;
}

export function getWorkflowTemplateById(id: string) {
  return workflowTemplates.find((template) => template.id === id);
}
