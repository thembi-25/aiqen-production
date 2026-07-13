export type WorkflowStatus = "active" | "paused" | "draft";
export type StepKind = "trigger" | "condition" | "action";

export interface WorkflowStep {
  id: string;
  kind: StepKind;
  typeId: string;
  label: string;
  detail: string;
}

export type RunStepStatus = "success" | "failed" | "retried";

export interface WorkflowRunStepLog {
  stepId: string;
  label: string;
  status: RunStepStatus;
  detail?: string;
}

export interface WorkflowRun {
  id: string;
  startedAt: string;
  durationLabel: string;
  status: "success" | "failed";
  steps: WorkflowRunStepLog[];
}

export interface Workflow {
  id: string;
  name: string;
  status: WorkflowStatus;
  employeeId: string | null;
  steps: WorkflowStep[];
  runs: WorkflowRun[];
}

export const workflows: Workflow[] = [
  {
    id: "auto-1",
    name: "Lead qualification hand-off",
    status: "active",
    employeeId: "emp-sdr-1",
    steps: [
      {
        id: "auto-1-s1",
        kind: "trigger",
        typeId: "trigger-new-lead",
        label: "New lead created",
        detail: "New lead scored above 80 in HubSpot",
      },
      {
        id: "auto-1-s2",
        kind: "condition",
        typeId: "condition-field-compare",
        label: "Lead score is greater than 80",
        detail: "Only continue for high-intent leads",
      },
      {
        id: "auto-1-s3",
        kind: "action",
        typeId: "action-assign-employee",
        label: "Assign to AI employee",
        detail: "Hand off to Outbound SDR for personalized outreach",
      },
    ],
    runs: [
      {
        id: "run-1",
        startedAt: "12 minutes ago",
        durationLabel: "1.4s",
        status: "success",
        steps: [
          { stepId: "auto-1-s1", label: "New lead created", status: "success" },
          { stepId: "auto-1-s2", label: "Lead score is greater than 80", status: "success" },
          { stepId: "auto-1-s3", label: "Assign to AI employee", status: "success" },
        ],
      },
      {
        id: "run-2",
        startedAt: "3 hours ago",
        durationLabel: "1.1s",
        status: "success",
        steps: [
          { stepId: "auto-1-s1", label: "New lead created", status: "success" },
          { stepId: "auto-1-s2", label: "Lead score is greater than 80", status: "success" },
          { stepId: "auto-1-s3", label: "Assign to AI employee", status: "success" },
        ],
      },
      {
        id: "run-3",
        startedAt: "Yesterday",
        durationLabel: "0.6s",
        status: "success",
        steps: [
          { stepId: "auto-1-s1", label: "New lead created", status: "success" },
          {
            stepId: "auto-1-s2",
            label: "Lead score is greater than 80",
            status: "success",
            detail: "Score was 62 — condition not met, workflow stopped",
          },
        ],
      },
    ],
  },
  {
    id: "auto-2",
    name: "Support escalation alert",
    status: "active",
    employeeId: "emp-support-1",
    steps: [
      {
        id: "auto-2-s1",
        kind: "trigger",
        typeId: "trigger-sentiment",
        label: "Sentiment drops below threshold",
        detail: "Chat sentiment score falls below -0.5",
      },
      {
        id: "auto-2-s2",
        kind: "action",
        typeId: "action-escalate",
        label: "Escalate to human",
        detail: "Escalate the conversation to a human agent",
      },
      {
        id: "auto-2-s3",
        kind: "action",
        typeId: "action-send-slack",
        label: "Post to Slack",
        detail: "Post an alert to #support-escalations",
      },
    ],
    runs: [
      {
        id: "run-1",
        startedAt: "1 hour ago",
        durationLabel: "2.1s",
        status: "success",
        steps: [
          { stepId: "auto-2-s1", label: "Sentiment drops below threshold", status: "success" },
          { stepId: "auto-2-s2", label: "Escalate to human", status: "success" },
          {
            stepId: "auto-2-s3",
            label: "Post to Slack",
            status: "retried",
            detail: "Slack API timed out, retried automatically, succeeded on attempt 2",
          },
        ],
      },
      {
        id: "run-2",
        startedAt: "Yesterday",
        durationLabel: "1.8s",
        status: "success",
        steps: [
          { stepId: "auto-2-s1", label: "Sentiment drops below threshold", status: "success" },
          { stepId: "auto-2-s2", label: "Escalate to human", status: "success" },
          { stepId: "auto-2-s3", label: "Post to Slack", status: "success" },
        ],
      },
    ],
  },
  {
    id: "auto-3",
    name: "Meeting confirmation reminder",
    status: "active",
    employeeId: "emp-receptionist-1",
    steps: [
      {
        id: "auto-3-s1",
        kind: "trigger",
        typeId: "trigger-appointment",
        label: "Appointment booked",
        detail: "A new appointment is booked via Front Desk",
      },
      {
        id: "auto-3-s2",
        kind: "action",
        typeId: "action-send-sms",
        label: "Send SMS",
        detail: "Send a reminder 1 hour before the meeting",
      },
    ],
    runs: [
      {
        id: "run-1",
        startedAt: "3 hours ago",
        durationLabel: "0.9s",
        status: "success",
        steps: [
          { stepId: "auto-3-s1", label: "Appointment booked", status: "success" },
          { stepId: "auto-3-s2", label: "Send SMS", status: "success" },
        ],
      },
      {
        id: "run-2",
        startedAt: "This morning",
        durationLabel: "0.8s",
        status: "success",
        steps: [
          { stepId: "auto-3-s1", label: "Appointment booked", status: "success" },
          { stepId: "auto-3-s2", label: "Send SMS", status: "success" },
        ],
      },
    ],
  },
  {
    id: "auto-4",
    name: "Nightly order sync check",
    status: "paused",
    employeeId: "emp-ops-1",
    steps: [
      {
        id: "auto-4-s1",
        kind: "trigger",
        typeId: "trigger-schedule",
        label: "On a schedule",
        detail: "Every day at 2:00 AM",
      },
      {
        id: "auto-4-s2",
        kind: "condition",
        typeId: "condition-field-compare",
        label: "Order sync status is not complete",
        detail: "Only continue if a mismatch is found",
      },
      {
        id: "auto-4-s3",
        kind: "action",
        typeId: "action-create-task",
        label: "Create a task",
        detail: "Flag unsynced orders for the ops team to review",
      },
    ],
    runs: [
      {
        id: "run-1",
        startedAt: "4 days ago",
        durationLabel: "3.2s",
        status: "failed",
        steps: [
          { stepId: "auto-4-s1", label: "On a schedule", status: "success" },
          {
            stepId: "auto-4-s2",
            label: "Order sync status is not complete",
            status: "failed",
            detail: "Could not reach the order sync API — paused pending review",
          },
        ],
      },
      {
        id: "run-2",
        startedAt: "5 days ago",
        durationLabel: "2.7s",
        status: "success",
        steps: [
          { stepId: "auto-4-s1", label: "On a schedule", status: "success" },
          { stepId: "auto-4-s2", label: "Order sync status is not complete", status: "success" },
          { stepId: "auto-4-s3", label: "Create a task", status: "success" },
        ],
      },
    ],
  },
  {
    id: "auto-5",
    name: "Weekly performance digest",
    status: "draft",
    employeeId: null,
    steps: [
      {
        id: "auto-5-s1",
        kind: "trigger",
        typeId: "trigger-schedule",
        label: "On a schedule",
        detail: "Every Monday at 8:00 AM",
      },
      {
        id: "auto-5-s2",
        kind: "action",
        typeId: "action-send-slack",
        label: "Post to Slack",
        detail: "Post last week's AI workforce performance summary to #team",
      },
    ],
    runs: [],
  },
];

export function getWorkflows() {
  return workflows;
}

export function getWorkflowById(id: string) {
  return workflows.find((workflow) => workflow.id === id);
}
