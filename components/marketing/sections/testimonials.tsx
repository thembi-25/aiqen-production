import { Quote } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { caseStudies } from "@/lib/data/case-studies";

const [spotlight, ...supporting] = caseStudies.map((study) => ({
  slug: study.slug,
  industry: study.industry,
  ...study.testimonial,
}));

export function Testimonials() {
  return (
    <Section className="border-y border-border bg-card">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">Testimonials</AiqenBadge>
          <Heading>What our clients say</Heading>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl text-center">
          <Quote className="mx-auto size-9 text-primary/40" />
          <p className="mt-6 font-serif text-2xl leading-snug font-normal text-balance text-foreground italic md:text-3xl">
            &ldquo;{spotlight.quote}&rdquo;
          </p>
          <div className="mt-6">
            <p className="font-semibold text-foreground">{spotlight.author}</p>
            <p className="text-sm text-muted-foreground">
              {spotlight.role} · {spotlight.industry}
            </p>
          </div>
        </Reveal>

        <RevealStagger className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {supporting.map((testimonial) => (
            <RevealItem key={testimonial.slug}>
              <AiqenCard variant="interactive" className="h-full">
                <Quote className="size-6 text-primary/40" />
                <p className="mt-3 text-sm leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} · {testimonial.industry}
                  </p>
                </div>
              </AiqenCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
