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
  title: "Jasa Pembuatan Website Tenggarong Seberang | SEMAR Web Agensi",
  description: "Jasa pembuatan website profesional di Tenggarong & Tenggarong Seberang, Kutai Kartanegara. Spesialis UKM & Startup. Website modern, SEO-friendly, responsive. Pengerjaan cepat 3-7 hari kerja. Konsultasi gratis sekarang!",
  keywords: [
    "jasa pembuatan website tenggarong",
    "jasa pembuatan website tenggarong seberang",
    "semar web agensi",
    "web developer tenggarong",
    "jasa website kutai kartanegara",
    "pembuatan website ukm tenggarong",
    "web design tenggarong",
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
  metadataBase: new URL('https://www.semarwebagensi.com'), // Ganti dengan URL Anda
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jasa Pembuatan Website Tenggarong Seberang | SEMAR Web Agensi",
    description: "Website profesional untuk UKM & Startup di Tenggarong. Modern, cepat, SEO-friendly. Konsultasi gratis!",
    url: 'https://www.semarwebagensi.com',
    siteName: "SEMAR Web Agensi",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: '/og-image.jpg', // Buat image ini 1200x630px
        width: 1200,
        height: 630,
        alt: 'SEMAR Web Agensi - Jasa Pembuatan Website Tenggarong',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jasa Pembuatan Website Tenggarong | SEMAR Web Agensi",
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
    google: 'your-google-verification-code', // Dari Google Search Console
  },
};

// Local Business Schema untuk SEO Lokal
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SEMAR Web Agensi",
  "image": "https://www.semarwebagensi.com/logo.png",
  "description": "Jasa pembuatan website profesional di Tenggarong dan Tenggarong Seberang. Spesialis website untuk UKM dan Startup.",
  "@id": "https://www.semarwebagensi.com",
  "url": "https://www.semarwebagensi.com",
  "telephone": "+62-xxx-xxxx-xxxx", // Ganti dengan nomor Anda
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jalan Nama Jalan No. XX", // Ganti dengan alamat lengkap
    "addressLocality": "Tenggarong Seberang",
    "addressRegion": "Kalimantan Timur",
    "postalCode": "75519",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -0.4056, // Ganti dengan koordinat Anda
    "longitude": 117.0164
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
    "https://www.facebook.com/yourpage", // Ganti dengan social media Anda
    "https://www.instagram.com/yourpage",
    "https://www.linkedin.com/company/yourcompany"
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
      "@type": "State",
      "name": "Kutai Kartanegara"
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
  "url": "https://www.semarwebagensi.com",
  "logo": "https://www.semarwebagensi.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-xxx-xxxx-xxxx",
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