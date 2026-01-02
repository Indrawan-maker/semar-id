"use client";

import porto1 from "@/public/images/porto1.png";
import porto2 from "@/public/images/porto2.png";
import porto3 from "@/public/images/porto3.png";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { StaticImageData } from "next/image";
import Image from "next/image";

type Slide = {
  id: number;
  image: StaticImageData;
  title?: string;
};

const slides: Slide[] = [
  { id: 1, image: porto1 },
  { id: 2, image: porto2 },
  { id: 3, image: porto3 },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onInit = () => {
      const snaps = emblaApi.scrollSnapList();
      console.log("Scroll snaps:", snaps); // Debug
      setScrollSnaps(snaps);
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("init", onInit);
    emblaApi.on("select", onSelect);

    onInit();

    return () => {
      emblaApi.off("init", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Auto-scroll setiap 10 detik
  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 4800);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  // Fungsi untuk tombol panah
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="w-full border border-[#742eff] rounded-2xl">
      {/* Carousel dengan tombol panah */}
      <div className="relative">
        <div className="overflow-hidden rounded-tr-2xl rounded-tl-2xl" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-[0_0_100%] min-w-0 relative"
              >
                <Image
                  src={slide.image}
                  alt={`Portfolio ${slide.id}`}
                  className="h-full object-contain w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Panah Kiri */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Tombol Panah Kanan */}
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === selectedIndex 
                ? "bg-[#742eff] scale-105" 
                : "bg-black"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}