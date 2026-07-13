import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

import { Hero } from "@/components/marketing/sections/hero";
import { Stats } from "@/components/marketing/sections/stats";
import { Problems } from "@/components/marketing/sections/problems";
import { Services } from "@/components/marketing/sections/services";
import { AIWorkforce } from "@/components/marketing/sections/ai-workforce";
import { Solutions } from "@/components/marketing/sections/solutions";
import { Industries } from "@/components/marketing/sections/industries";
import { Process } from "@/components/marketing/sections/process";
import { CaseStudies } from "@/components/marketing/sections/case-studies";
import { Pricing } from "@/components/marketing/sections/pricing";
import { Testimonials } from "@/components/marketing/sections/testimonials";
import { FAQ } from "@/components/marketing/sections/faq";
import { CTA } from "@/components/marketing/sections/cta";


export default function Home() {

  return (
    <>
      <Navbar />

      <main id="main-content">

        <Hero />

        <Stats />

        <Problems />

        <Services />

        <AIWorkforce />

        <Solutions />

        <Industries />

        <Process />

        <CaseStudies />

        <Pricing />

        <Testimonials />

        <FAQ limit={6} />

        <CTA />

      </main>


      <Footer />

    </>
  );
}
