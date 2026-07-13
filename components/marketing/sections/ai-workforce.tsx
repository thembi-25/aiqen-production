import Link from "next/link";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { aiWorkforce } from "@/lib/data/ai-workforce";
import { cn } from "@/lib/utils";

function LiveDot({ className }: { className?: string }) {
  return (
    <span className="relative flex size-1.5 shrink-0">
      <span
        aria-hidden="true"
        className={cn(
          "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
          className
        )}
      />
      <span className={cn("relative inline-flex size-1.5 rounded-full", className)} />
    </span>
  );
}

// Relative bar lengths for the console preview — illustrative UI chrome, not a claimed metric.
const workload = [72, 58, 84, 45];

export function AIWorkforce() {
  const featured = aiWorkforce.slice(0, 4);

  return (
    <Section className="relative overflow-hidden border-y border-border bg-card">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute right-[-8rem] bottom-[-6rem] h-[20rem] w-[20rem] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">AI Workforce</AiqenBadge>

          <Heading>Your future AI workforce</Heading>

          <Text size="lg" className="mx-auto">
            AIQEN is building a platform where businesses can deploy
            intelligent AI workers designed for sales, support, operations,
            and automation.
          </Text>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <RevealStagger className="grid gap-6 sm:grid-cols-2">
            {featured.map((agent) => (
              <RevealItem key={agent.slug}>
                <AiqenCard variant="interactive" className="h-full">
                  <div className="flex items-center justify-between">
                    <agent.icon className="size-7 text-primary-text" />
                    <LiveDot className="bg-accent" />
                  </div>

                  <span className="mt-4 block text-xs font-medium tracking-wide text-accent uppercase">
                    {agent.role}
                  </span>

                  <h3 className="mt-1 text-lg font-semibold text-foreground">{agent.title}</h3>

                  <p className="mt-3 text-sm text-muted-foreground">{agent.description}</p>
                </AiqenCard>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.15} className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-px -z-10 rounded-[1.75rem] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent opacity-40 blur-sm"
            />

            <div className="overflow-hidden rounded-3xl border border-border bg-background/60 shadow-[var(--shadow-elevation-4)] backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                <div aria-hidden="true" className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-white/10" />
                  <span className="size-2.5 rounded-full bg-white/10" />
                  <span className="size-2.5 rounded-full bg-white/10" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Bot className="size-3.5 text-primary-text" />
                  Workforce Console
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-1 text-[0.65rem] font-semibold tracking-wide text-accent uppercase">
                  <LiveDot className="bg-accent" />
                  Live
                </span>
              </div>

              <div className="space-y-4 p-5">
                {featured.map((agent, index) => (
                  <div key={agent.slug} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground">{agent.title}</span>
                      <span className="text-muted-foreground">{agent.role}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: `${workload[index]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border px-5 py-4">
                <Link
                  href="/ai-workforce"
                  className="flex items-center justify-between text-sm font-medium text-primary-text"
                >
                  Open the full workforce console
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:flex">
              <Sparkles className="size-4 text-primary-text" />
              <div>
                <p className="text-xs font-semibold text-foreground">{aiWorkforce.length} AI roles</p>
                <p className="text-[0.7rem] text-muted-foreground">ready to deploy</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/ai-workforce"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6")}
          >
            Meet the full AI workforce
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
