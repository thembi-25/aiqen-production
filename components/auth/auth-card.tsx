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
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10rem] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
            AIQEN
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
