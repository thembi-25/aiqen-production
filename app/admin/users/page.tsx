import type { Metadata } from "next";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { getCurrentUser } from "@/lib/auth/dal";
import { PageHeader } from "@/components/dashboard/page-header";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { UsersTable } from "@/components/admin/users-table";

export const metadata: Metadata = {
  title: "Users — AIQEN Admin",
};

export default async function AdminUsersPage() {
  const currentAdmin = await getCurrentUser();

  const rows = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      suspended: users.suspended,
      emailVerified: users.emailVerified,
    })
    .from(users);

  return (
    <div>
      <PageHeader
        title="Users"
        description="Manage roles, account status, and impersonate users for support."
      />

      <AiqenCard className="p-0">
        <UsersTable users={rows} currentAdminId={currentAdmin.id} />
      </AiqenCard>
    </div>
  );
}
