import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import GeminiEffect from "@/components/sections/GeminiEffect";
import PainPoints from "@/components/sections/PainPoints";
import ProductsShowcase from "@/components/sections/ProductsShowcase";
import ProductMockup from "@/components/sections/ProductMockup";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialProof from "@/components/sections/SocialProof";
import TrustedBy from "@/components/sections/TrustedBy";
import Roadmap from "@/components/sections/Roadmap";
import PricingCTA from "@/components/sections/PricingCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Announcement Banner */}
      <AnnouncementBar />

      {/* Navigation */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 1.5: Gemini Effect */}
        <GeminiEffect />

        {/* Section 2: Pain Points */}
        <PainPoints />

        {/* Section 3: Products Showcase */}
        <ProductsShowcase />

        {/* Section 4: Product Mockups (21st dev) */}
        <ProductMockup />

        {/* Section 5: How It Works */}
        <HowItWorks />

        {/* Section 6: Social Proof */}
        <SocialProof />

        {/* Section 7: Trusted By + Sparkles (21st dev) */}
        {/* <TrustedBy /> */}

        {/* Section 8: Roadmap Timeline (21st dev) */}
        <Roadmap />

        {/* Section 9: Pricing & Waitlist CTA */}
        <PricingCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
