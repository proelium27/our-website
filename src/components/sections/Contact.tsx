"use client";

import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/myknqpjq";

const points = [
  "Custom mockup delivered in 3–5 business days",
  "No credit card or commitment required",
  "Personalized to your industry and brand",
];

const industries = [
  { value: "home-services", label: "Home Services (Plumbing, HVAC, Electrical, etc.)" },
  { value: "restaurant", label: "Restaurant / Café / Food & Beverage" },
  { value: "health-fitness", label: "Health & Fitness" },
  { value: "retail", label: "Retail / E-commerce" },
  { value: "professional-services", label: "Professional Services (Legal, Finance, Consulting)" },
  { value: "healthcare", label: "Healthcare / Dental / Medical" },
  { value: "real-estate", label: "Real Estate" },
  { value: "beauty-wellness", label: "Beauty & Wellness" },
  { value: "other", label: "Other" },
];

type Fields = {
  name: string;
  business: string;
  email: string;
  phone: string;
  business_type: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const emptyFields: Fields = {
  name: "",
  business: "",
  email: "",
  phone: "",
  business_type: "",
};

export default function Contact() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!fields.name.trim()) e.name = "Please enter your name.";
    if (!fields.business.trim()) e.business = "Please enter your business name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "Please enter a valid email address (like name@company.com).";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setNetworkError(false);
    try {
      const body: Record<string, string> = {
        name: fields.name,
        business: fields.business,
        email: fields.email,
      };
      if (fields.phone) body.phone = fields.phone;
      if (fields.business_type) body.business_type = fields.business_type;

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setSubmitted(true);
        setFields(emptyFields);
      } else {
        setNetworkError(true);
      }
    } catch {
      setNetworkError(true);
    } finally {
      setLoading(false);
    }
  }

  function set(key: keyof Fields, val: string) {
    setFields((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  const inputBase =
    "w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-[#B0ACB0] focus:ring-2";
  const inputNormal = `${inputBase} border-[#CEC9C8] bg-white/20 text-white focus:border-white/60 focus:ring-white/20`;
  const inputError = `${inputBase} border-red-400/70 bg-white/20 text-white focus:border-red-400 focus:ring-red-400/20`;

  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: "#5E5653" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">

          {/* Left — copy */}
          <div>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(107,124,152,0.9)" }}
            >
              Free Mockup
            </p>
            <h2 className="mb-4 text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-white">
              Ready to Get a Free Website Mockup?
            </h2>
            <p className="mb-10 text-base leading-relaxed" style={{ color: "#DEDAD9" }}>
              No cost. No strings. We build it, you decide.
            </p>

            <ul className="flex flex-col gap-4">
              {points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 text-sm font-bold"
                    style={{ color: "#6B7C98" }}
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#DEDAD9" }}>
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div
            className="rounded-xl border p-8"
            style={{ borderColor: "rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.07)" }}
            role="region"
            aria-label="Contact form"
          >
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-4">
                <span className="text-3xl">✅</span>
                <h3 className="text-xl font-bold text-white">You&apos;re all set!</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#DEDAD9" }}>
                  We&apos;ll have your free mockup ready within 3–5 business days.
                  Keep an eye on your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Get free mockup form">
                {/* Honeypot — hidden from humans, caught by Formspree spam filter */}
                <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-white/80" htmlFor="field-name">
                      Your Name
                    </label>
                    <input
                      id="field-name"
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      autoComplete="name"
                      value={fields.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={errors.name ? inputError : inputNormal}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400" role="alert">{errors.name}</p>
                    )}
                  </div>

                  {/* Business name */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-white/80" htmlFor="field-biz">
                      Business Name
                    </label>
                    <input
                      id="field-biz"
                      type="text"
                      name="business"
                      placeholder="Acme Co."
                      autoComplete="organization"
                      value={fields.business}
                      onChange={(e) => set("business", e.target.value)}
                      className={errors.business ? inputError : inputNormal}
                    />
                    {errors.business && (
                      <p className="mt-1 text-xs text-red-400" role="alert">{errors.business}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="mb-1.5 block text-xs font-semibold text-white/80" htmlFor="field-email">
                    Email Address
                  </label>
                  <input
                    id="field-email"
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    autoComplete="email"
                    value={fields.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={errors.email ? inputError : inputNormal}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400" role="alert">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="mb-1.5 block text-xs font-semibold text-white/80" htmlFor="field-phone">
                    Phone{" "}
                    <span className="font-normal opacity-50">(optional)</span>
                  </label>
                  <input
                    id="field-phone"
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                    value={fields.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className={inputNormal}
                  />
                </div>

                {/* Industry */}
                <div className="mb-6">
                  <label className="mb-1.5 block text-xs font-semibold text-white/80" htmlFor="field-type">
                    Type of Business{" "}
                    <span className="font-normal opacity-50">(optional)</span>
                  </label>
                  <select
                    id="field-type"
                    name="business_type"
                    value={fields.business_type}
                    onChange={(e) => set("business_type", e.target.value)}
                    className={`${inputNormal} cursor-pointer`}
                  >
                    <option value="">Select your industry…</option>
                    {industries.map((i) => (
                      <option key={i.value} value={i.value} className="text-foreground">
                        {i.label}
                      </option>
                    ))}
                  </select>
                </div>

                {networkError && (
                  <p className="mb-4 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300" role="alert">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#E9E6E7] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ color: "#5E5653" }}
                >
                  {loading ? "Sending…" : "Get My Free Mockup"}
                  {!loading && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>

                <p className="mt-3 text-center text-xs" style={{ color: "rgba(222,218,217,0.5)" }}>
                  We&apos;ll never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
