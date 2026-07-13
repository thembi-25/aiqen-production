import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faq";

export function FAQ({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <Section id="faq">
      <Container>
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="text-center">
            <Heading>Frequently Asked Questions</Heading>
            <Text size="lg" className="mx-auto mt-4 max-w-xl">
              Everything you need to know before getting started with AIQEN.
            </Text>
          </div>

          <Accordion multiple className="mt-4 rounded-2xl border border-border bg-card px-6">
            {items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionPanel>{item.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
