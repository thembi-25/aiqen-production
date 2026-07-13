export type IntegrationLifecycle = "available" | "beta" | "deprecated";

export interface PlatformIntegration {
  id: string;
  name: string;
  category: string;
  description: string;
  lifecycle: IntegrationLifecycle;
  workspacesConnected: number;
}

export const platformIntegrations: PlatformIntegration[] = [
  { id: "hubspot", name: "HubSpot", category: "CRM & Marketing", description: "Sync contacts, companies, and deals.", lifecycle: "available", workspacesConnected: 41 },
  { id: "google-sheets", name: "Google Sheets", category: "Data", description: "Export reports and sync data to spreadsheets.", lifecycle: "available", workspacesConnected: 27 },
  { id: "n8n", name: "n8n", category: "Automation", description: "Trigger and extend workflows in n8n.", lifecycle: "available", workspacesConnected: 33 },
  { id: "openai", name: "OpenAI", category: "AI Models", description: "Power AI employees with OpenAI models.", lifecycle: "available", workspacesConnected: 58 },
  { id: "claude", name: "Claude", category: "AI Models", description: "Power AI employees with Claude models.", lifecycle: "available", workspacesConnected: 22 },
  { id: "google-calendar", name: "Google Calendar", category: "Scheduling", description: "Book and manage appointments.", lifecycle: "available", workspacesConnected: 45 },
  { id: "outlook", name: "Outlook", category: "Scheduling", description: "Sync calendar and email for scheduling.", lifecycle: "available", workspacesConnected: 19 },
  { id: "slack", name: "Slack", category: "Communication", description: "Send alerts and notifications to channels.", lifecycle: "available", workspacesConnected: 52 },
  { id: "teams", name: "Microsoft Teams", category: "Communication", description: "Send alerts and notifications to channels.", lifecycle: "beta", workspacesConnected: 6 },
  { id: "zapier", name: "Zapier", category: "Automation", description: "Connect to thousands of apps via Zapier.", lifecycle: "beta", workspacesConnected: 11 },
  { id: "webhooks", name: "Webhooks", category: "Developer", description: "Send and receive custom webhook events.", lifecycle: "available", workspacesConnected: 15 },
  { id: "smtp", name: "SMTP", category: "Developer", description: "Send transactional email through your own SMTP server.", lifecycle: "available", workspacesConnected: 9 },
  { id: "stripe", name: "Stripe", category: "Billing", description: "Sync invoices and payment status.", lifecycle: "available", workspacesConnected: 38 },
  { id: "calendly", name: "Calendly", category: "Scheduling", description: "Let AI employees book through Calendly.", lifecycle: "beta", workspacesConnected: 4 },
  { id: "salesforce", name: "Salesforce", category: "CRM & Marketing", description: "Two-way sync with Salesforce records.", lifecycle: "deprecated", workspacesConnected: 2 },
];

export function getPlatformIntegrations() {
  return platformIntegrations;
}
