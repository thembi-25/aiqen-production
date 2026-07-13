import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { pricingPlans } from "@/lib/data/pricing";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">Pricing</AiqenBadge>
          <Heading>Simple, transparent pricing</Heading>
          <Text size="lg" className="mx-auto">
            Choose the plan that fits where your business is today. Every plan starts with a
            strategy conversation.
          </Text>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-start">
          {pricingPlans.map((plan) => (
            <RevealItem key={plan.name}>
              <AiqenCard
                variant={plan.highlighted ? "featured" : "interactive"}
                className={cn(
                  "flex h-full flex-col",
                  plan.highlighted && "lg:-my-3 lg:py-9"
                )}
              >
                {plan.highlighted ? (
                  <AiqenBadge className="mb-4 w-fit border-primary/30 bg-primary/10">
                    Most Popular
                  </AiqenBadge>
                ) : null}

                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground tabular-nums">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary-text" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: plan.highlighted ? "default" : "outline" }),
                    "mt-8 h-11 w-full"
                  )}
                >
                  {plan.cta}
                </Link>
              </AiqenCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
