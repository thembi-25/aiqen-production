import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
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

        <div className="space-y-8">


          <div className="space-y-4">

            <Heading>
              A Practical Approach To AI Transformation
            </Heading>


            <Text size="lg">
              We combine business strategy, automation,
              and engineering to deliver AI solutions
              that create measurable impact.
            </Text>

          </div>



          <div className="grid gap-6 md:grid-cols-2">

            {steps.map((step) => (

              <AiqenCard key={step.number}>

                <div className="space-y-3">

                  <span className="text-sm font-medium text-primary-text">
                    {step.number}
                  </span>


                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>


                  <p className="text-muted-foreground">
                    {step.description}
                  </p>

                </div>

              </AiqenCard>

            ))}

          </div>


        </div>


      </Container>

    </Section>
  );
}
