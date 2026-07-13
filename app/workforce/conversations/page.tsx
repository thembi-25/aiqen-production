import type { Metadata } from "next";

import { getConversations } from "@/lib/data/workforce/conversations";
import { getDeployedEmployees } from "@/lib/data/workforce/employees";
import { PageHeader } from "@/components/dashboard/page-header";
import { ConversationsView } from "@/components/workforce/conversations-view";

export const metadata: Metadata = {
  title: "Conversations — AI Workforce",
};

export default function ConversationsPage() {
  const conversations = getConversations();
  const employees = getDeployedEmployees();
  const employeeNameById = Object.fromEntries(employees.map((e) => [e.id, e.name]));

  return (
    <div>
      <PageHeader title="Conversations" description="Transcripts from every channel your AI employees handle." />
      <ConversationsView conversations={conversations} employeeNameById={employeeNameById} />
    </div>
  );
}
