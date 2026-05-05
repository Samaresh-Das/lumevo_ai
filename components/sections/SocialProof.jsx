"use client";

import { useEffect, useRef } from "react";
import { Star, Clock, TrendingUp, Layers } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    role: "Software Engineer",
    initials: "PS",
    color: "#7B61FF",
    stars: 5,
    text: "I sent 40 applications last month. CovGen saved me 20+ hours and I got 6 callbacks. The AI cover letter generator actually sounds like me, not a robot.",
  },
  {
    name: "Alex K.",
    role: "Marketing Manager",
    initials: "AK",
    color: "#00D4AA",
    stars: 5,
    text: "I was skeptical about an AI cover letter writer — but every letter CovGen produced was better than what I spent hours writing manually. Game changer.",
  },
  {
    name: "Marcus R.",
    role: "Freelance Designer",
    initials: "MR",
    color: "#F59E0B",
    stars: 5,
    text: "Applied to 12 gigs in one evening. Got interviews for 4 of them. CovGen's tone control feature nails the vibe for creative roles. Best cover letter AI I've used.",
  },
];

const stats = [
  {
    icon: Clock,
    value: "30 seconds",
    label: "Average cover letter generation time",
  },
  {
    icon: TrendingUp,
    value: "3x more",
    label: "Interview callbacks reported by early users",
  },
  {
    icon: Layers,
    value: "10+ platforms",
    label: "DailyContent will post to (coming soon)",
  },
];

export default function SocialProof() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="social-proof"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="mesh-gradient mesh-violet"
        style={{ width: "600px", height: "600px", top: "0%", left: "50%", transform: "translateX(-50%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Real results. Real people.
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what early users are saying about our AI cover letter generator.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`animate-on-scroll stagger-${i + 1} glass-card p-6 text-center`}
              >
                <Icon size={24} className="text-[var(--accent-violet)] mx-auto mb-3" />
                <div
                  className="text-3xl md:text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <p className="text-[var(--text-muted)] text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${i + 1} glass-card p-6 md:p-8 flex flex-col`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--text-primary)] text-sm leading-relaxed flex-1 mb-6">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-[var(--text-muted)] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
