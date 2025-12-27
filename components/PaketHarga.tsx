import { MessageCircle, CircleCheckBig } from "lucide-react";

export const PaketHarga = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-center gap-12 mt-36">
        <div className="text-[#FFFFE3] text-5xl tracking-widest min-w-180 max-w-180 text-center font-semibold">
          PAKET LAYANAN KAMI
        </div>
        <p className="text-[#c1b08f] text-xl tracking-wider min-w-160 max-w-160 text-center font-normal -mt-6">
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda
        </p>
      </header>
      <main className="flex w-full mt-22">
        <section className="mx-auto grid px-12 min-w-94 max-w-94 border border-slate-600 transition-all duration-500 ease-in-out hover:scale-102 hover:border-[#A374FF] rounded-4xl min-h-120 max-h-120">
          <div className="flex flex-col items-center justify-start gap-1 leading-tight mt-8">
            <h4
              className="m-0
            text-3xl font-bold"
            >
              Paket Starter
            </h4>
            <h4
              className="m-0
            text-4xl font-bold"
            >
              Rp 1.500.000
            </h4>
            <p className="m-0 text-zinc-400">Pengerjaan 3-5 hari</p>
          </div>
          <div className="grid justify-start items-center">
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              Landing Page Profesional
            </p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              Mobile Responsive
            </p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              Domain + Hosting 1 tahun
            </p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              WhatsApp Integration
            </p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              Basic SEO Setup
            </p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              1x Revisi Desain
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="hover:cursor-pointer flex justify-center items-center gap-4 border border-[#FFFFE3] hover:border-[#A374FF] rounded-full p-2 text-[#FFFFE3] min-w-52 max-w-52 font-semibold">
              <MessageCircle />
              Pilih Paket
            </button>
          </div>
        </section>
        {/* card 2*/}
        <div className="relative">
          <section className="mx-auto grid px-12 min-w-94 max-w-94 border transition-all duration-500 ease-in-out scale-102 border-[#A374FF] bg-[#A374FF]/12  rounded-4xl min-h-120 max-h-120">
            <div className="flex flex-col items-center justify-start gap-1 leading-tight mt-8">
              <h4
                className="m-0
            text-3xl font-bold"
              >
                Paket Business
              </h4>
              <h4
                className="m-0
            text-4xl font-bold"
              >
                Rp 3.500.000
              </h4>
              <p className="m-0 text-zinc-400">Pengerjaan 5-7 hari</p>
            </div>
            <div className="grid justify-start items-center">
              <p className="flex items-center font-light text-sm gap-3 tracking-wider">
                <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
                Company Profile Lengkap
              </p>
              <p className="flex items-center font-light text-sm gap-3 tracking-wider">
                <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
                5-7 Halaman
              </p>
              <p className="flex items-center font-light text-sm gap-3 tracking-wider">
                <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
                Content Management System
              </p>
              <p className="flex items-center font-light text-sm gap-3 tracking-wider">
                <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
                Gallery/Portfolio
              </p>
              <p className="flex items-center font-light text-sm gap-3 tracking-wider">
                <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
                Contact Forms
              </p>
              <p className="flex items-center font-light text-sm gap-3 tracking-wider">
                <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
                Social Media Integration
              </p>
              <p className="flex items-center font-light text-sm gap-3 tracking-wider">
                <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
                2x Revisi Desain
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="hover:cursor-pointer flex justify-center items-center gap-4 hover:border-[#A374FF] rounded-full p-2 text-[#FFFFE3] min-w-52 max-w-52 font-semibold shadow-[0_8px_24px_rgba(163,116,255,0.5)] hover:shadow-[0_12px_32px_rgba(163,116,255,0.7)] transition-all duration-30 bg-linear-to-r from-[#945fff] to-[#742eff]">
                <MessageCircle />
                Pilih Paket
              </button>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-linear-to-r from-[#945fff] to-[#742eff] px-4 py-1 rounded-full text-white font-semibold text-sm shadow-lg">
              Paling Populer!
            </div>
          </section>
        </div>
        {/* card 3 */}
        <section className="mx-auto grid px-12 min-w-94 max-w-94 border border-slate-600 transition-all duration-500 ease-in-out hover:scale-102 hover:border-[#A374FF] rounded-4xl min-h-120 max-h-120">
          <div className="flex flex-col items-center justify-start gap-1 leading-tight mt-8">
            <h4
              className="m-0
            text-3xl font-bold"
            >
              Paket Enterprise
            </h4>
            <h4
              className="m-0
            text-4xl font-bold"
            >
              Rp 6.500.000
            </h4>
            <p className="m-0 text-zinc-400">Pengerjaan 7-14 hari</p>
          </div>
          <div className="grid justify-start items-center">
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              E-commerce Ready
            </p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              10+ Halaman Custom
            </p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              Admin Dashboard
            </p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              Payment Gateway Integration
            </p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              Advanced SEO
            </p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              Blog System
            </p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider">
              <CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />
              3x Revisi Desain
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="hover:cursor-pointer flex justify-center items-center gap-4 border border-[#FFFFE3] hover:border-[#A374FF] rounded-full p-2 text-[#FFFFE3] min-w-52 max-w-52 font-semibold">
              <MessageCircle />
              Pilih Paket
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
