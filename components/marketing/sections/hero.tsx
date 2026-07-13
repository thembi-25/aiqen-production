import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Text } from "@/components/shared/text";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const capabilities = [
  "AI SDR",
  "AI Customer Support",
  "AI Workflow Automation",
  "CRM & Business Automation",
];

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-32 pb-24">

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-[-10rem] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">

            <AiqenBadge className="border-primary/30 bg-primary/10">
              AI Consulting & Automation Agency
            </AiqenBadge>

            <h1 className="mt-8 text-5xl font-bold tracking-tight text-balance text-foreground md:text-7xl">
              Build AI Systems That Transform Your Business
            </h1>

            <Text size="lg" className="mt-8 max-w-xl">
              AIQEN helps organizations automate workflows,
              deploy intelligent AI agents, integrate existing
              software, and build scalable AI solutions that
              drive measurable business growth.
            </Text>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 px-6 text-base transition-transform duration-200 hover:scale-[1.02]"
                )}
              >
                Book AI Consultation
                <ArrowRight
                  data-icon="inline-end"
                  className="size-4 transition-transform duration-200 group-hover/button:translate-x-0.5"
                />
              </Link>

              <Link
                href="/ai-workforce"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 px-6 text-base transition-transform duration-200 hover:scale-[1.02]"
                )}
              >
                Explore AI Workforce
              </Link>

            </div>

            <Link
              href="/assessment"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-text hover:underline"
            >
              Take the free AI Business Assessment
              <ArrowRight className="size-3.5" />
            </Link>

          </div>

          <AiqenCard
            className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards delay-150 p-8 shadow-lg duration-700 ease-out sm:p-10"
          >

            <h2 className="text-2xl font-semibold text-foreground">
              AIQEN Platform
            </h2>

            <Text className="mt-4">
              Today we build custom AI solutions for clients.
              Tomorrow you&apos;ll deploy your own AI workforce
              directly from the AIQEN SaaS platform.
            </Text>

            <ul className="mt-8 space-y-3">

              {capabilities.map((item, index) => (

                <li
                  key={item}
                  className="animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards flex items-center gap-3 rounded-xl border border-border p-4 text-sm font-medium text-foreground duration-500 ease-out"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  {item}
                </li>

              ))}

            </ul>

          </AiqenCard>

        </div>

      </Container>

    </Section>
  );
}
