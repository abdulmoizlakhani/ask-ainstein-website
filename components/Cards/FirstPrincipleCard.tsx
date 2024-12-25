import Image from "next/image";
import React from "react";

import TextHighlight from "@/components/TextHighlight";
import landingPageData from "@/data/landingPage/data.json";

const FirstPrinciplesCard = () => {
  const data = landingPageData.powerOfFirstPrinciple;

  return (
    <div className="mx-auto flex h-[57.31rem] w-[91.12rem] justify-center rounded-[20px] bg-secondary-dark pt-[7.375rem]">
      <div className="relative h-[730px] max-w-[76.125rem] rounded-[20px] border-4 border-yellow-dark bg-yellow-650 px-10 pb-[70px] pt-[9.25rem] text-secondary-800">
        <Image
          height={180}
          width={180}
          className="absolute left-1/2 top-[-90px] z-10 size-[180px] -translate-x-1/2"
          alt="light icon"
          src={data.images.lightIcon}
        />

        <div className="space-y-9 text-2xl font-semibold">
          <div className="space-y-4">
            <h1 className="mb-7 text-center text-5xl font-bold text-secondary-dark">
              {data.title}
            </h1>
            <hr className="border border-silver-dark" />
          </div>

          <p className="text-2xl leading-relaxed text-secondary-800">
            {data.description}
          </p>

          <div className="flex items-center gap-2 text-red-800">
            <Image
              height={32}
              width={32}
              className="size-[32px]"
              alt="red tick icon"
              src={data.hardTruth.icon}
            />
            <p>
              <TextHighlight
                highlightText={data.hardTruth.highlight}
                variant="danger"
                className="font-bold"
                text={data.hardTruth.text}
              />
            </p>
          </div>

          <p className="pl-10 text-2xl font-bold text-secondary-dark">
            {data.importantStatement}
          </p>

          <div className="flex items-center gap-2">
            <Image
              height={32}
              width={32}
              className="size-[32px]"
              alt="green tick icon"
              src={data.images.greenTick}
            />
            <p>
              <TextHighlight
                highlightText="It's about how you think"
                variant="tertiary"
                className="font-bold text-secondary-dark"
                text={data.highlightedStatement}
              />
            </p>
          </div>

          <p className="text-secondary-800">
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
