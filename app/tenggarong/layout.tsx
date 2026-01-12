import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Samarinda Profesional | SEMAR Web Agensi",
  description: "Jasa pembuatan website profesional di Samarinda, Kalimantan Timur. Website modern untuk UKM & Startup. Pengerjaan cepat 3-7 hari kerja. SEO-friendly, responsive, harga terjangkau. Konsultasi gratis sekarang!",
  keywords: [
    "jasa pembuatan website samarinda",
    "web developer samarinda",
    "jasa website samarinda",
    "pembuatan website ukm samarinda",
    "web design samarinda",
    "jasa web profesional samarinda",
    "website company profile samarinda",
    "toko online samarinda",
    "landing page samarinda",
    "semar web agensi"
  ].join(", "),
  authors: [{ name: "SEMAR Web Agensi" }],
  creator: "SEMAR Web Agensi",
  publisher: "SEMAR Web Agensi",
  openGraph: {
    title: "Jasa Pembuatan Website Samarinda Profesional | SEMAR",
    description: "Website modern untuk bisnis di Samarinda. Pengerjaan cepat 3-7 hari. Konsultasi gratis!",
    url: "https://semar-id.vercel.app/samarinda",
    siteName: "SEMAR Web Agensi",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "/samarinda",
  },
};

// Local Business Schema khusus Samarinda
const samarindaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Jasa Pembuatan Website",
  "provider": {
    "@type": "LocalBusiness",
    "name": "SEMAR Web Agensi",
    "url": "https://semar-id.vercel.app"
  },
  "areaServed": {
    "@type": "City",
    "name": "Samarinda",
    "addressRegion": "Kalimantan Timur",
    "addressCountry": "ID"
  },
  "description": "Jasa pembuatan website profesional di Samarinda untuk UKM dan Startup. Website modern, SEO-friendly, pengerjaan cepat.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "IDR",
    "lowPrice": "1500000",
    "highPrice": "6000000",
    "priceRange": "Rp 1.5 juta - Rp 6 juta"
  }
};

export default function SamarindaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="samarinda-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(samarindaSchema),
        }}
      />
      <Nav />
      {children}
      <Footer />
    </>
  );
}