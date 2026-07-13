import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const agents = [
  { name: "AI SDR", role: "Qualifying inbound leads", metric: "12 active" },
  { name: "AI Support Agent", role: "Resolving tickets 24/7", metric: "98% CSAT" },
  { name: "AI Ops Manager", role: "Automating workflows", metric: "340/wk" },
  { name: "AI Voice Receptionist", role: "Answering every call", metric: "24/7" },
];

const activity = [38, 52, 46, 64, 58, 74, 88];

export function Hero() {
  return (
    <Section className="pt-32 pb-24 md:pt-40 md:pb-28">

      <Container>

        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">

          <Reveal>

            <Eyebrow>AI Consulting &amp; Automation</Eyebrow>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance text-foreground md:text-[4rem] md:leading-[1.05]">
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

            <div className="overflow-hidden rounded-2xl border border-border bg-card">

              <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                <p className="text-sm font-medium text-foreground">AI Workforce</p>
                <span className="text-xs text-muted-foreground">40+ systems deployed</span>
              </div>

              <RevealStagger className="divide-y divide-border">
                {agents.map((agent) => (
                  <RevealItem
                    key={agent.name}
                    className="flex items-center justify-between gap-3 px-5 py-3.5"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{agent.name}</p>
                      <p className="text-xs text-muted-foreground">{agent.role}</p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                      {agent.metric}
                    </span>
                  </RevealItem>
                ))}
              </RevealStagger>

              <div className="border-t border-border px-5 py-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Tasks automated this week</span>
                  <span className="font-medium text-foreground tabular-nums">+32%</span>
                </div>
                <div className="mt-3 flex h-10 items-end gap-1.5">
                  {activity.map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-[1px] bg-primary/25"
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>
              </div>

            </div>

          </Reveal>

        </div>

      </Container>

    </Section>
  );
}
