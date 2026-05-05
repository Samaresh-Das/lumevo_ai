"use client";

import { useEffect, useRef } from "react";
import { Sparkles } from "@/components/ui/sparkles";

export default function TrustedBy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center animate-on-scroll">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-[var(--accent-violet)]">
              Trusted by job seekers.
            </span>
            <br />
            <span className="text-white">Used by ambitious creators.</span>
          </div>

          <p className="mt-6 text-[var(--text-secondary)] text-base max-w-lg mx-auto">
            From recent graduates to seasoned professionals — Lumevo AI helps thousands land interviews faster and grow their personal brand.
          </p>
        </div>

        {/* Logo / Stat Row */}
        <div className="mt-12 animate-on-scroll grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "2,000+", label: "Active Users" },
            { value: "30+", label: "Countries" },
            { value: "10K+", label: "Letters Generated" },
            { value: "4.9★", label: "User Rating" },
          ].map((stat, i) => (
            <div key={i} className="py-4">
              <div className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                {stat.value}
              </div>
              <div className="text-[var(--text-muted)] text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sparkles Background */}
      <div className="relative -mt-20 h-80 w-full overflow-hidden" style={{ maskImage: "radial-gradient(50% 50%, white, transparent)" }}>
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#7B61FF,transparent_70%)] before:opacity-30" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-[rgba(255,255,255,0.08)] bg-[var(--background)]" />
        <Sparkles
          density={1000}
          className="absolute inset-x-0 bottom-0 h-full w-full"
          color="#ffffff"
          speed={0.5}
          size={1.2}
          opacity={0.8}
        />
      </div>
    </section>
  );
}
