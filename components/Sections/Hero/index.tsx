import React from "react";
import landingPageData from "@/data/landingPage/data.json"; // Import JSON data
import StartLearningButton from "@/components/Button/StartLearningButton";
import FeebackCard from "@/components/Cards/FeedbackCard";

const Hero = () => {
  const { hero } = landingPageData;

  return (
    <section className=" py-9  px-3 md:py-[8.125rem] bg-secondary-dark h-[819px] md:h-[1215px] flex flex-col items-center text-secondary-light">
      <div className=" max-w-[280px] sm:max-w-[888px]">
        {/* Highlighted text */}
        <p className="text-yellow-dark mb-2 lg:mb-4 text-xs md:text-[22px] font-medium">
          {hero.heading.highlight}
        </p>

        {/* Title */}
        <h1 className=" text-3xl md:text-[70px] leading-[40px] text-center md:leading-[90px] font-bold tracking-tight">
          {hero.heading.title}
        </h1>
      </div>

      {/* Description */}
      <p className=" text-sm md:text-[22px] text-center mt-8 mb-9 lg:mt-[2.25rem] text-secondary-100 lg:mb-[3rem]">
        {hero.description}{" "}
        <span className="font-medium text-primary-300">{hero.emphasis}</span>
      </p>

      {/* Buttons */}
      <StartLearningButton />

      {/* Review Card */}
      <div className="mt-4 lg:mt-[1.7rem]">
        <FeebackCard
          variant="secondary"
          review={hero.reviewCard.text}
          profileImage={hero.reviewCard.image}
        />
      </div>
    </section>
  );
};

export default Hero;
