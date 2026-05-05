"use client";

import { useEffect, useRef } from "react";
import { ClipboardPaste, Cpu, Download, Link2, Target, Rocket } from "lucide-react";

const covgenSteps = [
  {
    step: "01",
    icon: ClipboardPaste,
    title: "Paste the job description",
    description: "Drop in the role you're applying for. That's all the AI cover letter generator needs.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "AI crafts your letter",
    description: "Personalized, ATS-optimized, and human-sounding. No robotic templates — ever.",
  },
  {
    step: "03",
    icon: Download,
    title: "Download & apply",
    description: "Your tailored cover letter is ready in under 60 seconds. Export and send.",
  },
];

const dailyContentSteps = [
  {
    step: "01",
    icon: Link2,
    title: "Connect your accounts",
    description: "Link LinkedIn, Instagram, Twitter/X, and more.",
  },
  {
    step: "02",
    icon: Target,
    title: "Set content goals",
    description: "Tell the AI your voice, topics, and posting frequency.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "AI posts for you",
    description: "Sit back. DailyContent creates, schedules, and publishes autonomously.",
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      className="section-padding relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Embarrassingly simple.
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            No learning curve. No onboarding calls. Just results.
          </p>
        </div>

        {/* CovGen Steps */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-12 animate-on-scroll">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-violet)] to-[#A78BFA] flex items-center justify-center">
              <Cpu size={16} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
              CovGen — How it works
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-[var(--accent-violet)] via-[rgba(123,97,255,0.3)] to-[var(--accent-violet)]" />

            {covgenSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className={`animate-on-scroll stagger-${i + 1} text-center relative`}>
                  {/* Step number */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-[var(--surface)] border border-[var(--border-default)] flex items-center justify-center group hover:border-[var(--accent-violet)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(123,97,255,0.2)]">
                      <Icon size={32} className="text-[var(--accent-violet)]" />
                    </div>
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--accent-violet)] text-white text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {step.title}
                  </h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* DailyContent Teaser */}
        <div className="animate-on-scroll">
          <div className="glass-card glass-card-teal p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-teal)] to-[#34D399] opacity-40" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-teal)] to-[#34D399] flex items-center justify-center">
                <Rocket size={16} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                DailyContent — Coming Soon
              </h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-teal-dim)] text-[var(--accent-teal)] font-medium border border-[rgba(0,212,170,0.2)]">
                Preview
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dailyContentSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent-teal-dim)] flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[var(--accent-teal)]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                      <p className="text-[var(--text-muted)] text-xs leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-[var(--text-muted)] text-sm mt-8 text-center">
              DailyContent works the same way — connect, configure, and let it run. Automated social media posting that actually works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
