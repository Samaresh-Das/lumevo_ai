"use client";

import { Banner } from "@/components/ui/banner";

export default function AnnouncementBar() {
  return (
    <Banner
      id="lumevo-launch"
      variant="rainbow"
      className="bg-[var(--background)] text-white/90"
      xColor="#888"
      rainbowColors={[
        "rgba(123,97,255,0.5)",
        "rgba(0,212,170,0.4)",
        "transparent",
        "rgba(123,97,255,0.5)",
        "transparent",
        "rgba(0,212,170,0.4)",
        "transparent",
      ]}
    >
      <span className="flex items-center gap-2 text-xs sm:text-sm">
        🚀 <span className="font-semibold">CovGen is live</span>
        <span className="hidden sm:inline">—</span>
        <span className="hidden sm:inline">Generate your first AI cover letter free</span>
        <a
          href="https://covgen-ai.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline underline-offset-2 font-semibold text-[var(--accent-teal)] hover:text-white transition-colors"
        >
          Try it now →
        </a>
      </span>
    </Banner>
  );
}
