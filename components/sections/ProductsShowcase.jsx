"use client";

import { useEffect, useRef } from "react";
import { GalaxyHeroBackground } from "@/components/blocks/galaxy-hero-background";
import {
  CheckCircle2,
  Clock,
  FileText,
  Zap,
  Palette,
  Shield,
  Globe,
  BarChart3,
  Cpu,
  Settings,
  ArrowRight,
} from "lucide-react";

const covgenFeatures = [
  { icon: FileText, text: "Paste job description → get a tailored letter in 30 seconds" },
  { icon: Shield, text: "Sounds human, not robotic — passes AI detectors" },
  { icon: Zap, text: "ATS-keyword optimized automatically" },
  { icon: Palette, text: "Tone control: Professional, Confident, or Creative" },
];

const dailyContentFeatures = [
  { icon: Globe, text: "Connects to LinkedIn, Instagram, Twitter/X, and more" },
  { icon: Cpu, text: "AI generates content based on your goals and voice" },
  { icon: Settings, text: "Posts on your behalf — no approval required (you set the rules)" },
  { icon: BarChart3, text: "Tracks performance and refines content over time" },
];

export default function ProductsShowcase() {
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
      id="products"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <GalaxyHeroBackground height="100%" interactive={false} />
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[rgba(10,10,15,0.50)]" />
      <div
        className="absolute inset-x-0 top-0 z-[2] h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, var(--background), transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 z-[2] h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--background), transparent)",
        }}
      />

      {/* Background meshes */}
      <div
        className="mesh-gradient mesh-violet z-[3]"
        style={{ width: "600px", height: "600px", top: "20%", left: "-15%" }}
      />
      <div
        className="mesh-gradient mesh-teal z-[3]"
        style={{ width: "400px", height: "400px", bottom: "10%", right: "-10%" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Two tools. One unfair advantage.
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Meet the Lumevo AI suite — built for job seekers who want interviews and creators who want growth.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CovGen Card */}
          <div className="animate-on-scroll stagger-1 glass-card product-glass-card p-8 md:p-10 relative overflow-hidden group">
            {/* Glow accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-violet)] to-[#A78BFA] opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(123,97,255,0.1)] border border-[rgba(123,97,255,0.25)] mb-6">
              <CheckCircle2 size={14} className="text-green-400" />
              <span className="text-xs font-semibold text-green-400">Available Now</span>
            </div>

            {/* Product Info */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-violet)] to-[#A78BFA] flex items-center justify-center">
                <FileText size={20} className="text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                CovGen
              </h3>
            </div>

            <p className="text-[var(--text-secondary)] text-base mb-8">
              Write cover letters that actually get interviews. AI cover letter generator that&apos;s ATS-optimized and sounds human.
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {covgenFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <Icon size={18} className="text-[var(--accent-violet)] mt-0.5 shrink-0" />
                    <span className="text-[var(--text-primary)] text-sm">{feat.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <a href="https://covgen-ai.vercel.app/" className="btn-primary text-sm py-3 px-6 group/btn">
              Try CovGen Free
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* DailyContent Card */}
          <div className="animate-on-scroll stagger-2 glass-card glass-card-teal product-glass-card p-8 md:p-10 relative overflow-hidden group">
            {/* Glow accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-teal)] to-[#34D399] opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.25)] mb-6">
              <Clock size={14} className="text-[var(--accent-teal)]" />
              <span className="text-xs font-semibold text-[var(--accent-teal)]">Coming Soon</span>
            </div>

            {/* Product Info */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-teal)] to-[#34D399] flex items-center justify-center">
                <Globe size={20} className="text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                DailyContent
              </h3>
            </div>

            <p className="text-[var(--text-secondary)] text-base mb-8">
              Your AI that actually posts — not just schedules. Agentic AI social media manager that creates and uploads content autonomously.
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {dailyContentFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <Icon size={18} className="text-[var(--accent-teal)] mt-0.5 shrink-0" />
                    <span className="text-[var(--text-primary)] text-sm">{feat.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <a href="#pricing" className="btn-secondary text-sm py-3 px-6">
              Join the Waitlist →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
