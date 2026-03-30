"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeInUp } from "@/components/ui/fade-in-up";
import { TiltCard } from "@/components/ui/tilt-card";

type Plan = {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$699",
    description: "You need a real website — not a Wix template. This gets you online fast, with a site you're proud to hand out with your business card.",
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
    price: "$799",
    originalPrice: "$1,299",
    description: "The most popular choice for local service businesses. Enough pages to tell your full story, plus the SEO foundation to start showing up when customers search.",
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
    price: "$999",
    originalPrice: "$2,499",
    description: "For businesses with more to say — multiple locations, service pages, or a booking flow. Everything we offer, built to scale with you.",
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
          <h2 className="text-balance [font-family:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#7B7F8A" }}>
            One-time investment. No hidden fees. Pick the package that fits
            where your business is today.
          </p>
        </div>

        {/* Launch promo banner */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: "#6B7C98" }}
          />
          <p className="text-xs font-semibold" style={{ color: "#6B7C98" }}>
            Launch pricing — all sites under $1,000 while we&apos;re getting started.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeInUp key={plan.name} delay={i * 0.15}>
              <TiltCard className="h-full">
              <div
                className={cn(
                  "relative flex flex-col rounded-xl border p-8 h-full",
                  plan.featured
                    ? "scale-[1.02] border-accent bg-white shadow-md"
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
                  <div className="flex items-baseline gap-2">
                    {plan.originalPrice && (
                      <span
                        className="text-xl font-medium line-through"
                        style={{ color: "#B0AAA8" }}
                      >
                        {plan.originalPrice}
                      </span>
                    )}
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
                    aria-label={`${plan.cta} — ${plan.name} plan`}
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
              </TiltCard>
            </FadeInUp>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-sm" style={{ color: "#7B7F8A" }}>
          Need ongoing support?{" "}
          <strong style={{ color: "#5E5653" }}>
            Add monthly maintenance starting at $70/mo
          </strong>{" "}
          — includes updates, backups, security monitoring, and 1 hour of
          content edits per month.
        </p>
      </div>
    </section>
  );
}
