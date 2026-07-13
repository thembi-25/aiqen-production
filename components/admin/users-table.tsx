"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import {
  updateUserRoleAction,
  toggleUserSuspensionAction,
} from "@/app/actions/admin";
import { ImpersonateButton } from "@/components/admin/impersonate-button";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface AdminUserRow {
  id: string;
  name: string | null;
  email: string;
  role: string;
  suspended: boolean;
  emailVerified: Date | null;
}

const ROLES = ["user", "client", "admin"];

export function UsersTable({
  users,
  currentAdminId,
}: {
  users: AdminUserRow[];
  currentAdminId: string;
}) {
  const [query, setQuery] = useState("");

  const filtered = users.filter((user) => {
    const term = query.trim().toLowerCase();
    if (!term) return true;
    return (
      user.email.toLowerCase().includes(term) ||
      (user.name ?? "").toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <div className="border-b border-border/50 p-4">
        <input
          type="search"
          placeholder="Search by name or email…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-9 w-full max-w-sm rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border/50 text-xs text-muted-foreground">
              <th className="px-4 py-3 font-medium">User</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Verified</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <UserRow key={user.id} user={user} isSelf={user.id === currentAdminId} />
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                  No users match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UserRow({ user, isSelf }: { user: AdminUserRow; isSelf: boolean }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleRoleChange(role: string) {
    startTransition(async () => {
      await updateUserRoleAction(user.id, role);
      router.refresh();
    });
  }

  function handleSuspendToggle() {
    startTransition(async () => {
      await toggleUserSuspensionAction(user.id, !user.suspended);
      router.refresh();
    });
  }

  return (
    <tr className={cn("border-b border-border/50 last:border-0", isPending && "opacity-60")}>
      <td className="px-4 py-3">
        <div className="font-medium text-foreground">{user.name ?? "—"}</div>
        <div className="text-xs text-muted-foreground">{user.email}</div>
      </td>
      <td className="px-4 py-3">
        <select
          value={user.role}
          disabled={isSelf || isPending}
          onChange={(event) => handleRoleChange(event.target.value)}
          className="h-8 rounded-lg border border-border bg-background px-2 text-xs text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
        >
          {ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </td>
      <td className="px-4 py-3">
        <StatusBadge tone={user.suspended ? "danger" : "success"}>
          {user.suspended ? "Suspended" : "Active"}
        </StatusBadge>
      </td>
      <td className="px-4 py-3">
        <StatusBadge tone={user.emailVerified ? "success" : "neutral"}>
          {user.emailVerified ? "Verified" : "Unverified"}
        </StatusBadge>
      </td>
      <td className="px-4 py-3">
        <div className="flex justify-end gap-2">
          <ImpersonateButton userId={user.id} disabled={isSelf || user.role === "admin"} />
          <Button
            type="button"
            variant={user.suspended ? "outline" : "destructive"}
            size="sm"
            disabled={isSelf || isPending}
            onClick={handleSuspendToggle}
          >
            {user.suspended ? "Reactivate" : "Suspend"}
          </Button>
        </div>
      </td>
    </tr>
  );
}
