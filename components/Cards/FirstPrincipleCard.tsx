import Image from "next/image";
import React from "react";

import TextHighlight from "@/components/TextHighlight";
import landingPageData from "@/data/landingPage/data.json";

const FirstPrinciplesCard = () => {
  const data = landingPageData.powerOfFirstPrinciple;

  return (
    <div className="absolute -bottom-10 mb-10 flex min-h-[34.125rem] w-full max-w-[91.125rem] justify-center rounded-[0.625rem] bg-secondary-dark px-4 pb-6 pt-[3.75rem] sm:mx-4 md:rounded-[1.25rem] md:pb-20 md:pt-28 lg:bottom-[-42rem] xl:mx-auto">
      <div className="relative max-w-[76.125rem] rounded-[0.625rem] border-2 border-yellow-dark bg-yellow-650 px-4 pb-8 pt-[3.75rem] text-secondary-800 md:rounded-[20px] md:border-4 md:px-10 md:pb-16 md:pt-[9.25rem]">
        <Image
          height={180}
          width={180}
          className="absolute left-1/2 top-[-40px] z-10 size-20 -translate-x-1/2 md:top-[-90px] md:size-[11.25rem]"
          alt="light icon"
          src={data.images.lightIcon}
        />

        <div className="font-2xl space-y-4 font-semibold md:space-y-9">
          <h1 className="mb-6 text-center text-base font-bold text-secondary-dark md:mb-7 md:text-5xl">
            {data.title}
          </h1>
          <hr className="border border-silver-dark" />
          <p className="font-2xl leading-relaxed text-secondary-800">
            {data.description}
          </p>

          <div className="flex gap-2 text-red-800">
            <Image
              height={32}
              width={32}
              className="size-5 md:size-8"
              alt="red tick icon"
              src={data.hardTruth.icon}
            />
            <p className="font-2xl font-bold">
              <TextHighlight
                highlightText={data.hardTruth.highlight}
                variant="danger"
                className="text-sm md:text-[1.75rem]"
                text={data.hardTruth.hardText}
              />
              <span className="font-semibold">{data.hardTruth.softText}</span>
            </p>
          </div>

          <p className="font-2xl pl-0 font-bold text-secondary-dark md:pl-10">
            {data.importantStatement}
          </p>

          <div className="flex items-center gap-2">
            <Image
              height={32}
              width={32}
              className="size-4 md:size-8"
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

          <p className="font-2xl text-secondary-800">
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
