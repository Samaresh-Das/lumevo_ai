"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { ArrowRight, Sparkles } from "lucide-react";

const BLACK_HOLE_STREAM =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(BLACK_HOLE_STREAM);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = BLACK_HOLE_STREAM;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
      />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "rgba(0, 0, 0, 0.07)" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="hero-badge-motion inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-violet-dim)] border border-[rgba(123,97,255,0.2)] mb-8">
              <Sparkles
                size={14}
                className="text-[var(--accent-violet)] hero-sparkle"
              />
              <span className="text-xs font-medium text-[var(--accent-violet)]">
                Your AI productivity suite
              </span>
            </div>

            {/* H1 — Primary Headline */}
            <h1
              className="hero-title-motion text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="hero-title-line">
                <span className="hero-word" style={{ "--delay": "0.16s" }}>
                  Stop
                </span>{" "}
                <span className="hero-word" style={{ "--delay": "0.26s" }}>
                  Applying.
                </span>
              </span>{" "}
              <span className="hero-title-line">
                <span
                  className="hero-word hero-gradient-word bg-gradient-to-r from-[var(--accent-violet)] via-white to-[var(--accent-teal)] bg-clip-text text-transparent"
                  style={{ "--delay": "0.42s" }}
                >
                  Start
                </span>{" "}
                <span
                  className="hero-word hero-gradient-word bg-gradient-to-r from-[var(--accent-violet)] via-white to-[var(--accent-teal)] bg-clip-text text-transparent"
                  style={{ "--delay": "0.54s" }}
                >
                  Landing.
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-copy-motion text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-10 drop-shadow-md">
              <span>CovGen writes ATS-ready cover letters in 30 seconds.</span>
              <span>DailyContent runs your social media on autopilot.</span>
              <span>One suite. Zero time wasted.</span>
            </p>

            {/* CTAs */}
            <div className="hero-actions-motion flex flex-col sm:flex-row items-start gap-4 pointer-events-auto">
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
              <a
                href="#pricing"
                className="btn-secondary text-base py-3.5 px-8"
              >
                Get Early Access to DailyContent →
              </a>
            </div>

            {/* Social Proof Line */}
            <div className="hero-proof-motion mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["#7B61FF", "#00D4AA", "#FF6B6B", "#FFB86C"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className="hero-avatar w-8 h-8 rounded-full border-2 border-[var(--background)] flex items-center justify-center text-[10px] font-bold text-white"
                      style={{
                        background: color,
                        zIndex: 4 - i,
                        "--delay": `${0.9 + i * 0.08}s`,
                      }}
                    >
                      {["PS", "AK", "MR", "JD"][i]}
                    </div>
                  ),
                )}
              </div>
              <p className="text-sm text-white/80 drop-shadow-sm">
                Join{" "}
                <span className="text-white font-semibold underline decoration-[var(--accent-violet)]/40 underline-offset-4">
                  2,000+
                </span>{" "}
                job seekers and creators already using Lumevo AI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[2] pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--background), transparent)",
        }}
      />
    </section>
  );
}
