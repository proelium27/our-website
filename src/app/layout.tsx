import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteUrl = "https://fixable.co";
const siteTitle = "Fixable — Web Design for Local Businesses in the DMV";
const siteDescription =
  "Fixable builds fast, modern websites for local businesses in DC, Maryland, and Virginia. Sites that load in under a second, rank on Google, and turn visitors into paying clients.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Fixable",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Fixable",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-icon.png`,
      },
      description:
        "Fixable builds fast, modern websites for local businesses in the DMV — DC, Maryland, and Virginia. Unlike WordPress agencies, our Vercel-deployed sites load in under a second, rank higher on Google, and don't get hacked.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bethesda",
        addressRegion: "MD",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Washington DC" },
        { "@type": "State", name: "Maryland" },
        { "@type": "State", name: "Virginia" },
      ],
      priceRange: "$$",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@fixable.co",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Fixable",
      url: siteUrl,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service-web-design`,
      name: "Website Design for Local Businesses",
      description:
        "Custom-built websites that look sharp on every device. Clean layouts, fast load times, and a visual identity your clients will trust — deployed on Vercel so your site loads fast enough to rank higher on Google.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: ["Washington DC", "Maryland", "Virginia"],
      serviceType: "Web Design",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "699",
        highPrice: "2499",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service-seo`,
      name: "SEO & Google Visibility for Local Businesses",
      description:
        "Rank where your customers are searching. We optimize every page for search, set up your Google Business Profile, and build the technical foundation that gets you higher in Google Maps results.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: ["Washington DC", "Maryland", "Virginia"],
      serviceType: "Local SEO",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service-maintenance`,
      name: "Website Maintenance & Ongoing Support",
      description:
        "Monthly performance reports, security monitoring, content updates, and a guaranteed response SLA — so you can focus on running your business.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: ["Washington DC", "Maryland", "Virginia"],
      serviceType: "Website Maintenance",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "99",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "99",
          priceCurrency: "USD",
          unitText: "month",
        },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
