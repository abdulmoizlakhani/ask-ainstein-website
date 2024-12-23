import Image from "next/image";
import React from "react";
import FirstPrinciplesCard from "../custom/cards/FirstPrinciplesCard";
import MainButton from "../custom/buttons/MainButton";
import StudyMistakes from "../custom/cards/StudyMistakes";
import DoYouWant from "../custom/cards/TopOnePercent";
import ReviewCard from "../custom/cards/ReviewCard";
import data from "@/data/landingPage/data.json"; // Adjust the path as needed

const FirstPrinciplesPage = () => {
  const { personalities, review } = data.firstPrinciple;

  return (
    <section className="flex relative px-10 pb-[3.75rem] pt-[700px] flex-col items-center">
      {/* First Principles Card */}
      <div className="absolute top-[-300px]">
        <FirstPrinciplesCard />
      </div>
      <div>
        {/* Personalities Section */}
        <div className="space-y-16">
          <h2 className="text-3xl font-bold text-center">
            Here are some famous personalities shaped by this approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem]">
            {personalities.map((person, index) => (
              <div
                key={index}
                className="flex flex-col max-w-[480px] items-center space-y-4"
              >
                <Image
                  src={`/accets/FirstPrinciple/${index + 1}.png`}
                  alt={person.name}
                  className="h-[380px] object-contain w-[380px] grayscale"
                  width={380}
                  height={380}
                />
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-2xl">{person.name}</h3>
                  <p className="font-semibold text-cardTitle">{person.title}</p>
                  <p className="text-lg max-w-[420px] tracking-tight">
                    "{person.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <MainButton shadow={true} />
          </div>
        </div>
        <div className="space-y-[3.75rem] flex items-center flex-col mt-[8rem]">
          <StudyMistakes />
          <DoYouWant />
          <ReviewCard
            stars={review.stars}
            review={review.review}
            highlight={review.highlight}
            reviewerName={review.reviewerName}
            reviewerDetail={review.reviewerDetail}
            profileImage={review.profileImage}
            backgroundColor={review.backgroundColor}
          />
        </div>
      </div>
    </section>
  );
};

export default FirstPrinciplesPage;
