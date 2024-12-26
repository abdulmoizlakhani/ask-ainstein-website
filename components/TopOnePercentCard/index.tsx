import React from "react";

import StartLearningButton from "@/components/Button/StartLearningButton";
import RatingCard from "@/components/Cards/RatingCard";
import TextHighlight from "@/components/TextHighlight";
import landingPageData from "@/data/landingPage/data.json";

const TopOnePercentCard = () => {
  const topOnePercentCardData = landingPageData.topOnePercentCard;

  return (
    <div className="flex w-full max-w-[76.125rem] flex-col items-center justify-center gap-3 md:gap-8 md:rounded-[1.25rem] rounded-[0.625rem] border-2 border-dashed border-secondary-lighter bg-secondary-light px-3 py-6 md:p-14 text-secondary-dark">
      <p className=" text-[0.625rem] md:text-lg font-bold uppercase text-secondary-500">
        {topOnePercentCardData.questionText}
      </p>
      <h2 className=" w-full md:w-[90%] text-center text-xl md:text-5xl font-bold leading-normal text-secondary-dark">
        <TextHighlight
          text={topOnePercentCardData.mainHeading.text}
          highlightText={topOnePercentCardData.mainHeading.highlight}
          variant="tertiary"
          className="text-2xl md:text-5xl whitespace-nowrap"
        />
      </h2>
      <h5 className=" text-xs md:text-[1.625rem] mb-2 font-semibold text-secondary-800">
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
