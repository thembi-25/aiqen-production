"use server";

import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

import { auth, signIn, signOut } from "@/auth";
import { requireAuth } from "@/lib/auth/dal";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { validateEmail, validateName, validatePassword } from "@/lib/validation/auth";
import {
  consumePasswordResetToken,
  issuePasswordResetToken,
  issueVerificationToken,
} from "@/lib/auth/tokens";
import { sendPasswordResetEmail, sendVerificationEmail } from "@/lib/email/templates";

export type AuthActionState = {
  error?: string;
  success?: string;
} | undefined;

export async function signUpAction(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "").toLowerCase().trim();
  const password = String(formData.get("password") ?? "");

  const nameError = validateName(name);
  if (nameError) return { error: nameError };

  const emailError = validateEmail(email);
  if (emailError) return { error: emailError };

  const passwordError = validatePassword(password);
  if (passwordError) return { error: passwordError };

  const [existing] = await db.select().from(users).where(eq(users.email, email)).limit(1);

  if (existing) {
    if (!existing.passwordHash) {
      return {
        error: "This email is already registered via Google or GitHub — sign in with that instead.",
      };
    }
    return { error: "An account with this email already exists." };
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await db.insert(users).values({ name, email, passwordHash });

  const token = await issueVerificationToken(email);
  await sendVerificationEmail(email, token);

  return { success: "registered" };
}

export async function signInAction(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = String(formData.get("email") ?? "").toLowerCase().trim();
  const password = String(formData.get("password") ?? "");
  const callbackUrl = String(formData.get("callbackUrl") ?? "/dashboard");

  try {
    await signIn("credentials", { email, password, redirectTo: callbackUrl });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password." };
        default:
          return { error: "Something went wrong. Please try again." };
      }
    }
    throw error;
  }
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function oauthSignInAction(provider: "google" | "github", callbackUrl: string) {
  await signIn(provider, { redirectTo: callbackUrl });
}

export async function forgotPasswordAction(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = String(formData.get("email") ?? "").toLowerCase().trim();

  const emailError = validateEmail(email);
  if (emailError) return { error: emailError };

  const genericSuccess = {
    success: "If an account exists for that email, we've sent a password reset link.",
  };

  const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);

  if (!user || !user.passwordHash) return genericSuccess;

  const token = await issuePasswordResetToken(email);
  await sendPasswordResetEmail(email, token);

  return genericSuccess;
}

export async function resetPasswordAction(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = String(formData.get("email") ?? "").toLowerCase().trim();
  const token = String(formData.get("token") ?? "");
  const password = String(formData.get("password") ?? "");

  const passwordError = validatePassword(password);
  if (passwordError) return { error: passwordError };

  const isValid = await consumePasswordResetToken(email, token);
  if (!isValid) {
    return { error: "This reset link is invalid or has expired. Request a new one." };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await db.update(users).set({ passwordHash }).where(eq(users.email, email));

  return { success: "reset" };
}

export async function resendVerificationAction() {
  const session = await auth();
  if (!session?.user?.email) return;

  const token = await issueVerificationToken(session.user.email);
  await sendVerificationEmail(session.user.email, token);
}

export async function updateProfileAction(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const session = await requireAuth();
  const name = String(formData.get("name") ?? "");

  const nameError = validateName(name);
  if (nameError) return { error: nameError };

  await db.update(users).set({ name }).where(eq(users.id, session.user.id));

  return { success: "Profile updated." };
}

export async function changePasswordAction(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const session = await requireAuth();

  const currentPassword = String(formData.get("currentPassword") ?? "");
  const newPassword = String(formData.get("newPassword") ?? "");

  const passwordError = validatePassword(newPassword);
  if (passwordError) return { error: passwordError };

  const [user] = await db.select().from(users).where(eq(users.id, session.user.id)).limit(1);
  if (!user) return { error: "Account not found." };

  if (user.passwordHash) {
    const matches = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!matches) return { error: "Current password is incorrect." };
  }

  const passwordHash = await bcrypt.hash(newPassword, 10);
  await db.update(users).set({ passwordHash }).where(eq(users.id, user.id));

  return { success: "Password updated." };
}
