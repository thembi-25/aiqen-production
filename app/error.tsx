"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, TriangleAlert } from "lucide-react";

import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <Container>
          <div className="flex h-20 items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              AIQEN
            </Link>
          </div>
        </Container>
      </header>

      <main id="main-content">
        <Section className="flex min-h-[70vh] items-center py-32">
          <Container>
            <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-border bg-muted">
                <TriangleAlert className="size-8 text-muted-foreground" />
              </div>

              <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Something Went Wrong
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-6xl">
                An Unexpected Error Occurred
              </h1>

              <Text size="lg">
                We&apos;ve hit a snag loading this page. Try again, or head back to the homepage.
              </Text>

              <div className="mt-2 flex flex-wrap justify-center gap-4">
                <button onClick={reset} className={cn(buttonVariants({ size: "lg" }), "h-12 px-6")}>
                  Try Again <ArrowRight className="size-4" />
                </button>
                <Link
                  href="/"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6")}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
