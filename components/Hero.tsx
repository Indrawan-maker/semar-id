"use client";
import { MoveRight, MessageCircle, Layers, Award, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <main className="grid place-items-center gap-12 mt-18">
        <div className="grid place-items-center gap-2">
          <div className="border border-[#A374FF] rounded-4xl p-2 text-[#A374FF] min-w-60 max-w-60 text-center font-semibold">
            Menuju Level Berikutnya
          </div>
          <h2 className="font-bold text-9xl text-[#FFFFE3]">SEMAR</h2>
          <p className="font-bold text-6xl text-[#FFD074]">Studio Web & Digital</p>
          <p className="font-semibold text-xl text-center text-[#17F1D1]">Website yang dibangun untuk mengembangkan bisnismu</p>
          <div className="flex justify-center items-center gap-12">
            <span>
              <Layers />
              Modern Tech Stack
            </span>
            <span>
              <Zap />
              Fast Delivery
            </span>
            <span>
              <Award />
              Quality Assurance
            </span>
          </div>
          <div>
            <button className="hover:cursor-pointer">
              <MessageCircle />
              Konsultasi Gratis
            </button>
            <button className="hover:cursor-pointer">
              {" "}
              <MoveRight /> Lihat Portfolio
            </button>
          </div>
        </div>
        <p>📍 SAMARINDA, INDONESIA</p>
        <div className="w-5.5 h-9.5 border-2 border-white rounded-full relative">
          <span className="w-1 h-2 bg-white absolute left-1/2 top-2 -translate-x-1/2 rounded-full mouse-bounce"></span>
        </div>
      </main>
    </>
  );
};
