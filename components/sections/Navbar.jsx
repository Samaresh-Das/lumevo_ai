"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <nav
      id="navbar"
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? "bg-[rgba(10,10,15,0.8)] backdrop-blur-xl border-b border-[var(--border-subtle)]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img src="/lemuvoai.png" alt="Lumevo AI Logo" className="w-10 h-10 object-contain rounded-full" />
            <span
              className="text-white font-bold text-lg tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Lumevo AI
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://covgen-ai.vercel.app/"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Try CovGen Free
            </a>
            <a
              href="#pricing"
              className="btn-secondary text-sm py-2.5 px-5"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white hover:text-[var(--accent-violet)] transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[rgba(10,10,15,0.95)] backdrop-blur-xl border-b border-[var(--border-subtle)] transition-all duration-300 overflow-hidden ${isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[var(--text-secondary)] hover:text-white text-base py-2 transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-[var(--border-subtle)]">
            <a
              href="https://covgen-ai.vercel.app/"
              className="btn-primary text-sm py-3 text-center"
              onClick={() => setIsMobileOpen(false)}
            >
              Try CovGen Free
            </a>
            <a
              href="#pricing"
              className="btn-secondary text-sm py-3 text-center"
              onClick={() => setIsMobileOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
