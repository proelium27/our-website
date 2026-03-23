"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Dot grid — pure CSS, no gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23BDB7B5'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#6B7C98" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#6B7C98" }}
            >
              fixable
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-[clamp(2.25rem,5.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-foreground">
            Your Website Should Be Your{" "}
            <span style={{ color: "#6B7C98" }}>Best Salesperson</span>
          </h1>

          {/* Sub */}
          <p
            className="mb-10 max-w-xl text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed"
            style={{ color: "#7B7F8A" }}
          >
            Most WordPress sites load in 3–5 seconds. Ours load in under a
            second — and Google ranks the faster site.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#services"
              className={cn(
                buttonVariants({ size: "default" }),
                "px-6 py-2.5 text-sm font-semibold"
              )}
            >
              See Our Services
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "px-6 py-2.5 text-sm font-semibold"
              )}
            >
              Get a Free Mockup
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
