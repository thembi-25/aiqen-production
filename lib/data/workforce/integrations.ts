export interface Integration {
  id: string;
  name: string;
  category: string;
  description: string;
  connected: boolean;
}

export const integrations: Integration[] = [
  { id: "hubspot", name: "HubSpot", category: "CRM & Marketing", description: "Sync contacts, companies, and deals.", connected: true },
  { id: "google-sheets", name: "Google Sheets", category: "Data", description: "Export reports and sync data to spreadsheets.", connected: false },
  { id: "n8n", name: "n8n", category: "Automation", description: "Trigger and extend workflows in n8n.", connected: true },
  { id: "openai", name: "OpenAI", category: "AI Models", description: "Power AI employees with OpenAI models.", connected: true },
  { id: "claude", name: "Claude", category: "AI Models", description: "Power AI employees with Claude models.", connected: false },
  { id: "google-calendar", name: "Google Calendar", category: "Scheduling", description: "Book and manage appointments.", connected: true },
  { id: "outlook", name: "Outlook", category: "Scheduling", description: "Sync calendar and email for scheduling.", connected: false },
  { id: "slack", name: "Slack", category: "Communication", description: "Send alerts and notifications to channels.", connected: true },
  { id: "teams", name: "Microsoft Teams", category: "Communication", description: "Send alerts and notifications to channels.", connected: false },
  { id: "zapier", name: "Zapier", category: "Automation", description: "Connect to thousands of apps via Zapier.", connected: false },
  { id: "webhooks", name: "Webhooks", category: "Developer", description: "Send and receive custom webhook events.", connected: false },
  { id: "smtp", name: "SMTP", category: "Developer", description: "Send transactional email through your own SMTP server.", connected: false },
  { id: "stripe", name: "Stripe", category: "Billing", description: "Sync invoices and payment status.", connected: false },
  { id: "calendly", name: "Calendly", category: "Scheduling", description: "Let AI employees book through Calendly.", connected: false },
];

export function getIntegrations() {
  return integrations;
}
