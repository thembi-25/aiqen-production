import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Stat } from "@/components/shared/stat";
import { AppFrame } from "@/components/shared/app-frame";
import { Reveal } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BusinessAssessment() {
  return (
    <Section id="assessment" className="border-t border-border">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <Reveal delay={0.05} className="order-2 lg:order-1">
            <AppFrame title="AI Business Assessment" eyebrow="Sample result">
              <div className="grid grid-cols-3 gap-4 p-6">
                <Stat value="78" label="Automation readiness" />
                <Stat value="82" label="AI readiness" />
                <Stat value="91" label="Opportunity score" />
              </div>
              <div className="border-t border-border px-6 py-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Estimated savings</span>
                  <span className="font-medium text-foreground tabular-nums">
                    ~$4,200 / month
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Recommended plan</span>
                  <span className="font-medium text-foreground">Growth</span>
                </div>
              </div>
            </AppFrame>
          </Reveal>

          <Reveal className="order-1 space-y-4 lg:order-2">
            <Eyebrow>Business Assessment</Eyebrow>
            <Heading>Not sure where to start? Get your AI Readiness Score</Heading>
            <Text size="lg">
              Answer a few questions about your team and workflows. In minutes you&apos;ll get
              an automation readiness score, an estimated savings range, and the services and
              AI Workforce roles most likely to move the needle for you.
            </Text>

            <div className="pt-2">
              <Link
                href="/assessment"
                className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-base")}
              >
                Take the free assessment
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
