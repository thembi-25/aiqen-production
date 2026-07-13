import "server-only";

import { db } from "@/lib/db";
import { auditLogs } from "@/lib/db/schema";

export async function logAuditEvent(params: {
  actorId: string;
  action: string;
  targetId?: string;
  metadata?: Record<string, unknown>;
}) {
  await db.insert(auditLogs).values({
    actorId: params.actorId,
    action: params.action,
    targetId: params.targetId ?? null,
    metadata: params.metadata ? JSON.stringify(params.metadata) : null,
  });
}
