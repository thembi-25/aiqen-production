import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

export const requireAuth = cache(async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return session;
});

export const getCurrentUser = cache(async () => {
  const session = await requireAuth();

  const [user] = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      emailVerified: users.emailVerified,
      passwordHash: users.passwordHash,
    })
    .from(users)
    .where(eq(users.id, session.user.id))
    .limit(1);

  if (!user) {
    redirect("/sign-in");
  }

  const { passwordHash, ...safeUser } = user;

  return { ...safeUser, hasPassword: passwordHash !== null };
});

export function hasRole(role: string | null | undefined, allowed: string | string[]) {
  const allowedRoles = Array.isArray(allowed) ? allowed : [allowed];
  return !!role && allowedRoles.includes(role);
}
