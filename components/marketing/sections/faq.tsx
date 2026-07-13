import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faq";

export function FAQ({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  const left = items.filter((_, index) => index % 2 === 0);
  const right = items.filter((_, index) => index % 2 === 1);

  return (
    <Section id="faq">
      <Container>
        <Reveal className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-4 text-center">
            <AiqenBadge className="mx-auto">FAQ</AiqenBadge>
            <Heading>Frequently asked questions</Heading>
            <Text size="lg" className="mx-auto max-w-xl">
              Everything you need to know before getting started with AIQEN.
            </Text>
          </div>

          <Accordion
            multiple
            className="mt-4 grid overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-elevation-2)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevation-3)] lg:grid-cols-2 lg:divide-x lg:divide-border"
          >
            <div className="px-6">
              {left.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionPanel>{item.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </div>
            <div className="px-6">
              {right.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionPanel>{item.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </div>
          </Accordion>

          <div className="flex justify-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-text"
            >
              Still have questions? Contact us
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
