import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="flex min-h-[70vh] items-center py-32">
          <Container>
            <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                <Compass className="size-8 text-primary" />
              </div>

              <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                404 Error
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl">
                This Page Doesn&apos;t Exist
              </h1>

              <Text size="lg">
                The page you&apos;re looking for may have moved or never existed. Let&apos;s get
                you back on track.
              </Text>

              <div className="mt-2 flex flex-wrap justify-center gap-4">
                <Link href="/" className={cn(buttonVariants({ size: "lg" }), "h-12 px-6")}>
                  Back to Home <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6")}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
