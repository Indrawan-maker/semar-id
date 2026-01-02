import Carousel from "./ui/Carousel";

export const Portfolio = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-center gap-12 mt-36">
        <div className="text-[#FFFFE3] text-5xl tracking-widest min-w-120 max-w-120 text-center font-semibold">
          Portfolio Terbaru
        </div>
        <p className="text-[#c1b08f] text-xl tracking-wider min-w-120 max-w-140 text-center font-normal -mt-6">
          Lihat hasil karya terbaik kami untuk berbagai industri
        </p>
      </header>
      <main>
        <section className="grid grid-cols-3 mx-auto max-w-280 gap-10 mt-22 mb-12">
            <div className="w-92">
            <Carousel />
            </div>
            <div className="w-92">
              <Carousel />
            </div>
            <div className="w-92">
             <Carousel />
            </div>
            <div>
             <Carousel />
            </div>
            <div className="w-92">
             <Carousel />
            </div>
            <div className="w-92">
             <Carousel />
            </div>
            <div className="w-92">
             <Carousel />
            </div>
        </section>
      </main>
    </>
  );
};
