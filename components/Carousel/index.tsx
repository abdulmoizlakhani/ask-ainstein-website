"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import data from "@/data/landingPage/data.json";
import { generateKey } from "@/utils/helpers";

const Carousel = ({ className }: { className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { images, slideChangeTime } = data.carousel;

  const handleImageChange = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, slideChangeTime);

      return () => clearInterval(interval);
    }
  }, [isPaused, images.length, slideChangeTime]);

  return (
    <div
      className={`mx-auto flex flex-col items-center gap-6 md:gap-12 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full rounded-2xl border-4 border-primary-light drop-shadow-2xl md:border-[1rem] lg:rounded-[2rem]"
        height={865}
        width={1520}
      />

      <div className="flex justify-center items-center gap-2 md:gap-3">
        {images.map((_, index) => (
          <button
            key={generateKey(index)}
            onClick={() => handleImageChange(index)}
            className={`size-[5px] rounded-full transition-all duration-300 md:size-[0.815rem] ${
              index === currentIndex
                ? " scale-[1.6] bg-primary-300"
                : "bg-secondary-150"
            }`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
