import type { Metadata } from "next";

import { getCurrentUser } from "@/lib/auth/dal";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { ProfileForm } from "@/components/dashboard/profile-form";
import { ChangePasswordForm } from "@/components/dashboard/change-password-form";

export const metadata: Metadata = {
  title: "Settings — AIQEN Client Portal",
};

export default async function SettingsPage() {
  const user = await getCurrentUser();

  return (
    <div>
      <PageHeader title="Account Settings" description="Manage your profile and account security." />

      <div className="space-y-6">
        <AiqenCard>
          <h2 className="text-lg font-semibold text-foreground">Profile</h2>
          <div className="mt-5">
            <ProfileForm name={user.name ?? ""} email={user.email} />
          </div>
        </AiqenCard>

        <AiqenCard>
          <h2 className="text-lg font-semibold text-foreground">Password</h2>
          <div className="mt-5">
            <ChangePasswordForm hasPassword={user.hasPassword} />
          </div>
        </AiqenCard>

        <AiqenCard>
          <h2 className="text-lg font-semibold text-foreground">Account</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Role</dt>
              <dd className="font-medium text-foreground capitalize">{user.role}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Email verified</dt>
              <dd className="font-medium text-foreground">{user.emailVerified ? "Yes" : "No"}</dd>
            </div>
          </dl>
        </AiqenCard>
      </div>
    </div>
  );
}
