import React from "react";

import RatingCard from "@/components/Cards/RatingCard";
import TextHighlight from "@/components/TextHighlight";
import landingPageData from "@/data/landingPage/data.json";

import StartLearningButton from "../Button/StartLearningButton";

const TopOnePercentCard = () => {
  const topOnePercentCardData = landingPageData.topOnePercentCard;

  return (
    <div className="flex w-full max-w-[76.125rem] flex-col items-center justify-center gap-8 rounded-[1.25rem] border-2 border-dashed border-secondary-lighter bg-secondary-light p-14 text-secondary-dark">
      <p className="text-lg font-bold uppercase text-secondary-500">
        {topOnePercentCardData.questionText}
      </p>
      <h2 className="w-[90%] text-center text-5xl font-bold leading-normal text-secondary-dark">
        <TextHighlight
          text={topOnePercentCardData.mainHeading.text}
          highlightText={topOnePercentCardData.mainHeading.highlight}
          variant="primary"
        />
      </h2>
      <h5 className="text-[1.625rem] font-semibold text-secondary-800">
        <TextHighlight
          text={topOnePercentCardData.subHeading.text}
          highlightText={topOnePercentCardData.subHeading.highlight}
          variant="primary"
        />
      </h5>
      <StartLearningButton />
      <RatingCard
        rating={topOnePercentCardData.feedback.rating}
        image={topOnePercentCardData.feedback.image}
        text={topOnePercentCardData.feedback.text}
      />
    </div>
  );
};

export default TopOnePercentCard;
