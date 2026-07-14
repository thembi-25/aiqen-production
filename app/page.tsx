import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

import { Hero } from "@/components/marketing/sections/hero";
import { Challenges } from "@/components/marketing/sections/challenges";
import { HowItWorks } from "@/components/marketing/sections/how-it-works";
import { Solutions } from "@/components/marketing/sections/solutions";
import { AIWorkforce } from "@/components/marketing/sections/ai-workforce";
import { Industries } from "@/components/marketing/sections/industries";
import { ClientPortalPreview } from "@/components/marketing/sections/client-portal-preview";
import { BusinessAssessment } from "@/components/marketing/sections/business-assessment";
import { CaseStudies } from "@/components/marketing/sections/case-studies";
import { FAQ } from "@/components/marketing/sections/faq";
import { CTA } from "@/components/marketing/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <Challenges />
        <HowItWorks />
        <Solutions />
        <AIWorkforce />
        <Industries />
        <ClientPortalPreview />
        <BusinessAssessment />
        <CaseStudies />
        <FAQ limit={6} />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
