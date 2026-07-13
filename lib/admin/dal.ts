import "server-only";
import { notFound } from "next/navigation";

import { getCurrentUser, hasRole } from "@/lib/auth/dal";

export async function requireAdmin() {
  const user = await getCurrentUser();

  if (!hasRole(user.role, "admin")) {
    notFound();
  }

  return user;
}
