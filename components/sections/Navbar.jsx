"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
    handleScroll();
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
      className={`fixed left-0 right-0 z-[60] px-3 transition-[top] duration-300 sm:px-5 ${
        isScrolled ? "top-2" : "top-10"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl rounded-2xl border border-white/15 bg-white/[0.055] px-4 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-300 sm:px-5 ${
          isScrolled
            ? "border-white/20 bg-white/[0.075] shadow-[0_18px_70px_rgba(0,0,0,0.32)]"
            : ""
        }`}
      >
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/lemuvoai.png"
              alt="Lumevo AI Logo"
              width={32}
              height={32}
              className="rounded-full object-contain"
              priority
            />
            <span
              className="text-white font-bold text-base tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Lumevo AI
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center rounded-full border border-white/10 bg-white/[0.045] px-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-white/68 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://covgen-ai.vercel.app/"
              className="nav-glass-button nav-glass-button-primary"
            >
              Try CovGen Free
            </a>
            <a href="#pricing" className="nav-glass-button">
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden rounded-full border border-white/10 bg-white/[0.06] p-2 text-white transition-colors hover:bg-white/12"
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
        className={`md:hidden absolute left-3 right-3 top-full mt-2 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl transition-all duration-300 sm:left-5 sm:right-5 ${
          isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-base text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <a
              href="https://covgen-ai.vercel.app/"
              className="nav-glass-button nav-glass-button-primary justify-center"
              onClick={() => setIsMobileOpen(false)}
            >
              Try CovGen Free
            </a>
            <a
              href="#pricing"
              className="nav-glass-button justify-center"
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
