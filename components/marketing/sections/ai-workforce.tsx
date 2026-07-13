import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { aiWorkforce } from "@/lib/data/ai-workforce";
import { cn } from "@/lib/utils";

export function AIWorkforce() {

  return (
    <Section className="border-y border-border bg-card">

      <Container>

        <div className="mx-auto max-w-2xl space-y-4 text-center">

          <AiqenBadge className="mx-auto">AI Workforce</AiqenBadge>

          <Heading>
            Your future AI workforce
          </Heading>

          <Text size="lg" className="mx-auto">
            AIQEN is building a platform where businesses
            can deploy intelligent AI workers designed for
            sales, support, operations, and automation.
          </Text>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {aiWorkforce.slice(0, 4).map((agent) => (

            <AiqenCard
              key={agent.slug}
              className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >

              <div className="flex items-center justify-between">
                <agent.icon className="size-7 text-primary-text" />
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
              </div>

              <span className="mt-4 block text-xs font-medium tracking-wide text-accent uppercase">
                {agent.role}
              </span>

              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {agent.title}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground">
                {agent.description}
              </p>

            </AiqenCard>

          ))}

        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/ai-workforce"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6")}
          >
            Meet the full AI workforce
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </Container>

    </Section>
  );
}
