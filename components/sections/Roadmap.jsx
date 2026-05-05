"use client";

import { useEffect, useRef } from "react";
import { FileText, Globe, Cpu, BarChart3, Zap, Layers } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "CovGen Launch",
    date: "Q1 2024",
    content: "AI cover letter generator — paste a job description, get a tailored letter in 30 seconds.",
    category: "Product",
    icon: FileText,
    relatedIds: [2, 3],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Tone Control",
    date: "Q2 2024",
    content: "Choose Professional, Confident, or Creative tone for every cover letter.",
    category: "Feature",
    icon: Cpu,
    relatedIds: [1],
    status: "completed",
    energy: 90,
  },
  {
    id: 3,
    title: "LinkedIn Import",
    date: "Q2 2024",
    content: "Import job descriptions directly from LinkedIn URLs.",
    category: "Integration",
    icon: Zap,
    relatedIds: [1],
    status: "completed",
    energy: 85,
  },
  {
    id: 4,
    title: "DailyContent Beta",
    date: "Q3 2024",
    content: "Agentic AI that creates and posts social media content autonomously.",
    category: "Product",
    icon: Globe,
    relatedIds: [5],
    status: "in-progress",
    energy: 60,
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    date: "Q4 2024",
    content: "Track cover letter performance and social media growth metrics.",
    category: "Feature",
    icon: BarChart3,
    relatedIds: [4],
    status: "pending",
    energy: 30,
  },
  {
    id: 6,
    title: "API & Integrations",
    date: "2025",
    content: "Connect Lumevo AI to your existing workflow with our developer API.",
    category: "Platform",
    icon: Layers,
    relatedIds: [1, 4],
    status: "pending",
    energy: 15,
  },
];

export default function Roadmap() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden" id="roadmap">
      <div className="mesh-gradient mesh-teal" style={{ width: "500px", height: "500px", top: "10%", left: "-10%" }} />
      <div className="mesh-gradient mesh-violet" style={{ width: "600px", height: "600px", bottom: "10%", right: "-10%" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            What we&apos;re building.
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Lumevo AI is evolving fast. Here&apos;s what&apos;s live, what&apos;s next, and where we&apos;re headed. Click any node to explore.
          </p>
        </div>

        {/* Orbital Timeline */}
        <div className="animate-on-scroll stagger-2">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </div>
    </section>
  );
}
