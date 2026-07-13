import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { solutions } from "@/lib/data/solutions";
import { cn } from "@/lib/utils";

const featured = solutions.slice(0, 6);

export function Solutions() {
  return (
    <Section id="solutions">
      <Container>
        <div className="space-y-6">
          <Heading>AI Solutions Designed Around Real Business Problems</Heading>

          <Text size="lg">
            AIQEN combines strategy, automation, and intelligent systems to help businesses
            operate more efficiently.
          </Text>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((solution) => (
              <AiqenCard key={solution.slug}>
                <solution.icon className="size-7 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{solution.title}</h3>
                <p className="mt-3 text-muted-foreground">{solution.description}</p>
              </AiqenCard>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <Link
              href="/solutions"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8")}
            >
              Explore all {solutions.length} solutions <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
