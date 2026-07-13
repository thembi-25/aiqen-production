import Link from "next/link";

import { AiqenCard } from "@/components/ui/aiqen-card";

type AuthCardProps = {
  heading: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function AuthCard({ heading, description, children, footer }: AuthCardProps) {
  return (
    <main
      id="main-content"
      className="flex min-h-screen items-center justify-center px-6 py-16"
    >
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Link href="/" className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex size-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground"
            >
              A
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground">AIQEN</span>
          </Link>
        </div>

        <AiqenCard className="p-8">
          <h1 className="text-xl font-semibold text-foreground">{heading}</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>

          <div className="mt-6">{children}</div>
        </AiqenCard>

        {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
      </div>
    </main>
  );
}
