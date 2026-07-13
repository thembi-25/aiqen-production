import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { caseStudies } from "@/lib/data/case-studies";

const [spotlight, ...supporting] = caseStudies.map((study) => ({
  slug: study.slug,
  industry: study.industry,
  ...study.testimonial,
}));

export function Testimonials() {
  return (
    <Section className="border-t border-border">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <Eyebrow className="mx-auto">Testimonials</Eyebrow>
          <Heading>What our clients say</Heading>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl text-center">
          <p className="font-serif text-2xl leading-snug font-normal text-balance text-foreground italic md:text-3xl">
            &ldquo;{spotlight.quote}&rdquo;
          </p>
          <div className="mt-6">
            <p className="font-semibold text-foreground">{spotlight.author}</p>
            <p className="text-sm text-muted-foreground">
              {spotlight.role} · {spotlight.industry}
            </p>
          </div>
        </Reveal>

        <RevealStagger className="mx-auto mt-16 grid max-w-4xl gap-x-12 gap-y-8 border-t border-border pt-10 sm:grid-cols-2">
          {supporting.map((testimonial) => (
            <RevealItem key={testimonial.slug}>
              <p className="text-sm leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role} · {testimonial.industry}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
