import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { pricingPlans } from "@/lib/data/pricing";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="pricing" className="bg-card">
      <Container>
        <div className="space-y-6">
          <Heading>Simple, Transparent Pricing</Heading>
          <Text size="lg">
            Choose the plan that fits where your business is today. Every plan starts with a
            strategy conversation.
          </Text>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <AiqenCard
                key={plan.name}
                className={cn(
                  "flex flex-col",
                  plan.highlighted && "border-primary shadow-lg shadow-primary/10"
                )}
              >
                {plan.highlighted ? (
                  <span className="mb-4 inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-text">
                    Most Popular
                  </span>
                ) : null}

                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
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
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
