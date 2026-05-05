"use client";

import { useEffect, useRef } from "react";
import { GalaxyHeroBackground } from "@/components/blocks/galaxy-hero-background";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // Stagger-in animation
    const children = el.querySelectorAll(".hero-animate");
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(20px)";
      child.style.transition = `opacity 0.7s ease-out ${i * 0.15}s, transform 0.7s ease-out ${i * 0.15}s`;
      
      requestAnimationFrame(() => {
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
      });
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <GalaxyHeroBackground />
      </div>

      {/* Gradient mesh fallback layer */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div
          className="mesh-gradient mesh-violet"
          style={{ width: "600px", height: "600px", top: "10%", left: "-5%" }}
        />
        <div
          className="mesh-gradient mesh-teal"
          style={{ width: "400px", height: "400px", bottom: "20%", right: "5%" }}
        />
      </div>

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex items-center min-h-screen pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="hero-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-violet-dim)] border border-[rgba(123,97,255,0.2)] mb-8">
              <Sparkles size={14} className="text-[var(--accent-violet)]" />
              <span className="text-xs font-medium text-[var(--accent-violet)]">
                Your AI productivity suite
              </span>
            </div>

            {/* H1 — Primary Headline */}
            <h1
              className="hero-animate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Stop Applying.{" "}
              <span className="bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent-teal)] bg-clip-text text-transparent">
                Start Landing.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-animate text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-10 drop-shadow-md">
              CovGen writes ATS-ready cover letters in 30 seconds.
              DailyContent runs your social media on autopilot.
              One suite. Zero time wasted.
            </p>

            {/* CTAs */}
            <div className="hero-animate flex flex-col sm:flex-row items-start gap-4 pointer-events-auto">
              <a 
                href="https://covgen-ai.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary text-base py-3.5 px-8 group"
              >
                Generate My Cover Letter — Free
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a href="#pricing" className="btn-secondary text-base py-3.5 px-8">
                Get Early Access to DailyContent →
              </a>
            </div>

            {/* Social Proof Line */}
            <div className="hero-animate mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["#7B61FF", "#00D4AA", "#FF6B6B", "#FFB86C"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[var(--background)] flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: color, zIndex: 4 - i }}
                  >
                    {["PS", "AK", "MR", "JD"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/80 drop-shadow-sm">
                Join <span className="text-white font-semibold underline decoration-[var(--accent-violet)]/40 underline-offset-4">2,000+</span> job seekers and creators already using Lumevo AI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--background))",
        }}
      />
    </section>
  );
}
