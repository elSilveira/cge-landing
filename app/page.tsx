import { ApiSuite } from "@/components/api-suite";
import { CtaSection } from "@/components/cta-section";
import { EvidenceSection } from "@/components/evidence-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { PipelineSection } from "@/components/pipeline-section";
import { PricingSection } from "@/components/pricing-section";
import { ProblemSection } from "@/components/problem-section";
import { UseCases } from "@/components/use-cases";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <PipelineSection />
      <EvidenceSection />
      <ApiSuite />
      <UseCases />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
