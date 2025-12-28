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

  return (
    <div className="w-full border border-[#742eff] rounded-2xl">
      {/* Carousel */}
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
                className="h-full object-cover w-full"
              />
            </div>
          ))}
        </div>
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