import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fixable — Web Design for Local Businesses",
  description:
    "Fixable builds fast, modern websites for local businesses in the Pacific Northwest. Sites that load fast, rank on Google, and turn visitors into paying clients.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Fixable",
  url: "https://fixable.co",
  description:
    "Fixable builds fast, modern websites for local businesses. Unlike WordPress agencies, our Vercel-deployed sites load in under a second, rank higher on Google, and don't get hacked.",
  areaServed: "Pacific Northwest",
  serviceType: ["Web Design", "Local SEO", "Website Maintenance"],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
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
        <SpeedInsights />
      </body>
    </html>
  );
}
