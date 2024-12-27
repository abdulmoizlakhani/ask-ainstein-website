"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import data from "@/data/landingPage/data.json";

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
      className={`flex flex-col mx-auto items-center gap-6 md:gap-12 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className=" xl:h-[54rem] xl:max-w-8xl h-[11.375rem] w-[20.5rem] md:h-[25rem] md:w-full  rounded-[1rem]  lg:rounded-[2rem] border-4 md:border-[1rem] border-primary-light drop-shadow-2xl transition-all duration-700 ease-in-out  "
        height={865}
        width={1520}
      />

      <div className="flex justify-center gap-2 md:gap-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={`size-[0.375rem] md:size-5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "scale-150 bg-primary-300"
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
