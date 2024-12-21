"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReviewCard from "../custom/cards/ReviewCard";
import data from "@/data/landingPage/data.json"; // Import the JSON file

const CruasalSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { images } = data.carousel;
  const { stars, reviewText, highlight, reviewer } = data.review;

  // Handle navigation to a specific image
  const handleImageChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="flex items-center py-[550px] justify-center relative">
      <div className="absolute gap-4 top-[-28%] flex flex-col items-center">
        {/* Carousel Container */}
        <div className="h-[856px] max-w-8xl border-[15px] rounded-[50px] border-border shadow-custom overflow-hidden">
          <div className="w-full flex items-center justify-center">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
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
        stars={stars}
        review={reviewText}
        highlight={highlight}
        reviewerName={reviewer.name}
        reviewerDetail={reviewer.detail}
        profileImage={reviewer.profileImage}
      />
    </section>
  );
};

export default CruasalSection;
