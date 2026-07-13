import type { Metadata } from "next";
import Link from "next/link";

import { AuthCard } from "@/components/auth/auth-card";
import { SignInForm } from "@/components/auth/sign-in-form";

export const metadata: Metadata = {
  title: "Sign In — AIQEN",
  description: "Sign in to your AIQEN account.",
};

function getNotice(params: { registered?: string; verified?: string; reset?: string; error?: string }) {
  if (params.error === "invalid-token") {
    return { error: "That verification link is invalid or has expired." };
  }
  if (params.registered) return { success: "Account created. Check your email to verify, then sign in." };
  if (params.verified) return { success: "Email verified. You can now sign in." };
  if (params.reset) return { success: "Password reset. Sign in with your new password." };
  return {};
}

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const callbackUrl = params.callbackUrl ?? "/dashboard";
  const { error, success } = getNotice(params);

  return (
    <AuthCard
      heading="Welcome back"
      description="Sign in to your AIQEN account."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="font-medium text-primary-text hover:underline">
            Sign up
          </Link>
        </>
      }
    >
      <SignInForm callbackUrl={callbackUrl} initialError={error} initialSuccess={success} />
    </AuthCard>
  );
}
