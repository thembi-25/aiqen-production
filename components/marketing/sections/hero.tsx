import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Sparkles, TrendingUp } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Text } from "@/components/shared/text";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const agents = [
  { name: "AI SDR", role: "Qualifying inbound leads", metric: "12 active" },
  { name: "AI Support Agent", role: "Resolving tickets 24/7", metric: "98% CSAT" },
  { name: "AI Ops Manager", role: "Automating workflows", metric: "340/wk" },
  { name: "AI Voice Receptionist", role: "Answering every call", metric: "24/7" },
];

const activity = [38, 52, 46, 64, 58, 74, 88];

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

export function Hero() {
  return (
    <Section className="pt-32 pb-24 md:pt-40 md:pb-28">

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">

          <Reveal>

            <AiqenBadge className="items-center gap-2 border-primary/25 bg-primary/[0.07]">
              <LiveDot className="bg-primary-text" />
              AI Consulting &amp; Automation
            </AiqenBadge>

            <h1 className="mt-8 text-5xl font-bold tracking-tight text-balance text-foreground md:text-[4.25rem] md:leading-[1.08]">
              Build AI systems that{" "}
              <span className="font-serif text-[1.05em] font-normal italic text-primary-text">
                transform
              </span>{" "}
              your business
            </h1>

            <Text size="lg" className="mt-7 max-w-lg">
              AIQEN isn&apos;t a chatbot vendor. We diagnose the operational
              bottlenecks costing you time and revenue, then design, build,
              and run the exact AI systems that fix them.
            </Text>

            <div className="mt-10 flex flex-wrap items-center gap-4">

              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-base")}
              >
                Book AI Consultation
                <ArrowRight
                  data-icon="inline-end"
                  className="size-4 transition-transform duration-200 group-hover/button:translate-x-0.5"
                />
              </Link>

              <Link
                href="/ai-workforce"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6 text-base")}
              >
                Explore AI Workforce
              </Link>

            </div>

            <Link
              href="/assessment"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-text"
            >
              Take the free AI Business Assessment
              <ArrowUpRight className="size-3.5" />
            </Link>

          </Reveal>

          <Reveal delay={0.15}>

            <div className="relative">

              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elevation-3)]">

                <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                  <div aria-hidden="true" className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Bot className="size-3.5 text-primary-text" />
                    AI Workforce
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-1 text-[0.65rem] font-semibold tracking-wide text-accent uppercase">
                    <LiveDot className="bg-accent" />
                    Live
                  </span>
                </div>

                <RevealStagger className="space-y-2 p-5">
                  {agents.map((agent) => (
                    <RevealItem
                      key={agent.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <LiveDot className="bg-primary" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{agent.name}</p>
                          <p className="text-xs text-muted-foreground">{agent.role}</p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-md bg-muted px-2 py-1 text-[0.7rem] font-medium text-muted-foreground">
                        {agent.metric}
                      </span>
                    </RevealItem>
                  ))}
                </RevealStagger>

                <div className="border-t border-border px-5 py-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-muted-foreground">
                      Tasks automated this week
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                      <TrendingUp className="size-3.5" />
                      +32%
                    </span>
                  </div>
                  <div className="mt-3 flex h-12 items-end gap-1.5">
                    {activity.map((value, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-sm bg-primary/70"
                        style={{ height: `${value}%` }}
                      />
                    ))}
                  </div>
                </div>

              </div>

              <div className="absolute -right-4 -bottom-4 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:flex">
                <Sparkles className="size-4 text-primary-text" />
                <div>
                  <p className="text-xs font-semibold text-foreground">40+ systems deployed</p>
                  <p className="text-[0.7rem] text-muted-foreground">for growing teams</p>
                </div>
              </div>

            </div>

          </Reveal>

        </div>

      </Container>

    </Section>
  );
}
