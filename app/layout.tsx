import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; 
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Tenggarong, Samarinda, Balikpapan | SEMAR",
  description: "Jasa pembuatan website profesional di Tenggarong Seberang, Samarinda, dan Balikpapan. Spesialis UKM & Startup. Website modern, SEO-friendly, responsive. Pengerjaan cepat 3-7 hari kerja. Konsultasi gratis sekarang!",
  keywords: [
    "jasa pembuatan website tenggarong",
    "jasa pembuatan website tenggarong seberang",
    "jasa pembuatan website samarinda",
    "jasa pembuatan website balikpapan",
    "semar web agensi",
    "web developer tenggarong",
    "web developer samarinda",
    "web developer balikpapan",
    "jasa website kutai kartanegara",
    "pembuatan website ukm samarinda",
    "pembuatan website ukm balikpapan",
    "web design tenggarong",
    "web design balikpapan",
    "jasa web profesional kalimantan timur"
  ].join(", "),
  authors: [{ name: "SEMAR Web Agensi" }],
  creator: "SEMAR Web Agensi",
  publisher: "SEMAR Web Agensi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://semar-id.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jasa Pembuatan Website Tenggarong, Samarinda, Balikpapan | SEMAR",
    description: "Website profesional untuk UKM & Startup di Kalimantan Timur. Modern, cepat, SEO-friendly. Konsultasi gratis!",
    url: 'https://semar-id.vercel.app',
    siteName: "SEMAR Web Agensi",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'SEMAR Web Agensi - Jasa Pembuatan Website Tenggarong, Samarinda, Balikpapan',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jasa Pembuatan Website Tenggarong, Samarinda, Balikpapan | SEMAR",
    description: "Website profesional untuk UKM & Startup. Pengerjaan 3-7 hari. Konsultasi gratis!",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '76f2bdf997e7dd54', 
  },
};

// Local Business Schema untuk SEO Lokal
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SEMAR Web Agensi",
  "image": "https://semar-id.vercel.app/logo.png", 
  "description": "Jasa pembuatan website profesional di Tenggarong, Samarinda, dan Balikpapan. Spesialis website untuk UKM dan Startup Kalimantan Timur.",
  "@id": "https://semar-id.vercel.app",
  "url": "https://semar-id.vercel.app",
  "telephone": "+62-822-5312-9334",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jalan Tenggarong Seberang", 
    "addressLocality": "Tenggarong Seberang",
    "addressRegion": "Kalimantan Timur",
    "postalCode": "75519",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -0.291453, // ✅ Koordinat Anda yang benar
    "longitude": 117.119913
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.instagram.com/semarwebsoftware/", // ⚠️ GANTI dengan link real
    "https://www.tiktok.com/@semarwebsoftware", // ⚠️ GANTI dengan link real
    "https://api.whatsapp.com/send/?phone=6282253129334&text=Halo+kak+saya+mau+konsultasi+tentang&type=phone_number&app_absent=0" // Link WhatsApp
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Tenggarong"
    },
    {
      "@type": "City",
      "name": "Tenggarong Seberang"
    },
    {
      "@type": "City",
      "name": "Samarinda"
    },
    {
      "@type": "City",
      "name": "Balikpapan" 
    },
    {
      "@type": "State",
      "name": "Kutai Kartanegara"
    },
    {
      "@type": "State",
      "name": "Kalimantan Timur"
    }
  ],
  "serviceType": [
    "Jasa Pembuatan Website",
    "Web Development",
    "Web Design",
    "SEO Website"
  ]
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SEMAR Web Agensi",
  "alternateName": "SEMAR",
  "url": "https://semar-id.vercel.app",
  "logo": "https://semar-id.vercel.app/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-822-5312-9334",
    "contactType": "customer service",
    "areaServed": "ID",
    "availableLanguage": ["Indonesian"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Schema Markup untuk Local SEO */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-black 
          text-white 
          relative
        `}
      >
        {/* Glow Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-50 -left-200px w-150 h-150 bg-purple-500/30 rounded-full blur-[160px]" />
          <div className="absolute top-50 -right-50 w-150 h-150 bg-cyan-400/20 rounded-full blur-[160px]" />
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-indigo-500/10 rounded-full blur-[180px]" />
        </div>
        <SmoothScroll />
        <WhatsAppButton />

        {children}
      </body>
    </html>
  );
}