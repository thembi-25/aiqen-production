export type StepTypeKind = "trigger" | "action" | "condition";

export interface StepTypeDefinition {
  id: string;
  kind: StepTypeKind;
  category: string;
  label: string;
  description: string;
}

export const triggerTypes: StepTypeDefinition[] = [
  {
    id: "trigger-new-lead",
    kind: "trigger",
    category: "CRM",
    label: "New lead created",
    description: "Fires when a new contact or lead is created in your CRM.",
  },
  {
    id: "trigger-sentiment",
    kind: "trigger",
    category: "Conversations",
    label: "Sentiment drops below threshold",
    description: "Fires when a conversation's sentiment score falls below a set value.",
  },
  {
    id: "trigger-appointment",
    kind: "trigger",
    category: "Scheduling",
    label: "Appointment booked",
    description: "Fires when a new appointment is scheduled.",
  },
  {
    id: "trigger-schedule",
    kind: "trigger",
    category: "Schedule",
    label: "On a schedule",
    description: "Runs the workflow on a recurring schedule you define.",
  },
  {
    id: "trigger-manual",
    kind: "trigger",
    category: "Manual",
    label: "Manually triggered",
    description: "Runs only when someone starts it by hand.",
  },
];

export const actionTypes: StepTypeDefinition[] = [
  {
    id: "action-assign-employee",
    kind: "action",
    category: "AI Employees",
    label: "Assign to AI employee",
    description: "Hand off the task to one of your deployed AI employees.",
  },
  {
    id: "action-send-slack",
    kind: "action",
    category: "Communication",
    label: "Post to Slack",
    description: "Send a message to a Slack channel.",
  },
  {
    id: "action-send-sms",
    kind: "action",
    category: "Communication",
    label: "Send SMS",
    description: "Send a text message reminder or notification.",
  },
  {
    id: "action-create-task",
    kind: "action",
    category: "Tasks",
    label: "Create a task",
    description: "Add a task to your team's task board.",
  },
  {
    id: "action-update-crm",
    kind: "action",
    category: "CRM",
    label: "Update CRM record",
    description: "Update a contact, company, or deal in your CRM.",
  },
  {
    id: "action-escalate",
    kind: "action",
    category: "Support",
    label: "Escalate to human",
    description: "Hand a conversation off to a human teammate.",
  },
];

export const conditionType: StepTypeDefinition = {
  id: "condition-field-compare",
  kind: "condition",
  category: "Logic",
  label: "Only continue if...",
  description: "Compare a field's value before letting the workflow continue.",
};

export function getStepTypeById(typeId: string) {
  if (typeId === conditionType.id) return conditionType;
  return [...triggerTypes, ...actionTypes].find((type) => type.id === typeId);
}
