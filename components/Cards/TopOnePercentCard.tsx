import React from "react";
import StartLearningButton from "../Button/StartLearningButton";
import FeebackCard from "./FeedbackCard";
import textData from "@/data/landingPage/data.json";
import TextHighlight from "@/components/TextHighlight";
import RatingCard from "./RatingCard";

const TopOnePercentCard = () => {
  const topOnePercentCardData = textData.TopOnePercentCard;

  return (
    <div className="bg-white w-full max-w-[76.125rem] p-14 rounded-[1.25rem] border-dashed border-2 border-secondary-lighter text-secondary-dark flex justify-center items-center flex-col gap-[2rem]">
      <p className="text-secondary-500 font-bold text-lg uppercase">
        {topOnePercentCardData.questionText}
      </p>
      <h2 className="text-5xl font-bold text-text-black w-[90%] leading-normal text-center">
        <TextHighlight
          text={topOnePercentCardData.mainHeading.text}
          highlightText={topOnePercentCardData.mainHeading.highlight}
          variant="primary"
        />
      </h2>
      <h5
        className="text-secondary-800 text-[1.625
rem] font-semibold"
      >
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
