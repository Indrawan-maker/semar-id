import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; 
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEMAR",
  description: "bantu buat sistem kamu",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
