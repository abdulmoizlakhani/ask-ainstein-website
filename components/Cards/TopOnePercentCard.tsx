import React from "react";
import StartLearningButton from "../Button/StartLearningButton";
import FeebackCard from "./FeedbackCard";
import textData from "@/data/landingPage/data.json";
import { TextHighlight } from "../ui/TextHighlisht";

const TopOnePercentCard = () => {
  const { TopOnePercentCard } = textData;

  return (
    <div className="bg-white w-full max-w-[76.125rem] p-14 rounded-[20px] border-dashed border-[2px] border-secondary-lighter text-secondary-dark flex justify-center items-center flex-col gap-[2rem]">
      <p className="text-secondary-500 font-bold text-lg uppercase">
        {TopOnePercentCard.questionText}
      </p>
      <h2 className="text-5xl font-bold text-text-black w-[90%] leading-normal text-center">
        <TextHighlight
          text={TopOnePercentCard.mainHeading.text}
          highlightText={TopOnePercentCard.mainHeading.highlight}
          variant="primary"
        />
      </h2>
      <h5
        className="text-secondary-800 text-[1.625
rem] font-semibold"
      >
        <TextHighlight
          text={TopOnePercentCard.subHeading.text}
          highlightText={TopOnePercentCard.subHeading.highlight}
          variant="ask-ainstein"
        />
      </h5>
      <StartLearningButton />
      <FeebackCard
        profileImage="/assets/review-people.png"
        review={TopOnePercentCard.feedback.review}
        variant="secondary"
      />
    </div>
  );
};

export default TopOnePercentCard;
