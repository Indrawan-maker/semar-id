import Carousel from "./ui/Carousel";

export const Portfolio = () => {
  return (
    <>
    <header className="flex flex-col justify-center items-center gap-12 mt-auto md:mt-36">
        <div className="text-[#FFFFE3] text-3xl md:text-5xl tracking-widest min-w-80 max-w-80 md:min-w-180 md:max-w-180 text-center font-semibold">
          Portfolio Terbaru
        </div>
        <p className="text-gray-100 text-xl tracking-wider min-w-80 max-w-80 md:min-w-160 md:max-w-160 text-center font-normal -mt-6">
          Lihat hasil karya terbaik kami untuk berbagai industri
        </p>
      </header>
      <main>
        <section className="grid md:grid-cols-3 mx-auto max-w-280 gap-10 mt-22 mb-12">
            <div className="w-82 md:w-92 mx-auto">
            <Carousel />
            </div>
            <div className="w-82 sm:w-92 mx-auto">
              <Carousel />
            </div>
            <div className="w-82 sm:w-92 mx-auto">
             <Carousel />
            </div>
            <div className="w-82 sm:w-92 mx-auto">
             <Carousel />
            </div>
            <div className="w-82 sm:w-92 mx-auto">
             <Carousel />
            </div>
            <div className="w-82 sm:w-92 mx-auto">
             <Carousel />
            </div>
            <div className="w-82 sm:w-92 mx-auto">
             <Carousel />
            </div>
        </section>
      </main>
    </>
  );
};
