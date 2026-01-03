import Image from "next/image";
import fanle from "@/public/images/customer/fanle.png";
import gifradja from "@/public/images/customer/gifradja.gif";

export const Customer = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-center gap-12 mt-36">
        <div className="text-[#FFFFE3] text-4xl md:text-5xl tracking-widest min-w-80 max-w-80 md:min-w-180 md:max-w-180 text-center font-semibold">
          Customer Kami
        </div>
        <p className="text-gray-100 text-md tracking-wider min-w-80 max-w-80 md:min-w-160 md:max-w-160 text-center font-normal -mt-6">
        Setiap Layanan yang kami kembangkan menghasilkan value bisnis yang
        membuat mereka mempercayakan jasa pembuatan websitenya kepada kami
        </p>
      </header>
      <main className="flex">
      <div className="flex mx-auto gap-4 mt-12">
        <div className="w-26 h-26">
        <Image src={gifradja} alt="logo" unoptimized className="w-full h-full" />
        </div>
        <div className="w-26 h-26">
        <Image src={fanle} alt="logo" height={120} width={120} />
        </div>
      </div>
      </main>
    </>
  );
};
