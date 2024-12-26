"use client";
import React, { useState, useEffect } from "react";

import data from "@/data/landingPage/data.json";
import FamousPersonality from "@/components/FamousPersonality/FamousPersonalityCard";

export default function LandingPage() {
  const { personalities, title, slideChangeTime } = data.personalityCardData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleImageChange = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === personalities.length - 1 ? 0 : prevIndex + 1
        );
      }, slideChangeTime);

      return () => clearInterval(interval);
    }
  }, [isPaused, personalities.length, slideChangeTime]);

  return (
    <div className=" space-y-9 px-4 md:space-y-16 ">
      <h2 className=" text-xl md:text-3xl font-bold text-center">{title}</h2>
      <div className="md:flex hidden gap-4 justify-between items-center">
        {personalities.map((person) => (
          <FamousPersonality person={person} />
        ))}
      </div>
      <div
        className="flex md:hidden px-4 flex-col items-center gap-4 md:gap-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <FamousPersonality person={personalities[currentIndex]} />

        <div className="flex justify-center gap-2 md:space-x-6">
          {personalities.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`size-[6px] md:size-5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "scale-150 bg-primary-300"
                  : "bg-secondary-150"
              }`}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
