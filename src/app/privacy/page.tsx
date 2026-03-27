import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Fixable",
  description: "How Fixable collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-sm transition-colors hover:text-[#6B7C98]"
        style={{ color: "#7B7F8A" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to home
      </Link>

      <h1
        className="mb-2 [font-family:var(--font-display)] text-4xl font-bold tracking-tight"
        style={{ color: "#5E5653" }}
      >
        Privacy Policy
      </h1>
      <p className="mb-12 text-sm" style={{ color: "#7B7F8A" }}>
        Last updated: March 26, 2026
      </p>

      <div className="flex flex-col gap-10 text-sm leading-relaxed" style={{ color: "#5E5653" }}>

        <section>
          <h2 className="mb-3 [font-family:var(--font-display)] text-xl font-semibold tracking-tight">
            What We Collect
          </h2>
          <p className="mb-3" style={{ color: "#7B7F8A" }}>
            When you submit our free mockup request form, we collect:
          </p>
          <ul className="flex flex-col gap-2 pl-4" style={{ color: "#7B7F8A" }}>
            <li className="list-disc">Your name</li>
            <li className="list-disc">Your email address</li>
            <li className="list-disc">Your business name</li>
            <li className="list-disc">Your phone number (optional)</li>
            <li className="list-disc">Your business type (optional)</li>
          </ul>
          <p className="mt-3" style={{ color: "#7B7F8A" }}>
            We also use Vercel Speed Insights on this site, which collects anonymous, aggregated
            performance data (page load times, device type). It does not use cookies and does not
            collect any personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="mb-3 [font-family:var(--font-display)] text-xl font-semibold tracking-tight">
            How We Use It
          </h2>
          <ul className="flex flex-col gap-2 pl-4" style={{ color: "#7B7F8A" }}>
            <li className="list-disc">To prepare and deliver your free website mockup</li>
            <li className="list-disc">To respond to your inquiry about our services</li>
            <li className="list-disc">To follow up about your project if you&apos;ve expressed interest</li>
          </ul>
          <p className="mt-3" style={{ color: "#7B7F8A" }}>
            We do not sell, rent, or share your personal information with third parties for
            marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="mb-3 [font-family:var(--font-display)] text-xl font-semibold tracking-tight">
            Third-Party Services
          </h2>
          <div className="flex flex-col gap-4" style={{ color: "#7B7F8A" }}>
            <div>
              <p className="font-medium" style={{ color: "#5E5653" }}>Formspree</p>
              <p>
                Our contact form is processed by Formspree, which receives and forwards your form
                submission to us. Formspree stores submissions on their servers. You can review
                their privacy policy at formspree.io.
              </p>
            </div>
            <div>
              <p className="font-medium" style={{ color: "#5E5653" }}>Vercel Speed Insights</p>
              <p>
                This site uses Vercel Speed Insights to measure page performance. All data
                collected is anonymous and aggregated — no cookies are set and no personal data
                is collected. You can review Vercel&apos;s privacy policy at vercel.com/legal/privacy-policy.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 [font-family:var(--font-display)] text-xl font-semibold tracking-tight">
            Data Retention
          </h2>
          <p style={{ color: "#7B7F8A" }}>
            We retain your information only as long as necessary to deliver your mockup and follow
            up on your inquiry. If you become a client, we retain project-related information for
            the duration of our working relationship. You may request deletion at any time.
          </p>
        </section>

        <section>
          <h2 className="mb-3 [font-family:var(--font-display)] text-xl font-semibold tracking-tight">
            Your Rights
          </h2>
          <p style={{ color: "#7B7F8A" }}>
            You may request access to, correction of, or deletion of your personal information at
            any time by emailing us at{" "}
            <a
              href="mailto:hello@fixable.co"
              className="underline transition-colors hover:text-[#6B7C98]"
              style={{ color: "#5E5653" }}
            >
              hello@fixable.co
            </a>
            . We will respond within a reasonable timeframe.
          </p>
        </section>

        <section>
          <h2 className="mb-3 [font-family:var(--font-display)] text-xl font-semibold tracking-tight">
            Contact
          </h2>
          <p style={{ color: "#7B7F8A" }}>
            Questions about this policy? Reach us at{" "}
            <a
              href="mailto:hello@fixable.co"
              className="underline transition-colors hover:text-[#6B7C98]"
              style={{ color: "#5E5653" }}
            >
              hello@fixable.co
            </a>
            .
          </p>
        </section>

      </div>
    </main>
  );
}
