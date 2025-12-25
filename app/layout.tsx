import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; 

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
    <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[160px]" />
    <div className="absolute top-[200px] right-[-200px] w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[160px]" />
    <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[180px]" />
  </div>
  <SmoothScroll />

  {children}
</body>


    </html>
  );
}
