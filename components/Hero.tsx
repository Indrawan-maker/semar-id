"use client"
import { MoveRight, MessageCircle, Layers, Award, Zap } from 'lucide-react';


export const Hero = () => {
  return (
    <>
      <main className='grid place-items-center gap-12'>
        <div className="grid place-items-center gap-12">
          <div className='border border-[#FFFFE3] rounded-4xl p-2 text-[#FFFFE3] min-w-80 max-w-80 text-center font-semibold'>Website bantu UMKM Naik Kelas</div>
          <h2 className="font-bold text-9xl">SEMAR</h2>
          <p>Kami bantu usaha Anda terlihat lebih profesional, lebih dipercaya,
          dan lebih mudah mendapatkan pelanggan melalui website yang siap
          jualan.</p>
          <div>
            <span><Layers />Modern Tech Stack</span>
            <span><Zap />Fast Delivery</span>
            <span><Award />Quality Assurance</span>
          </div>
          <div>
            <button className="hover:cursor-pointer"><MessageCircle />Konsultasi Gratis</button>
            <button className="hover:cursor-pointer"> <MoveRight /> Lihat Portfolio</button>
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
