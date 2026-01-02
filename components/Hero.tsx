"use client";
import { ArrowRight, MessageCircle, Layers, Award, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <main className="grid place-items-center gap-12 mt-34">
        <div className="grid place-items-center gap-2">
          <div className="border border-[#A374FF] rounded-4xl p-2 text-[#A374FF] min-w-60 max-w-60 text-center font-semibold">
            Menuju Level Berikutnya
          </div>
          <h2 className="font-bold text-9xl text-[#FFFFE3]">SEMAR</h2>
          <p className="font-bold text-5xl text-[#FFD074] flex flex-wrap">
            Jasa Pembuatan Website Bisnis Profesional
          </p>
          <p className="font-normal text-xl text-center text-[#FFFFE3] mt-8">
            #1 untuk UKM & Startup Kami bantu bisnis lokal muncul di Google &
            terlihat profesional <br /> dikerjakan langsung tanpa perantara.
            <span className="text-[#17F1D1]">
              {" "}
              Tingkatkan kredibilitas bisnis Anda dalam 3-7 hari kerja!
            </span>
          </p>
          <div className="flex justify-center items-center gap-6 mt-22">
            <span className="flex justify-center items-center gap-2 border border-[#FFFFE3] rounded-4xl p-2 text-[#FFFFE3] min-w-52 max-w-52 font-semibold">
              <Layers />
              Modern Tech Stack
            </span>
            <span className="flex justify-center items-center gap-2 border border-[#FFD074] rounded-4xl p-2 text-[#FFD074] min-w-40 max-w-40  font-semibold">
              <Zap />
              Fast Delivery
            </span>
            <span className="flex justify-center items-center gap-2 border border-[#FFFFE3] rounded-4xl p-2 text-[#FFFFE3] min-w-52 max-w-52 font-semibold">
              <Award />
              Quality Assurance
            </span>
          </div>
          <div className="flex gap-4 mt-18">
            <button className="hover:cursor-pointer flex justify-center items-center gap-4 border border-[#FFFFE3] hover:border-2 hover:border-[#17F1D1] rounded-full p-2 text-[#FFFFE3] min-w-62 max-w-62 font-semibold">
              <MessageCircle />
              Konsultasi Gratis
            </button>
            <button className="hover:cursor-pointer flex justify-center items-center gap-4 border border-[#FFFFE3] hover:border-2 hover:border-[#A374FF] rounded-full p-2 text-[#FFFFE3] min-h-18 max-h-18 min-w-62 max-w-62 font-semibold transition-all duration-500 ease-in-out hover:scale-105">
              <ArrowRight />
              Lihat Portfolio
            </button>
          </div>
        </div>
        <p>📍 SAMARINDA, INDONESIA</p>
        {/* Mouse Scroll Indicator */}
        <div
          className="w-6 h-10 border-2 border-white rounded-full relative"
          style={{
            animation: "mouse-body-bounce 1.8s ease-in-out infinite",
          }}
        >
          <span
            className="w-1 h-2 bg-white absolute left-1/2 top-2 rounded-full"
            style={{
              animation: "mouse-scroll 1.8s ease-in-out infinite",
              transform: "translateX(-50%)",
            }}
          ></span>
        </div>
      </main>
    </>
  );
};
