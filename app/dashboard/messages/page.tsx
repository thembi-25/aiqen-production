import type { Metadata } from "next";

import { getCurrentUser } from "@/lib/auth/dal";
import { getConversations } from "@/lib/data/portal/messages";
import { PageHeader } from "@/components/dashboard/page-header";
import { MessagesView } from "@/components/dashboard/messages-view";

export const metadata: Metadata = {
  title: "Messages — AIQEN Client Portal",
};

export default async function MessagesPage() {
  const user = await getCurrentUser();
  const conversations = getConversations();

  return (
    <div>
      <PageHeader title="Messages" description="Direct conversations with your AIQEN team." />
      <MessagesView conversations={conversations} currentUserName={user.name ?? user.email} />
    </div>
  );
}
