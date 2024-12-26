import Image from "next/image";
import React from "react";

import TextHighlight from "@/components/TextHighlight";
import landingPageData from "@/data/landingPage/data.json";

const FirstPrinciplesCard = () => {
  const data = landingPageData.powerOfFirstPrinciple;

  return (
    <div className="mx-auto flex  max-w-[91.12rem] justify-center rounded-[0.625rem] md:rounded-[1.25rem] pb-6 md:pb-20  bg-secondary-dark px-4 pt-[3.75rem] md:pt-28 ">
      <div className="relative  max-w-[76.125rem] rounded-[0.625rem] md:rounded-[20px] border-2 md:border-4 pb-8 border-yellow-dark bg-yellow-650 px-4 md:px-10 md:pb-16 pt-[3.75rem] md:pt-[9.25rem] text-secondary-800">
        <Image
          height={180}
          width={180}
          className="absolute left-1/2 top-[-40px] md:top-[-90px] z-10 size-[5rem] md:size-[11.25rem] -translate-x-1/2"
          alt="light icon"
          src={data.images.lightIcon}
        />

        <div className="space-y-4 md:space-y-9 font-2xl font-semibold">
          <h1 className="mb-6 md:mb-7 text-center text-base md:text-5xl font-bold text-secondary-dark">
            {data.title}
          </h1>
          <hr className="border border-silver-dark" />
          <p className=" font-2xl leading-relaxed text-secondary-800">
            {data.description}
          </p>

          <div className="flex gap-2 text-red-800">
            <Image
              height={32}
              width={32}
              className=" size-5  md:size-[32px]"
              alt="red tick icon"
              src={data.hardTruth.icon}
            />
            <p className=" font-2xl font-bold">
              <TextHighlight
                highlightText={data.hardTruth.highlight}
                variant="danger"
                className="text-sm md:text-[1.75rem]"
                text={data.hardTruth.hardText}
              />
              <span className="font-semibold">{data.hardTruth.softText}</span>
            </p>
          </div>

          <p className="pl-0 md:pl-10 font-2xl font-bold text-secondary-dark">
            {data.importantStatement}
          </p>

          <div className="flex items-center gap-2">
            <Image
              height={32}
              width={32}
              className="md:size-8 size-4"
              alt="green tick icon"
              src={data.images.greenTick}
            />
            <p className="font-2xl">
              <TextHighlight
                highlightText="It's about how you think"
                variant="tertiary"
                className="font-bold text-secondary-dark"
                text={data.highlightedStatement}
              />
            </p>
          </div>

          <p className="text-secondary-800 font-2xl">
            <TextHighlight
              variant="secondary"
              highlightText="tackle any challenge, innovate fearlessly, and achieve lasting success."
              text={data.conclusion}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPrinciplesCard;
