"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for getting a professional web presence up and running fast.",
    features: [
      "3-page website",
      "Mobile responsive design",
      "Basic on-page SEO",
      "Contact form",
      "2 rounds of revisions",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$999",
    description: "For businesses ready to compete online and start generating inbound leads.",
    features: [
      "5-page website",
      "Advanced SEO setup",
      "Google My Business setup",
      "1 month free maintenance",
      "Speed & performance optimization",
      "3 rounds of revisions",
    ],
    featured: true,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "$1,999",
    description: "The full-service package for ambitious businesses that want it all.",
    features: [
      "8+ page website",
      "Full SEO strategy & implementation",
      "E-commerce ready",
      "3 months free maintenance",
      "Priority support",
      "Unlimited revision rounds",
    ],
    featured: false,
    cta: "Get Started",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#6B7C98" }}
          >
            Pricing
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#7B7F8A" }}>
            One-time investment. No hidden fees. Pick the package that fits
            where your business is today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-xl border p-8",
                plan.featured
                  ? "border-accent bg-white shadow-sm"
                  : "border-border bg-white/60"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-8">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: "#6B7C98" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier + price */}
              <div className="mb-6">
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-widest"
                  style={{ color: "#7B7F8A" }}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-4xl font-extrabold tracking-tight"
                    style={{ color: "#5E5653" }}
                  >
                    {plan.price}
                  </span>
                </div>
                <p className="mt-1 text-xs" style={{ color: "#7B7F8A" }}>
                  one-time payment
                </p>
              </div>

              <p className="mb-6 text-sm leading-relaxed" style={{ color: "#7B7F8A" }}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="mb-8 flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#5E5653" }}>
                    <span
                      className="mt-0.5 shrink-0 text-xs font-bold"
                      style={{ color: "#6B7C98" }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA — pushed to bottom */}
              <div className="mt-auto">
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({
                      variant: plan.featured ? "default" : "outline",
                      size: "default",
                    }),
                    "w-full justify-center text-sm font-semibold"
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-sm" style={{ color: "#7B7F8A" }}>
          Need ongoing support?{" "}
          <strong style={{ color: "#5E5653" }}>
            Add monthly maintenance starting at $99/mo
          </strong>{" "}
          — includes updates, backups, security monitoring, and 1 hour of
          content edits per month.
        </p>
      </div>
    </section>
  );
}
