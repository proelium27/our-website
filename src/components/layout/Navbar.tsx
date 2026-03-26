"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-icon-only.png"
            alt="Fixable"
            width={40}
            height={40}
            style={{ objectFit: "contain" }}
          />
          <span className="text-2xl font-semibold tracking-tight text-foreground leading-none">fixable</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className={buttonVariants({ size: "sm" })}>
            Get a Free Mockup
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(buttonVariants({ size: "sm" }), "mt-2 w-full")}
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Mockup
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
