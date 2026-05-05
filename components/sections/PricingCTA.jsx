"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ArrowRight, Zap, Crown, Users, Mail } from "lucide-react";

const tiers = [
  {
    name: "Free", price: "$0", period: "forever",
    desc: "Perfect for getting started with AI cover letters.",
    features: ["10 cover letters per month", "Basic templates", "Copy as text", "Standard AI models"],
    cta: "Start Free", href: "https://covgen-ai.vercel.app/", variant: "outline", icon: Zap, popular: false,
  },
  {
    name: "Pro", price: "$7", period: "/month",
    desc: "For serious job seekers who want every advantage.",
    features: ["Unlimited cover letters", "Tone control", "PDF export", "Priority AI model", "Custom instructions", "LinkedIn job import"],
    cta: "Upgrade to Pro", href: "https://covgen-ai.vercel.app/", variant: "primary", icon: Crown, popular: true,
  },
  {
    name: "Team", price: "$29", period: "/month",
    desc: "For teams, recruiters, and career coaches.",
    features: ["Everything in Pro", "Team access (5 seats)", "Custom branding", "API access", "Priority support", "Analytics dashboard"],
    cta: "Contact Sales", href: "#", variant: "outline", icon: Users, popular: false,
  },
];

export default function PricingCTA() {
  const ref = useRef(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section ref={ref} id="pricing" className="section-padding relative overflow-hidden">
      <div className="mesh-gradient mesh-violet" style={{ width: "600px", height: "600px", top: "0%", right: "-15%" }} />
      <div className="mesh-gradient mesh-teal" style={{ width: "500px", height: "500px", bottom: "0%", left: "-10%" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Start free. Upgrade when you&apos;re ready.
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">Join free, upgrade when you love it. No credit card required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {tiers.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className={`animate-on-scroll stagger-${i + 1} glass-card p-6 md:p-8 relative flex flex-col ${t.popular ? "border-[var(--accent-violet)] shadow-[0_0_40px_rgba(123,97,255,0.15)]" : ""}`}>
                {t.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--accent-violet)] text-white text-xs font-bold">Most Popular</div>}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.popular ? "bg-gradient-to-br from-[var(--accent-violet)] to-[#A78BFA]" : "bg-[var(--surface-elevated)]"}`}>
                    <Icon size={18} className={t.popular ? "text-white" : "text-[var(--text-secondary)]"} />
                  </div>
                  <h4 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{t.name}</h4>
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{t.price}</span>
                  <span className="text-[var(--text-muted)] text-sm ml-1">{t.period}</span>
                </div>
                <p className="text-[var(--text-secondary)] text-sm mb-6">{t.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check size={16} className="text-[var(--accent-teal)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-primary)] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={t.href} 
                  {...(t.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`text-center text-sm py-3 rounded-full font-semibold block ${t.variant === "primary" ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}`}
                >
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* DailyContent Waitlist */}
        <div className="animate-on-scroll">
          <div className="glass-card glass-card-teal p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-teal)] via-[var(--accent-violet)] to-[var(--accent-teal)] opacity-60" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-teal-dim)] border border-[rgba(0,212,170,0.2)] mb-6">
              <Mail size={14} className="text-[var(--accent-teal)]" />
              <span className="text-xs font-semibold text-[var(--accent-teal)]">Early Access</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>Be first in line for DailyContent</h3>
            <p className="text-[var(--text-secondary)] text-base max-w-md mx-auto mb-8">Join the waitlist for exclusive early-bird pricing. Your AI social media manager is almost ready.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 w-full px-5 py-3 rounded-full bg-[var(--surface)] border border-[var(--border-default)] text-white text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-teal)] transition-colors" />
              <button type="submit" className="btn-secondary py-3 px-6 text-sm whitespace-nowrap w-full sm:w-auto">{submitted ? "You're in! 🎉" : "Join Waitlist"}</button>
            </form>
            <p className="text-[var(--text-muted)] text-xs mt-4">We hate spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
