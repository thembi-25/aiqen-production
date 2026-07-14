import { ArrowRight, Compass, Rocket, Search, Wrench } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { AppFrame } from "@/components/shared/app-frame";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";

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

const workflowSteps = ["Form submitted", "Lead scored", "CRM updated", "Rep notified"];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-t border-border">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <Eyebrow className="mx-auto">How AIQEN Works</Eyebrow>
          <Heading>A practical approach to AI transformation</Heading>
          <Text size="lg" className="mx-auto">
            We combine business strategy, automation, and engineering to
            deliver AI systems that create measurable impact — every one
            visualized, tested, and monitored like the workflow below.
          </Text>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <RevealItem key={step.number}>
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl text-muted-foreground/50">
                  {step.number}
                </span>
                <step.icon className="size-5 text-muted-foreground" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1} className="mt-14">
          <AppFrame title="Workflow Builder">
            <div className="flex flex-wrap items-center gap-3 p-6 md:gap-4">
              {workflowSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3 md:gap-4">
                  <span className="rounded-lg border border-border bg-muted px-4 py-2.5 text-sm font-medium text-foreground">
                    {step}
                  </span>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </AppFrame>
        </Reveal>
      </Container>
    </Section>
  );
}
