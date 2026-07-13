import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { services } from "@/lib/data/services";

export function Services() {

  return (
    <Section id="services">

      <Container>

        <div className="space-y-6">

          <Heading>
            AI Solutions Built Around Your Business
          </Heading>


          <Text size="lg">
            From strategy to implementation, AIQEN helps
            businesses adopt artificial intelligence in
            practical ways.
          </Text>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <AiqenCard key={service.slug} className="group flex flex-col">

                <service.icon className="size-8 text-primary" />

                <h3 className="mt-4 text-xl font-semibold">
                  {service.title}
                </h3>


                <p className="mt-3 flex-1 text-muted-foreground">
                  {service.summary}
                </p>

                <Link
                  href={`/services#${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-text transition-transform group-hover:translate-x-0.5"
                >
                  Learn more <ArrowRight className="size-3.5" />
                </Link>

              </AiqenCard>

            ))}

          </div>

          <div className="pt-2">
            <Link
              href="/services"
              className="text-sm font-medium text-primary-text hover:underline"
            >
              View all services →
            </Link>
          </div>

        </div>

      </Container>

    </Section>
  );
}
