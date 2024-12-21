"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReviewCard from "../custom/cards/ReviewCard";

const images = ["1", "2", "3"];

const CruasalSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation to a specific image
  const handleImageChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="flex items-center py-[550px]  justify-center relative">
      <div className="absolute gap-4 top-[-28%] flex flex-col items-center">
        {/* Carousel Container */}
        <div className="h-[856px] max-w-8xl border-[15px] rounded-[50px] border-border shadow-custom overflow-hidden">
          <div className="w-full flex items-center justify-center">
            <Image
              src={`/accets/cruasal/${images[currentIndex]}.png`}
              alt={`Image ${images[currentIndex]}`}
              className="max-w-8xl h-[856px] transition-transform duration-700 ease-in-out"
              height={856}
              width={1520}
            />
          </div>
        </div>

        {/* Indicator Buttons */}
        <div className="flex justify-center mt-6 space-x-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`w-5 h-5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#00B75F] scale-150"
                  : "bg-[#D5CCE3]"
              }`}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      {/* Review Card */}
      <ReviewCard
        stars={5}
        review="I used to score only 50-55% in math and science, and it created a lot of stress at home. My parents were always worried, and I felt stuck. This platform helped me figure out where I was making mistakes and how to fix them. After a few weeks, my score improved to 85%! My parents were so PROUD, and things at home are much better now. Even my teachers noticed the change and appreciated my hard work. I finally feel confident in my studies."
        highlight="PROUD"
        reviewerName="Riya Sharma"
        reviewerDetail="Grade 10 Student"
        profileImage="/accets/profileImage/1.jpg"
      />
    </section>
  );
};

export default CruasalSection;
