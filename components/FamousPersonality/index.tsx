"use client";
import React, { useState, useEffect } from "react";

import FamousPersonality from "@/components/FamousPersonality/FamousPersonalityCard";
import data from "@/data/landingPage/data.json";

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
    <div className="space-y-9 px-4 md:space-y-16 ">
      <h2 className="text-center text-xl font-bold md:text-3xl">{title}</h2>
      <div className="hidden items-center justify-between gap-4 md:flex">
        {personalities.map((person, i) => (
          <FamousPersonality key={`famous_person_${i}`} person={person} />
        ))}
      </div>
      <div
        className="flex flex-col items-center gap-4 px-4 md:hidden md:gap-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <FamousPersonality person={personalities[currentIndex]} />

        <div className="flex justify-center gap-2 md:space-x-6">
          {personalities.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`size-[6px] rounded-full transition-all duration-300 md:size-5 ${
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
