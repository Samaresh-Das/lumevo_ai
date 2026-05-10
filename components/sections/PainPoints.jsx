"use client";

import { useEffect, useRef } from "react";
import { Brain, Smartphone, Timer } from "lucide-react";

const painPoints = [
  {
    icon: Brain,
    pain: "Spent 3 hours writing a cover letter for a job that ghosted you.",
    solution: "CovGen fixes this in 30 seconds.",
    gradient: "from-[#7B61FF] to-[#A78BFA]",
  },
  {
    icon: Smartphone,
    pain: "Posted manually every day for months. Still no real growth.",
    solution: "DailyContent posts for you, every day.",
    gradient: "from-[#00D4AA] to-[#34D399]",
  },
  {
    icon: Timer,
    pain: "Your competition uses AI. You're still doing it by hand.",
    solution: "Lumevo AI levels the playing field.",
    gradient: "from-[#F59E0B] to-[#FBBF24]",
  },
];

export default function PainPoints() {
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
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pain-points"
      className="section-padding relative overflow-hidden"
    >
      {/* Background mesh */}
      <div
        className="mesh-gradient mesh-violet"
        style={{ width: "500px", height: "500px", top: "-10%", right: "-10%" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-on-scroll familiar-heading">
          <h2
            className="familiar-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sound familiar?
          </h2>
          <p className="familiar-subtitle text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            You&apos;re not alone. These are the problems Lumevo AI was built to solve.
          </p>
        </div>

        {/* Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                className={`animate-on-scroll stagger-${i + 1} familiar-card glass-card p-8 group cursor-default`}
              >
                {/* Icon */}
                <div
                  className={`familiar-icon w-12 h-12 rounded-xl bg-gradient-to-br ${point.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                {/* Pain text */}
                <p className="familiar-quote text-white font-semibold text-lg leading-snug mb-4">
                  &quot;{point.pain}&quot;
                </p>

                {/* Solution */}
                <p className="familiar-solution text-[var(--text-secondary)] text-sm leading-relaxed">
                  → <span className="text-[var(--accent-teal)] font-medium">{point.solution}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
