import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { WorkforceOrgChart } from "@/components/marketing/workforce-org-chart";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { aiWorkforce } from "@/lib/data/ai-workforce";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI Workforce — AIQEN",
  description:
    "Meet the AI workforce: an AI SDR, Receptionist, Support Agent, Operations Manager, Marketing Assistant, Data Analyst, HR Assistant, and Executive Assistant.",
};

const comingSoonPlans = [
  {
    name: "Starter Workforce",
    blurb: "1-2 AI employees for a single team or workflow.",
  },
  {
    name: "Growth Workforce",
    blurb: "A full department of AI employees working together.",
    highlighted: true,
  },
  {
    name: "Enterprise Workforce",
    blurb: "Custom-built AI workforce across your organization.",
  },
];

export default function AIWorkforcePage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-16 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Eyebrow className="mx-auto">AI Workforce</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-6xl">
                Meet Your Future AI Workforce
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                Eight AI employees designed for real business roles — deployed with guardrails,
                monitoring, and human checkpoints built in.
              </Text>
            </div>
          </Container>
        </Section>

        <Section className="border-t border-border pt-0">
          <Container>
            <WorkforceOrgChart />
          </Container>
        </Section>

        <Section className="border-t border-border">
          <Container>
            <div className="mb-10 space-y-4">
              <Heading size="subsection">Meet each AI employee</Heading>
              <Text size="lg">
                Every role ships with its own capabilities, integrations, and guardrails — click
                through for the full detail.
              </Text>
            </div>

            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {aiWorkforce.map((employee) => (
                <Link
                  key={employee.slug}
                  href={`/ai-workforce/${employee.slug}`}
                  className="group flex flex-col bg-background p-6"
                >
                  <employee.icon className="size-6 text-muted-foreground" />
                  <span className="mt-4 text-xs font-medium tracking-wide text-accent uppercase">
                    {employee.role}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{employee.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{employee.description}</p>

                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {employee.capabilities.slice(0, 2).map((capability) => (
                      <li key={capability} className="flex gap-2 text-xs text-muted-foreground">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-primary-text" />
                        {capability}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary-text">
                    View details <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-12 px-8")}>
                Deploy Your AI Workforce
              </Link>
            </div>
          </Container>
        </Section>

        <Section className="border-t border-border">
          <Container>
            <div className="mb-10 space-y-4 text-center">
              <Eyebrow className="mx-auto">AI Workforce Pricing</Eyebrow>
              <Heading size="subsection">Simple Plans, Coming Soon</Heading>
              <Text size="lg" className="mx-auto max-w-2xl">
                AI Workforce SaaS pricing is being finalized. Join the waitlist and we&apos;ll
                reach out the moment plans open up.
              </Text>
            </div>

            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {comingSoonPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "flex flex-col items-center bg-background p-6 text-center",
                    plan.highlighted && "bg-muted/40"
                  )}
                >
                  <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.blurb}</p>
                  <span className="mt-4 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8")}>
                Join the Waitlist
              </Link>
            </div>
          </Container>
        </Section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
