import type { Metadata } from "next";
import { Eye, Gauge, ShieldCheck, Target, Users, Zap } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";

export const metadata: Metadata = {
  title: "About AIQEN — AI Consulting & Automation Agency",
  description:
    "AIQEN helps businesses adopt practical, measurable AI systems. Learn our mission, vision, values, and why teams choose to build their AI workforce with us.",
};

const values = [
  {
    icon: Target,
    title: "Practical Over Hype",
    description: "We ship AI systems that solve real problems, not demos that impress and disappear.",
  },
  {
    icon: Gauge,
    title: "Measurable Impact",
    description: "Every engagement is scoped against a metric that matters to your business.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description: "AI amplifies your team's judgment — it doesn't replace accountability.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    description: "We build on infrastructure your team can own, extend, and trust long after launch.",
  },
  {
    icon: Eye,
    title: "Transparent Partnership",
    description: "Clear roadmaps, honest timelines, and no black-box systems you can't inspect.",
  },
  {
    icon: Zap,
    title: "Speed With Care",
    description: "We move fast on the right things and slow down where mistakes are costly.",
  },
];

const whyAiqen = [
  "We build and consult — one team, from strategy through deployed system.",
  "Enterprise-grade engineering practices from day one, not bolted on later.",
  "A clear path from custom builds today to a self-serve AI workforce platform.",
  "Guardrails and human checkpoints designed into every AI agent we ship.",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pt-32 pb-16">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <AiqenBadge className="mx-auto border-primary/30 bg-primary/10">
                About AIQEN
              </AiqenBadge>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl">
                Building the AI Workforce for Modern Business
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                AIQEN exists to make AI adoption practical, measurable, and durable — for
                businesses that want results, not hype.
              </Text>
            </div>
          </Container>
        </Section>

        <Section className="pt-0">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              <AiqenCard>
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="mt-4 text-muted-foreground">
                  To help every business — regardless of technical team size — deploy AI systems
                  that create measurable operational impact, without the risk or guesswork of
                  going it alone.
                </p>
              </AiqenCard>
              <AiqenCard>
                <h2 className="text-2xl font-semibold">Our Vision</h2>
                <p className="mt-4 text-muted-foreground">
                  A future where every business has an AI workforce working alongside its human
                  team — reliable, transparent, and deployed directly from the AIQEN platform.
                </p>
              </AiqenCard>
            </div>
          </Container>
        </Section>

        <Section className="bg-card">
          <Container>
            <div className="space-y-6">
              <Heading>Our Values</Heading>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {values.map((value) => (
                  <AiqenCard key={value.title}>
                    <value.icon className="size-7 text-primary" />
                    <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </AiqenCard>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4">
                <Heading size="subsection">Our Story</Heading>
                <Text size="lg">
                  AIQEN started with a simple observation: most businesses know AI could help
                  them, but don&apos;t know where to start, who to trust, or how to measure
                  success. We built AIQEN to close that gap — starting as a hands-on consulting
                  and build partner, with the explicit goal of turning what we learn from every
                  client engagement into a self-serve AI workforce platform.
                </Text>
                <Text size="lg">
                  Today, that means custom strategy and deployment for every client. Tomorrow, it
                  means any business can deploy their own AI workforce directly from AIQEN.
                </Text>
              </div>

              <AiqenCard>
                <h3 className="text-xl font-semibold">Why AIQEN</h3>
                <ul className="mt-6 space-y-4">
                  {whyAiqen.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </AiqenCard>
            </div>
          </Container>
        </Section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
