import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const trustPoints = [
  "Free AI Business Assessment",
  "No long-term lock-in",
  "Response within 24 hours",
];

export function CTA() {

  return (
    <Section className="border-t border-border">

      <Container>

        <Reveal className="mx-auto max-w-2xl text-center">

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

          <p className="mt-8 text-xs text-muted-foreground">
            {trustPoints.join("  ·  ")}
          </p>

        </Reveal>

      </Container>

    </Section>
  );
}
