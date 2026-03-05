import { FAQAccordion } from "@/components/faq-accordion";
import { FeatureHighlights } from "@/components/feature-highlights";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Nav } from "@/components/nav";
import { SocialProof } from "@/components/social-proof";
import { TrustSection } from "@/components/trust-section";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <TrustSection />
        <FeatureHighlights />
        <FAQAccordion />
      </main>
      <Footer />
    </>
  );
}
