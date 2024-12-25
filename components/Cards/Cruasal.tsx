"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import data from "@/data/landingPage/data.json";

const CruasalSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { images } = data.carousel;

  // Handle navigation to a specific image
  const handleImageChange = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, images.length]);

  return (
    <div
      className=" flex gap-12 flex-col items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="max-w-8xl h-[856px] rounded-[3rem] drop-shadow-2xl border-[1rem] transition-all duration-700 ease-in-out transform"
        height={856}
        width={1520}
      />

      {/* Indicator Buttons */}
      <div className="flex justify-center  space-x-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={`w-5 h-5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary-300 scale-150"
                : "bg-primary-50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CruasalSection;
