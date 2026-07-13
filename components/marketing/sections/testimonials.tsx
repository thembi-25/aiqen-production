import { Quote } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { caseStudies } from "@/lib/data/case-studies";

export function Testimonials() {
  return (
    <Section className="bg-card">
      <Container>
        <div className="space-y-6">
          <Heading>What Our Clients Say</Heading>

          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map(({ testimonial, slug }) => (
              <AiqenCard key={slug} className="flex flex-col justify-between">
                <Quote className="size-8 text-primary/40" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </AiqenCard>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
