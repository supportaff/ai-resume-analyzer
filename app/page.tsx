import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <Features />
      <Pricing />
      <CTA />
    </main>
  );
}
