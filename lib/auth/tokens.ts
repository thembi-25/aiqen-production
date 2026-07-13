import "server-only";
import crypto from "crypto";
import { and, eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { passwordResetTokens, verificationTokens } from "@/lib/db/schema";

const DAY_MS = 24 * 60 * 60 * 1000;
const HOUR_MS = 60 * 60 * 1000;

function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

export async function issueVerificationToken(email: string) {
  await db.delete(verificationTokens).where(eq(verificationTokens.identifier, email));

  const token = generateToken();
  await db
    .insert(verificationTokens)
    .values({ identifier: email, token, expires: new Date(Date.now() + DAY_MS) });

  return token;
}

export async function consumeVerificationToken(email: string, token: string) {
  const [row] = await db
    .select()
    .from(verificationTokens)
    .where(and(eq(verificationTokens.identifier, email), eq(verificationTokens.token, token)))
    .limit(1);

  if (!row) return false;

  await db
    .delete(verificationTokens)
    .where(and(eq(verificationTokens.identifier, email), eq(verificationTokens.token, token)));

  return row.expires >= new Date();
}

export async function issuePasswordResetToken(email: string) {
  await db.delete(passwordResetTokens).where(eq(passwordResetTokens.identifier, email));

  const token = generateToken();
  await db
    .insert(passwordResetTokens)
    .values({ identifier: email, token, expires: new Date(Date.now() + HOUR_MS) });

  return token;
}

export async function consumePasswordResetToken(email: string, token: string) {
  const [row] = await db
    .select()
    .from(passwordResetTokens)
    .where(and(eq(passwordResetTokens.identifier, email), eq(passwordResetTokens.token, token)))
    .limit(1);

  if (!row) return false;

  await db
    .delete(passwordResetTokens)
    .where(and(eq(passwordResetTokens.identifier, email), eq(passwordResetTokens.token, token)));

  return row.expires >= new Date();
}
