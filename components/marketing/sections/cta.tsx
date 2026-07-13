import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";


export function CTA() {

  return (
    <Section className="bg-card">

      <Container>

        <div
          className="
          mx-auto
          max-w-3xl
          space-y-6
          text-center
          "
        >

          <Heading>
            Ready To Build Your AI-Powered Business?
          </Heading>


          <Text size="lg">
            Tell us about your goals, challenges,
            and workflows. We will identify where
            AI can create the greatest impact.
          </Text>



          <div
            className="
            flex
            flex-col
            justify-center
            gap-4
            sm:flex-row
            "
          >

            <Link
              href="/contact"
              className="
              rounded-lg
              bg-primary
              px-6
              py-3
              font-medium
              text-primary-foreground
              "
            >
              Schedule AI Consultation
            </Link>


            <Link
              href="/contact"
              className="
              rounded-lg
              border
              border-border
              px-6
              py-3
              font-medium
              "
            >
              Talk With Our Team
            </Link>


          </div>


        </div>


      </Container>


    </Section>
  );
}
