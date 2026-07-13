"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Compass, Rocket, Search, Wrench } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { AiqenBadge } from "@/components/ui/aiqen-badge";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We analyze your business goals, workflows, challenges, and existing technology.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategize",
    description:
      "We identify the highest-impact AI opportunities and create a practical roadmap.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Build & Integrate",
    description:
      "We develop custom AI systems, automate processes, and connect your tools.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Optimize & Scale",
    description:
      "We continuously improve your AI systems and help your business scale.",
  },
];

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <Section>
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">Process</AiqenBadge>

          <Heading>A practical approach to AI transformation</Heading>

          <Text size="lg" className="mx-auto">
            We combine business strategy, automation, and engineering to
            deliver AI solutions that create measurable impact.
          </Text>
        </Reveal>

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px overflow-hidden bg-border lg:block"
          >
            <motion.div
              className="h-full origin-left bg-primary/30"
              initial={reduceMotion ? undefined : { scaleX: 0 }}
              whileInView={reduceMotion ? undefined : { scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <RevealStagger className="grid gap-10 lg:grid-cols-4">
            {steps.map((step) => (
              <RevealItem key={step.number} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-card text-primary-text shadow-[var(--shadow-elevation-2)]">
                  <step.icon className="size-5" />
                </span>

                <span className="mt-4 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Step {step.number}
                </span>

                <h3 className="mt-1.5 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </Section>
  );
}
