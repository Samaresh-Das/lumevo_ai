"use client";

import SectionWithMockup from "@/components/blocks/section-with-mockup";

export default function ProductMockup() {
  return (
    <div>
      {/* CovGen Mockup */}
      <SectionWithMockup
        title={
          <>
            AI that writes cover letters
            <br />
            like a career coach.
          </>
        }
        description={
          <>
            Stop spending hours on applications that go nowhere. CovGen analyzes the job
            description, matches your experience, and crafts a personalized, ATS-optimized
            cover letter that actually sounds like you — in under 30 seconds. The best AI cover
            letter generator built for job seekers who want results, not templates.
          </>
        }
        primaryImageSrc="/Covmockup1.png"
        secondaryImageSrc="/Covmockup2.png"
        ctaText="Generate My Cover Letter — Free"
        ctaHref="https://covgen-ai.vercel.app/"
        ctaVariant="violet"
      />

      {/* DailyContent Mockup */}
      <SectionWithMockup
        title={
          <>
            Your AI social media manager
            <br />
            that never sleeps.
          </>
        }
        description={
          <>
            DailyContent doesn't just schedule posts — it creates them. Connect your accounts,
            set your content goals, and let the agentic AI social media manager handle everything:
            writing, designing, and publishing across LinkedIn, Instagram, and more. Automated
            social media posting that actually grows your audience.
          </>
        }
        primaryImageSrc="/agenticai1.png"
        secondaryImageSrc="/agenticai2.png"
        reverseLayout
        ctaText="Join Waitlist  →"
        ctaHref="#pricing"
        ctaVariant="teal"
      />
    </div>
  );
}
