import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { industries } from "@/lib/data/industries";
import { cn } from "@/lib/utils";

const featured = industries.slice(0, 6);

export function Industries() {
  return (
    <Section id="industries" className="bg-card">
      <Container>
        <div className="space-y-10">
          <div className="space-y-4">
            <Heading>AI Solutions For Every Modern Business</Heading>
            <Text size="lg">
              AIQEN adapts artificial intelligence solutions to your business goals, systems, and
              workflows.
            </Text>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((industry) => (
              <AiqenCard key={industry.slug}>
                <industry.icon className="size-7 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{industry.title}</h3>
                <p className="mt-3 text-muted-foreground">{industry.description}</p>
              </AiqenCard>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <Link
              href="/industries"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8")}
            >
              Explore all {industries.length} industries <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
