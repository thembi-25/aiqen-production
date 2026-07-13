import Link from "next/link";
import { ArrowRight, CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const trustPoints = [
  { icon: Sparkles, label: "Free AI Business Assessment" },
  { icon: ShieldCheck, label: "No long-term lock-in" },
  { icon: CalendarCheck, label: "Response within 24 hours" },
];

export function CTA() {

  return (
    <Section className="border-t border-border">

      <Container>

        <Reveal className="mx-auto max-w-2xl rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-[var(--shadow-elevation-2)] sm:px-12">

          <Heading>
            Ready to build your AI-powered business?
          </Heading>

          <Text size="lg" className="mx-auto mt-4">
            Tell us about your goals, challenges,
            and workflows. We will identify where
            AI can create the greatest impact.
          </Text>

          <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">

            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-base")}
            >
              Schedule AI Consultation
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Link>

            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6 text-base")}
            >
              Talk With Our Team
            </Link>

          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-border/70 pt-6">
            {trustPoints.map((point) => (
              <span
                key={point.label}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
              >
                <point.icon className="size-3.5 text-primary-text" />
                {point.label}
              </span>
            ))}
          </div>

        </Reveal>

      </Container>

    </Section>
  );
}
