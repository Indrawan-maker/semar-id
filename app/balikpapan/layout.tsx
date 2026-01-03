import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Balikpapan Terpercaya | SEMAR Web Agensi",
  description: "Jasa pembuatan website profesional di Balikpapan, Kalimantan Timur. Website modern untuk UKM & Startup. Pengerjaan cepat 3-7 hari kerja. SEO-friendly, responsive, harga terjangkau. Konsultasi gratis sekarang!",
  keywords: [
    "jasa pembuatan website balikpapan",
    "web developer balikpapan",
    "jasa website balikpapan",
    "pembuatan website ukm balikpapan",
    "web design balikpapan",
    "jasa web profesional balikpapan",
    "website company profile balikpapan",
    "toko online balikpapan",
    "landing page balikpapan",
    "semar web agensi"
  ].join(", "),
  authors: [{ name: "SEMAR Web Agensi" }],
  creator: "SEMAR Web Agensi",
  publisher: "SEMAR Web Agensi",
  openGraph: {
    title: "Jasa Pembuatan Website Balikpapan Terpercaya | SEMAR",
    description: "Website modern untuk bisnis di Balikpapan. Pengerjaan cepat 3-7 hari. Konsultasi gratis!",
    url: "https://semar-id.vercel.app/balikpapan",
    siteName: "SEMAR Web Agensi",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "/balikpapan",
  },
};

// Local Business Schema khusus Balikpapan
const balikpapanSchema = {
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
    "name": "Balikpapan",
    "addressRegion": "Kalimantan Timur",
    "addressCountry": "ID"
  },
  "description": "Jasa pembuatan website profesional di Balikpapan untuk UKM dan Startup. Website modern, SEO-friendly, pengerjaan cepat.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "IDR",
    "lowPrice": "1500000",
    "highPrice": "6000000",
    "priceRange": "Rp 1.5 juta - Rp 6 juta"
  }
};

export default function BalikpapanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="balikpapan-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(balikpapanSchema),
        }}
      />
      <Nav />
      {children}
      <Footer />
    </>
  );
}