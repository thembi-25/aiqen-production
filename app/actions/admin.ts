"use server";

import { eq } from "drizzle-orm";

import { getCurrentUser, hasRole, requireAuth } from "@/lib/auth/dal";
import { db } from "@/lib/db";
import { users, featureFlags, leads, subscribers } from "@/lib/db/schema";
import { logAuditEvent } from "@/lib/admin/audit";

export type AdminActionState = { error?: string; success?: string } | undefined;

async function requireAdminOrError() {
  const user = await getCurrentUser();
  if (!hasRole(user.role, "admin")) {
    return { admin: null, error: "Not authorized." } as const;
  }
  return { admin: user, error: null } as const;
}

export async function updateUserRoleAction(userId: string, role: string): Promise<AdminActionState> {
  const { admin, error } = await requireAdminOrError();
  if (!admin) return { error };

  await db.update(users).set({ role }).where(eq(users.id, userId));
  await logAuditEvent({
    actorId: admin.id,
    action: "user.role_changed",
    targetId: userId,
    metadata: { role },
  });

  return { success: "Role updated." };
}

export async function toggleUserSuspensionAction(userId: string, suspend: boolean): Promise<AdminActionState> {
  const { admin, error } = await requireAdminOrError();
  if (!admin) return { error };

  await db.update(users).set({ suspended: suspend }).where(eq(users.id, userId));
  await logAuditEvent({
    actorId: admin.id,
    action: suspend ? "user.suspended" : "user.reactivated",
    targetId: userId,
  });

  return { success: suspend ? "User suspended." : "User reactivated." };
}

export type ImpersonationActionState =
  | { error: string; target?: undefined }
  | { error?: undefined; target: { id: string; name: string | null; email: string; role: string } }
  | undefined;

export async function startImpersonationAction(targetUserId: string): Promise<ImpersonationActionState> {
  const { admin, error } = await requireAdminOrError();
  if (!admin) return { error: error ?? "Not authorized." };

  if (targetUserId === admin.id) {
    return { error: "You can't impersonate yourself." };
  }

  const [target] = await db.select().from(users).where(eq(users.id, targetUserId)).limit(1);
  if (!target) return { error: "User not found." };

  await logAuditEvent({ actorId: admin.id, action: "impersonation.start", targetId: target.id });

  return { target: { id: target.id, name: target.name, email: target.email, role: target.role } };
}

export async function stopImpersonationAction(): Promise<AdminActionState> {
  const session = await requireAuth();

  if (!session.user.impersonatorId) {
    return { error: "You're not currently impersonating anyone." };
  }

  await logAuditEvent({
    actorId: session.user.impersonatorId,
    action: "impersonation.stop",
    targetId: session.user.id,
  });

  return { success: "Stopped impersonating." };
}

export async function toggleFeatureFlagAction(flagId: string, enabled: boolean): Promise<AdminActionState> {
  const { admin, error } = await requireAdminOrError();
  if (!admin) return { error };

  await db.update(featureFlags).set({ enabled }).where(eq(featureFlags.id, flagId));
  await logAuditEvent({
    actorId: admin.id,
    action: "feature_flag.toggled",
    targetId: flagId,
    metadata: { enabled },
  });

  return { success: "Updated." };
}

export async function createFeatureFlagAction(
  prevState: AdminActionState,
  formData: FormData
): Promise<AdminActionState> {
  const { admin, error } = await requireAdminOrError();
  if (!admin) return { error };

  const key = String(formData.get("key") ?? "").trim();
  const label = String(formData.get("label") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();

  if (!key || !label) {
    return { error: "Key and label are required." };
  }

  let flag: { id: string };
  try {
    [flag] = await db
      .insert(featureFlags)
      .values({ key, label, description: description || null })
      .returning({ id: featureFlags.id });
  } catch {
    return { error: `A feature flag with key "${key}" already exists.` };
  }

  await logAuditEvent({
    actorId: admin.id,
    action: "feature_flag.created",
    targetId: flag.id,
    metadata: { key, label },
  });

  return { success: "Feature flag created." };
}

export async function updateLeadStatusAction(leadId: string, status: string): Promise<AdminActionState> {
  const { admin, error } = await requireAdminOrError();
  if (!admin) return { error };

  await db.update(leads).set({ status }).where(eq(leads.id, leadId));
  await logAuditEvent({
    actorId: admin.id,
    action: "lead.status_changed",
    targetId: leadId,
    metadata: { status },
  });

  return { success: "Lead status updated." };
}

export async function updateLeadNotesAction(
  prevState: AdminActionState,
  formData: FormData
): Promise<AdminActionState> {
  const { admin, error } = await requireAdminOrError();
  if (!admin) return { error };

  const leadId = String(formData.get("leadId") ?? "");
  const notes = String(formData.get("notes") ?? "");

  if (!leadId) return { error: "Missing lead." };

  await db.update(leads).set({ notes: notes || null }).where(eq(leads.id, leadId));
  await logAuditEvent({
    actorId: admin.id,
    action: "lead.notes_updated",
    targetId: leadId,
  });

  return { success: "Notes saved." };
}

export async function toggleSubscriberStatusAction(
  subscriberId: string,
  status: "subscribed" | "unsubscribed"
): Promise<AdminActionState> {
  const { admin, error } = await requireAdminOrError();
  if (!admin) return { error };

  await db.update(subscribers).set({ status }).where(eq(subscribers.id, subscriberId));
  await logAuditEvent({
    actorId: admin.id,
    action: "subscriber.status_changed",
    targetId: subscriberId,
    metadata: { status },
  });

  return { success: "Updated." };
}
