import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";


const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We analyze your business goals, workflows, challenges, and existing technology.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We identify the highest-impact AI opportunities and create a practical roadmap.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "We develop custom AI systems, automate processes, and connect your tools.",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description:
      "We continuously improve your AI systems and help your business scale.",
  },
];


export function Process() {

  return (
    <Section>

      <Container>

        <div className="mx-auto max-w-2xl space-y-4 text-center">

          <AiqenBadge className="mx-auto">Process</AiqenBadge>

          <Heading>
            A practical approach to AI transformation
          </Heading>

          <Text size="lg" className="mx-auto">
            We combine business strategy, automation,
            and engineering to deliver AI solutions
            that create measurable impact.
          </Text>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (

            <AiqenCard
              key={step.number}
              className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >

              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 -right-2 font-serif text-6xl font-normal text-primary/10 select-none"
              >
                {step.number}
              </span>

              <div className="relative space-y-3">

                <span className="text-sm font-semibold text-primary-text">
                  {step.number}
                </span>

                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="text-muted-foreground">
                  {step.description}
                </p>

              </div>

            </AiqenCard>

          ))}

        </div>

      </Container>

    </Section>
  );
}
