import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { services } from "@/lib/data/services";

export function Services() {

  return (
    <Section id="services" className="border-t border-border">

      <Container>

        <Reveal className="max-w-2xl space-y-4">
          <Eyebrow>Services</Eyebrow>
          <Heading>AI solutions built around your business</Heading>
          <Text size="lg">
            From strategy to implementation, AIQEN helps
            businesses adopt artificial intelligence in
            practical ways.
          </Text>
        </Reveal>

        <RevealStagger className="mt-14 grid border-t border-border sm:grid-cols-2">

          {services.map((service, index) => (

            <RevealItem
              key={service.slug}
              className="group border-b border-border py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
            >

              <div className="flex items-start justify-between gap-4">
                <service.icon className="size-5 text-muted-foreground" />
                <span className="font-serif text-xl text-muted-foreground/50 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>

              <Link
                href={`/services#${service.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-text"
              >
                Learn more
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

            </RevealItem>

          ))}

        </RevealStagger>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-text hover:underline"
          >
            View all services <ArrowRight className="size-3.5" />
          </Link>
        </div>

      </Container>

    </Section>
  );
}
