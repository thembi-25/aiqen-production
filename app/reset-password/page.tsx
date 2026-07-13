import type { Metadata } from "next";
import Link from "next/link";

import { AuthCard } from "@/components/auth/auth-card";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { FormMessage } from "@/components/auth/form-message";

export const metadata: Metadata = {
  title: "Reset Password — AIQEN",
  description: "Choose a new password for your AIQEN account.",
};

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string; email?: string }>;
}) {
  const { token, email } = await searchParams;

  return (
    <AuthCard
      heading="Choose a new password"
      description="Enter a new password for your account."
      footer={
        <Link href="/sign-in" className="font-medium text-primary-text hover:underline">
          Back to sign in
        </Link>
      }
    >
      {token && email ? (
        <ResetPasswordForm token={token} email={email} />
      ) : (
        <FormMessage error="This reset link is missing required information. Request a new one from the forgot password page." />
      )}
    </AuthCard>
  );
}
