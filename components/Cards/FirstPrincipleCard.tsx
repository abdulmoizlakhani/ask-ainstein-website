import Image from "next/image";
import React from "react";
import { TextHighlight } from "../ui/TextHighlisht";
import content from "@/data/landingPage/data.json"; // Import the JSON file

const FirstPrinciplesCard = () => {
  const data = content.powerOfFirstPrinciple; // Get the data from the JSON file
  return (
    <div className="w-[91.12rem] h-[57.31rem] mx-auto rounded-[20px] flex pt-[7.375rem] justify-center bg-secondary-dark">
      <div className="bg-yellow-650 relative max-w-[76.125rem] h-[730px] rounded-[20px] text-secondary-800 border-4 border-yellow-dark pb-[70px] px-[2.5rem] pt-[9.25rem]">
        {/* Light Icon */}
        <Image
          height={180}
          width={180}
          className="h-[180px] w-[180px] absolute left-1/2 -translate-x-1/2 top-[-90px] z-10"
          alt="light icon"
          src={data.images.lightIcon}
        />

        <div className="space-y-9 font-semibold text-2xl">
          {/* Title with separator line */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-secondary-dark mb-7 text-center">
              {data.title}
            </h1>
            <hr className="border-silver-dark border-2" />
          </div>

          {/* Description */}
          <p className="text-secondary-800 leading-relaxed text-2xl">
            {data.description}
          </p>

          {/* Hard Truth Section */}
          <div className="flex items-center gap-2 text-red-800">
            <Image
              height={32}
              width={32}
              className="h-[32px] w-[32px]"
              alt="red tick icon"
              src={data.hardTruth.icon}
            />
            <p>
              <TextHighlight
                highlightText={data.hardTruth.highlight}
                variant="red"
                className="font-bold"
                text={data.hardTruth.text}
              />
            </p>
          </div>

          {/* Important Statement */}
          <p className="pl-10 font-bold text-secondary-dark text-2xl">
            {data.importantStatement}
          </p>

          {/* Highlighted Statement */}
          <div className="flex items-center gap-2">
            <Image
              height={32}
              width={32}
              className="h-[32px] w-[32px]"
              alt="green tick icon"
              src={data.images.greenTick}
            />
            <p>
              <TextHighlight
                highlightText="It's about how you think"
                variant="primary"
                className="text-text-black font-bold"
                text={data.highlightedStatement}
              />
            </p>
          </div>

          {/* Conclusion */}
          <p className="text-text-smallLight">
            <TextHighlight
              variant="secondary"
              highlightText="tackle any challenge, innovate fearlessly, and achieve lasting"
              text={data.conclusion}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPrinciplesCard;
