import type { Metadata } from "next";
import Link from "next/link";

import { AuthCard } from "@/components/auth/auth-card";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot Password — AIQEN",
  description: "Reset your AIQEN account password.",
};

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      heading="Forgot your password?"
      description="Enter your email and we'll send you a reset link."
      footer={
        <Link href="/sign-in" className="font-medium text-primary-text hover:underline">
          Back to sign in
        </Link>
      }
    >
      <ForgotPasswordForm />
    </AuthCard>
  );
}
