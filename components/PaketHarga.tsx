import { MessageCircle, CircleCheckBig } from "lucide-react";

export const PaketHarga = () => {
  return (
    <>
      <main className="flex w-full mt-22">
        <section className="grid px-12 min-w-94 max-w-94 border border-slate-600 rounded-2xl min-h-120 max-h-120">
          <div className="grid justify-center items-center">
            <h4>Paket Starter</h4>
            <h4>Rp 1.500.000</h4>
            <p>Pengerjaan 3-5 hari</p>
          </div>
          <div className="grid justify-start items-center">
            <p className="flex items-center font-light text-sm gap-3 tracking-wider"><CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />Landing Page Profesional</p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider"><CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />Mobile Responsive</p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider"><CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />Domain + Hosting 1 tahun</p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider"><CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />WhatsApp Integration</p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider"><CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />Basic SEO Setup</p>
            <p className="flex items-center font-light text-sm gap-3 tracking-wider"><CircleCheckBig className="w-4 h-4 text-[#17F1D1]" />1x Revisi Desain</p>
          </div>
          <div className="flex justify-center items-center">
            <button className="hover:cursor-pointer flex justify-center items-center gap-4 border border-[#FFFFE3] hover:border-[#17F1D1] hover:text-[#17F1D1]  rounded-full p-2 text-[#FFFFE3] min-w-62 max-w-62 font-semibold">
              <MessageCircle />
              Konsultasi Gratis
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
