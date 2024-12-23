import React from "react";
import MainButton from "../custom/buttons/MainButton";
import HeroReviewCard from "../custom/cards/HeroReviewCard";
import landingPageData from "@/data/landingPage/data.json"; // Import JSON data

const Hero = () => {
  const { hero } = landingPageData;

  return (
    <section
      className="py-[8.125rem] h-[1193px] flex flex-col items-center text-white"
      style={{ backgroundColor: hero.background }}
    >
      <div className="max-w-[888px]">
        {/* Highlighted text */}
        <p className="text-text-yellow mb-[0.75rem] text-[22px] font-medium">
          {hero.heading.highlight}
        </p>

        {/* Title */}
        <h1 className="text-[70px] text-center leading-[90px] font-bold tracking-tight">
          {hero.heading.title}
        </h1>
      </div>

      {/* Description */}
      <p className="text-[22px] mt-[2.25rem] text-text-secondaryLight mb-[3rem]">
        {hero.description}{" "}
        <span className="text-text-green">{hero.emphasis}</span>
      </p>

      {/* Buttons */}
         <MainButton />

      {/* Review Card */}
      <div className="mt-[1.7rem]">
       <HeroReviewCard />
      </div>
    </section>
  );
};

export default Hero;
