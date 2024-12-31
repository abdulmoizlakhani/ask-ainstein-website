import React from "react";

import StartLearningButton from "@/components/Button/StartLearningButton";
import RatingCard from "@/components/Cards/RatingCard";
import TextHighlight from "@/components/TextHighlight";
import landingPageData from "@/data/landingPage/data.json";

const TopOnePercentCard = () => {
  const topOnePercentCardData = landingPageData.topOnePercentCard;

  return (
    <div className="mx-4 flex max-w-[76.125rem] flex-col items-center justify-center gap-3 rounded-[0.625rem] border-2 border-dashed border-secondary-lighter bg-secondary-light px-3 py-6 text-secondary-dark md:gap-8 md:rounded-[1.25rem] md:p-14 xl:mx-auto">
      <p className="text-[0.625rem] font-bold uppercase text-secondary-500 md:text-lg">
        {topOnePercentCardData.questionText}
      </p>
      <h2 className="w-full text-center text-xl font-bold !leading-normal text-secondary-dark md:w-[90%] md:text-4xl lg:text-5xl">
        <TextHighlight
          text={topOnePercentCardData.mainHeading.text}
          highlightText={topOnePercentCardData.mainHeading.highlight}
          variant="tertiary"
          className="whitespace-nowrap text-2xl md:text-4xl lg:text-5xl"
        />
      </h2>
      <h5 className="mb-2 text-xs font-semibold !leading-normal text-secondary-800 md:text-[1.625rem] lg:leading-10">
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
