import React from "react";
import MainButton from "../custom/buttons/MainButton";
import HeroReviewCard from "../custom/cards/HeroReviewCard";

const Hero = () => {
  return (
    <section className="bg-[#000000]  gap-6 py-14 h-[1193px] flex flex-col items-center text-white">
      <div className="max-w-[887px]">
        <p className="text-text-yellow text-[22px] font-medium">
          Student in high school?
        </p>
        <h1 className="text-[70px] text-center leading-[90px]  font-bold tracking-tight">
          Exams Around the Corner? We've Got You Covered!
        </h1>
      </div>
      <p className="text-[22px]">
        Master every topic with personalized, Ai-powered guidance and
        curriculum-aligned practice questions.{" "}
        <span className="text-text-green">Learn by doing.</span> ​
      </p>
      <div className="mt-10 space-y-1">
        <MainButton />
      </div>
      <HeroReviewCard />
    </section>
  );
};

export default Hero;
