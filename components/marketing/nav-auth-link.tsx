"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavAuthLink({ className }: { className?: string }) {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <Link
      href={isAuthenticated ? "/dashboard" : "/sign-in"}
      className={cn(buttonVariants({ variant: "outline", size: "lg" }), className)}
    >
      {isAuthenticated ? "Dashboard" : "Sign In"}
    </Link>
  );
}
