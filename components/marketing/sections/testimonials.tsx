import { Quote } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { caseStudies } from "@/lib/data/case-studies";

export function Testimonials() {
  return (
    <Section className="border-y border-border bg-card">
      <Container>
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">Testimonials</AiqenBadge>
          <Heading>What our clients say</Heading>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map(({ testimonial, slug }) => (
            <AiqenCard
              key={slug}
              className="flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
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
      </Container>
    </Section>
  );
}
