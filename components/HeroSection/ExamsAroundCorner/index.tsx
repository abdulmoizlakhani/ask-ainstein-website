import React from "react";

import StartLearningButton from "@/components/Button/StartLearningButton";
import RatingCard from "@/components/Cards/RatingCard";
import landingPageData from "@/data/landingPage/data.json";

const ExamsAroundCorner = () => {
  const { examsAroundCorner } = landingPageData;

  return (
    <section className="h-[51.25rem] bg-secondary-dark px-6 py-9 lg:h-[76rem] lg:py-[8.25rem]">
      <div className="mx-auto max-w-[55.5rem]">
        <p className="ml-5 text-xs font-medium text-yellow-dark lg:ml-2 lg:text-[1.375rem]">
          {examsAroundCorner.heading.highlight}
        </p>
        <h1 className="text-center text-[2rem] font-bold leading-tight tracking-tight text-secondary-light lg:text-[4.375rem]">
          {examsAroundCorner.heading.title}
        </h1>
      </div>

      <p className="my-4 text-center text-sm leading-normal text-secondary-100 lg:mb-12 lg:mt-9 lg:text-[1.375rem]">
        {examsAroundCorner.description}{" "}
        <span className="font-medium text-primary-300">
          {examsAroundCorner.emphasis}
        </span>
      </p>

      <div className="flex-center">
        <StartLearningButton />
      </div>

      <div className="flex-center mt-4 lg:mt-[1.7rem]">
        <RatingCard
          image={examsAroundCorner.feedback.image}
          rating={examsAroundCorner.feedback.rating}
          text={examsAroundCorner.feedback.text}
        />
      </div>
    </section>
  );
};

export default ExamsAroundCorner;
