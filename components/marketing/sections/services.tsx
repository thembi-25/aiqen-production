import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { IconTile } from "@/components/shared/icon-tile";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { services } from "@/lib/data/services";

export function Services() {

  return (
    <Section id="services">

      <Container>

        <div className="mx-auto max-w-2xl space-y-4 text-center">

          <AiqenBadge className="mx-auto">Services</AiqenBadge>

          <Heading>
            AI solutions built around your business
          </Heading>

          <Text size="lg" className="mx-auto">
            From strategy to implementation, AIQEN helps
            businesses adopt artificial intelligence in
            practical ways.
          </Text>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <AiqenCard
              key={service.slug}
              className="group flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >

              <IconTile icon={service.icon} />

              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 text-muted-foreground">
                {service.summary}
              </p>

              <Link
                href={`/services#${service.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-text"
              >
                Learn more
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

            </AiqenCard>

          ))}

        </div>

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
