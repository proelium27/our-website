import Image from "next/image";
import Link from "next/link";

const anchorLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#5E5653" }} className="text-[#E9E6E7]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Logo + tagline */}
          <div>
            <Image src="/logo-icon.png" alt="Fixable" width={40} height={31} style={{ objectFit: "cover", objectPosition: "top" }} />
            <p className="mt-2 text-xl font-semibold tracking-tight text-white">fixable</p>
            <p className="mt-2 max-w-xs text-sm" style={{ color: "#AB978C" }}>
              Brand and web design that actually converts.
            </p>
          </div>

          {/* NAP — visible for local SEO */}
          <address
            className="not-italic flex flex-col gap-1.5 text-sm"
            style={{ color: "#AB978C" }}
          >
            <span>Bethesda, MD</span>
            <span>Serving DC, Maryland &amp; Virginia</span>
            <a
              href="mailto:hello@fixable.co"
              className="transition-colors hover:text-white"
              style={{ color: "#AB978C" }}
            >
              hello@fixable.co
            </a>
          </address>

          {/* Nav links */}
          <nav className="flex flex-col gap-3 md:items-end">
            {anchorLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-white"
                style={{ color: "#AB978C" }}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/privacy"
              className="text-sm transition-colors hover:text-white"
              style={{ color: "#AB978C" }}
            >
              Privacy Policy
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 border-t pt-6 text-sm"
          style={{ borderColor: "#7B7F8A", color: "#7B7F8A" }}
        >
          © 2026 Fixable. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
