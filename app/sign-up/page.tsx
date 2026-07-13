import type { Metadata } from "next";
import Link from "next/link";

import { AuthCard } from "@/components/auth/auth-card";
import { SignUpForm } from "@/components/auth/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up — AIQEN",
  description: "Create your AIQEN account.",
};

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const callbackUrl = params.callbackUrl ?? "/dashboard";

  return (
    <AuthCard
      heading="Create your account"
      description="Get started with AIQEN in a few seconds."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/sign-in" className="font-medium text-primary-text hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <SignUpForm callbackUrl={callbackUrl} />
    </AuthCard>
  );
}
