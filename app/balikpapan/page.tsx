"use client";
import { ArrowRight, MessageCircle, Layers, Award, Zap, CheckCircle, TrendingUp, Users, Globe } from "lucide-react";
import Link from "next/link";

export default function BalikpapanPage() {
  return (
    <>
      {/* Hero Section */}
      <main className="grid place-items-center gap-12 mt-34">
        <div className="grid place-items-center gap-2">
          <div className="border border-[#A374FF] rounded-4xl p-2 text-[#A374FF] min-w-60 max-w-60 text-center font-semibold">
            Spesialis Website Balikpapan
          </div>
          
          <h1 className="font-bold text-5xl md:text-8xl text-[#FFFFE3] text-center">
            Jasa Pembuatan Website Balikpapan
          </h1>
          
          <p className="font-bold text-2xl md:text-4xl text-[#FFD074] max-w-80 min-w-80 md:max-w-180 md:min-w-180 text-center mt-4">
            Website Profesional untuk Bisnis di Kota Minyak
          </p>
          
          <p className="flex flex-wrap font-normal text-sm md:text-xl text-center max-w-80 min-w-80 md:max-w-180 md:min-w-180 text-[#FFFFE3] mt-4 md:mt-8">
            Jasa pembuatan website profesional di <strong>Balikpapan</strong>, Kalimantan Timur. 
            Spesialis website untuk UKM & Startup di kota industri terbesar Kaltim. Kami bantu bisnis lokal Anda muncul di Google & terlihat profesional. 
            Dikerjakan langsung oleh tim berpengalaman <strong>SEMAR Web Agensi</strong>.
          </p>
          
          <span className="text-[#17F1D1] font-normal text-sm md:text-xl text-center">
            Tingkatkan kredibilitas bisnis Anda di Balikpapan dalam 3-7 hari kerja!
          </span>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mt-22 sm:max-w-100 sm:min-w-100 md:min-w-180 md:max-w-180">
            <span className="flex justify-center items-center gap-2 border border-[#FFFFE3] rounded-4xl p-2 text-[#FFFFE3] min-w-52 max-w-52 font-semibold">
              <Layers />
              Modern Tech Stack
            </span>
            <span className="flex justify-center items-center gap-2 border border-[#FFD074] rounded-4xl p-2 text-[#FFD074] min-w-40 max-w-40 font-semibold">
              <Zap />
              Fast Delivery
            </span>
            <span className="flex justify-center items-center gap-2 border border-[#FFFFE3] rounded-4xl p-2 text-[#FFFFE3] min-w-52 max-w-52 font-semibold">
              <Award />
              Quality Assurance
            </span>
          </div>
          
          <div className="grid md:flex gap-8 md:gap-4 mt-22 md:mt-18">
            <a
              href="https://wa.me/6282253129334?text=Halo%20SEMAR,%20saya%20dari%20Balikpapan%20tertarik%20dengan%20jasa%20pembuatan%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer flex justify-center items-center gap-4 border border-[#FFFFE3] hover:border-2 hover:border-[#17F1D1] rounded-full p-2 text-[#FFFFE3] min-h-18 max-h-18 min-w-62 max-w-62 font-semibold"
            >
              <MessageCircle />
              Konsultasi Gratis
            </a>
            <Link
              href="/#portfolio"
              className="hover:cursor-pointer flex justify-center items-center gap-4 border border-[#FFFFE3] hover:border-2 hover:border-[#A374FF] rounded-full p-2 text-[#FFFFE3] min-h-18 max-h-18 min-w-62 max-w-62 font-semibold transition-all duration-500 ease-in-out hover:scale-105"
            >
              <ArrowRight />
              Lihat Portfolio
            </Link>
          </div>
        </div>
        
        <p className="text-[#17F1D1] font-semibold text-lg">
          📍 MELAYANI WILAYAH BALIKPAPAN & SEKITARNYA
        </p>
      </main>

      {/* Kenapa Butuh Website Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#FFD074] mb-6">
            Kenapa Bisnis di Balikpapan Butuh Website?
          </h2>
          <p className="text-xl text-[#FFFFE3] max-w-3xl mx-auto">
            Balikpapan sebagai kota industri dan pusat ekonomi Kalimantan Timur memiliki peluang bisnis yang sangat besar. 
            Website profesional membuka pintu kesuksesan lebih lebar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border border-[#A374FF] rounded-2xl p-8 hover:border-[#17F1D1] transition-all">
            <div className="w-16 h-16 rounded-full bg-[#17F1D1]/20 flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-[#17F1D1]" />
            </div>
            <h3 className="text-2xl font-bold text-[#FFD074] mb-4">
              Tingkatkan Brand Value
            </h3>
            <p className="text-[#FFFFE3]">
              Di Balikpapan yang penuh kompetisi, website profesional membuat brand Anda 
              terlihat lebih kredibel dan terpercaya.
            </p>
          </div>

          <div className="border border-[#A374FF] rounded-2xl p-8 hover:border-[#17F1D1] transition-all">
            <div className="w-16 h-16 rounded-full bg-[#FFD074]/20 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-[#FFD074]" />
            </div>
            <h3 className="text-2xl font-bold text-[#FFD074] mb-4">
              Dominasi Google Lokal
            </h3>
            <p className="text-[#FFFFE3]">
              Ketika orang search &quot;jasa X Balikpapan&quot;, bisnis Anda yang muncul di halaman pertama Google.
            </p>
          </div>

          <div className="border border-[#A374FF] rounded-2xl p-8 hover:border-[#17F1D1] transition-all">
            <div className="w-16 h-16 rounded-full bg-[#A374FF]/20 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-[#A374FF]" />
            </div>
            <h3 className="text-2xl font-bold text-[#FFD074] mb-4">
              Expand Market
            </h3>
            <p className="text-[#FFFFE3]">
              Tidak terbatas pada customer walk-in. Website membuka akses ke seluruh Balikpapan dan sekitarnya.
            </p>
          </div>

          <div className="border border-[#A374FF] rounded-2xl p-8 hover:border-[#17F1D1] transition-all">
            <div className="w-16 h-16 rounded-full bg-[#17F1D1]/20 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-[#17F1D1]" />
            </div>
            <h3 className="text-2xl font-bold text-[#FFD074] mb-4">
              Unggul dari Kompetitor
            </h3>
            <p className="text-[#FFFFE3]">
              Banyak bisnis di Balikpapan masih andalkan sosmed saja. 
              Website membuat Anda selangkah lebih maju!
            </p>
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#FFD074] mb-6">
            Layanan Website di Balikpapan
          </h2>
          <p className="text-xl text-[#FFFFE3] max-w-3xl mx-auto">
            Solusi website profesional untuk berbagai jenis bisnis di Balikpapan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-2 border-[#A374FF] rounded-3xl p-8 hover:border-[#17F1D1] transition-all">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-[#FFD074] mb-2">
                  Company Profile
                </h3>
                <p className="text-[#FFFFE3]">Website profil perusahaan profesional</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#17F1D1]">Mulai dari</p>
                <p className="text-3xl font-bold text-[#FFD074]">2.5JT</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Design modern & responsive</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">5-7 halaman konten</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">SEO-friendly untuk Google</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Gratis domain & hosting 1 tahun</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">WhatsApp integration</span>
              </li>
            </ul>
            <p className="text-sm text-[#FFD074] font-semibold">
              ⚡ Cocok untuk: Perusahaan, Kontraktor, Konsultan, Jasa
            </p>
          </div>

          <div className="border-2 border-[#17F1D1] rounded-3xl p-8 hover:border-[#FFD074] transition-all relative">
            <div className="absolute -top-4 right-8 bg-[#17F1D1] text-black px-4 py-1 rounded-full text-sm font-bold">
              TERLARIS
            </div>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-[#FFD074] mb-2">
                  Toko Online
                </h3>
                <p className="text-[#FFFFE3]">Website e-commerce lengkap</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#17F1D1]">Mulai dari</p>
                <p className="text-3xl font-bold text-[#FFD074]">4JT</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Katalog produk unlimited</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Keranjang belanja & checkout</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Payment gateway (transfer bank)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Manajemen order & stok</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Dashboard admin lengkap</span>
              </li>
            </ul>
            <p className="text-sm text-[#FFD074] font-semibold">
              🛍️ Cocok untuk: Toko, Fashion, F&B, Elektronik
            </p>
          </div>

          <div className="border-2 border-[#A374FF] rounded-3xl p-8 hover:border-[#17F1D1] transition-all">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-[#FFD074] mb-2">
                  Landing Page
                </h3>
                <p className="text-[#FFFFE3]">Halaman promosi single page</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#17F1D1]">Mulai dari</p>
                <p className="text-3xl font-bold text-[#FFD074]">1.5JT</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Design fokus konversi</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">1 halaman optimized</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Form capture leads</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Fast loading speed</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Mobile-first design</span>
              </li>
            </ul>
            <p className="text-sm text-[#FFD074] font-semibold">
              🎯 Cocok untuk: Promosi, Event, Pre-launch, Campaign
            </p>
          </div>

          <div className="border-2 border-[#A374FF] rounded-3xl p-8 hover:border-[#17F1D1] transition-all">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-[#FFD074] mb-2">
                  Website Custom
                </h3>
                <p className="text-[#FFFFE3]">Sesuai kebutuhan spesifik Anda</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#17F1D1]">Mulai dari</p>
                <p className="text-3xl font-bold text-[#FFD074]">6JT</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Fitur sesuai request</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Database kompleks</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">API integration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">User management system</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#17F1D1] mt-1 shrink-0" />
                <span className="text-[#FFFFE3]">Advanced dashboard</span>
              </li>
            </ul>
            <p className="text-sm text-[#FFD074] font-semibold">
              ⚙️ Cocok untuk: Aplikasi Web, Portal, Sistem Internal
            </p>
          </div>
        </div>
      </section>

      {/* Keunggulan SEMAR */}
      <section className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="bg-linear-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl p-12 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-[#FFD074] mb-6">
              Kenapa Pilih SEMAR di Balikpapan?
            </h2>
            <p className="text-xl text-[#FFFFE3]">
              Partner terpercaya untuk transformasi digital bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#17F1D1]/20 flex items-center justify-center mb-4">
                <Zap className="w-10 h-10 text-[#17F1D1]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFD074] mb-3">Fast Delivery</h3>
              <p className="text-[#FFFFE3]">
                Website selesai dalam 3-7 hari kerja. Tidak perlu menunggu berbulan-bulan.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#FFD074]/20 flex items-center justify-center mb-4">
                <Award className="w-10 h-10 text-[#FFD074]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFD074] mb-3">Quality Assured</h3>
              <p className="text-[#FFFFE3]">
                Kualitas terjamin dengan testing menyeluruh sebelum launch.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#A374FF]/20 flex items-center justify-center mb-4">
                <Globe className="w-10 h-10 text-[#A374FF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFD074] mb-3">SEO Ready</h3>
              <p className="text-[#FFFFE3]">
                Website langsung optimized untuk muncul di pencarian Google Balikpapan.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#17F1D1]/20 flex items-center justify-center mb-4">
                <Users className="w-10 h-10 text-[#17F1D1]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFD074] mb-3">Tim Berpengalaman</h3>
              <p className="text-[#FFFFE3]">
                Dikerjakan langsung oleh developer profesional, bukan template asal jadi.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#FFD074]/20 flex items-center justify-center mb-4">
                <MessageCircle className="w-10 h-10 text-[#FFD074]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFD074] mb-3">Support Penuh</h3>
              <p className="text-[#FFFFE3]">
                Konsultasi gratis sebelum project & maintenance support setelah launch.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#A374FF]/20 flex items-center justify-center mb-4">
                <Layers className="w-10 h-10 text-[#A374FF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFD074] mb-3">Modern Tech</h3>
              <p className="text-[#FFFFE3]">
                Menggunakan teknologi terkini: Next.js, React, Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 py-24 md:py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-[#FFD074] mb-6">
          Siap Tingkatkan Bisnis Anda di Balikpapan?
        </h2>
        <p className="text-xl md:text-2xl text-[#FFFFE3] mb-12 max-w-3xl mx-auto">
          Konsultasi gratis sekarang! Diskusikan kebutuhan website bisnis Anda dengan tim SEMAR.
        </p>
        
        <div className="grid md:flex gap-8 md:gap-4 justify-center">
          <a
            href="https://wa.me/6282253129334?text=Halo%20SEMAR,%20saya%20dari%20Balikpapan%20mau%20konsultasi%20tentang%20pembuatan%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer flex justify-center items-center gap-4 bg-[#17F1D1] hover:bg-[#FFD074] rounded-full p-4 text-black min-h-18 max-h-18 min-w-72 max-w-72 font-bold text-lg transition-all duration-300 hover:scale-105 mx-auto"
          >
            <MessageCircle />
            Konsultasi Gratis via WhatsApp
          </a>
          <Link
            href="/#paket-harga"
            className="hover:cursor-pointer flex justify-center items-center gap-4 border-2 border-[#17F1D1] hover:border-[#FFD074] rounded-full p-4 text-[#17F1D1] hover:text-[#FFD074] min-h-18 max-h-18 min-w-72 max-w-72 font-bold text-lg transition-all duration-300 mx-auto"
          >
            <ArrowRight />
            Lihat Paket Harga Lengkap
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-[#A374FF]/30">
          <p className="text-[#17F1D1] font-semibold text-lg mb-2">
            📍 Melayani Seluruh Wilayah Balikpapan
          </p>
          <p className="text-sm text-[#FFFFE3]/70">
            Balikpapan Timur, Balikpapan Barat, Balikpapan Utara, Balikpapan Selatan, 
            Balikpapan Tengah, Balikpapan Kota, dan sekitarnya
          </p>
          <p className="text-sm text-[#FFFFE3]/70 mt-4">
            SEMAR Web Agensi - Jasa Pembuatan Website Profesional Kalimantan Timur
          </p>
        </div>
      </section>
    </>
  );
}