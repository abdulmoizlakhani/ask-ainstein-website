import Image from "next/image";
import React from "react";

import TextHighlight from "@/components/TextHighlight";
import landingPageData from "@/data/landingPage/data.json";
import { generateKey } from "@/utils/helpers";

const StudyMistakes = () => {
  const { header, mistakes, footer } = landingPageData.studyMistakesData;

  return (
    <div className="box-round relative mx-4 mb-10 max-w-[84.81rem] border-4 border-yellow-800 bg-yellow-650 pb-10 pt-20 text-secondary-800 md:pt-44 xl:mx-auto">
      <Image
        src={header.image}
        alt="ghost"
        width={150}
        height={150}
        className="absolute left-1/2 top-[-36px] size-[4.5rem] -translate-x-1/2 md:top-[-75px] md:size-[9.375rem]"
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className=" font-2xl flex flex-col items-center gap-4 font-semibold md:gap-10">
          <h1 className="mb-6 text-center text-xl font-bold text-secondary-dark md:text-5xl">
            <TextHighlight
              text={header.title}
              highlightText={header.redSpan}
              variant="danger"
            />
          </h1>
          {header.introduction.text.map((paragraph, index) => (
            <p key={`study_mistakes_${generateKey(index)}`}>
              <TextHighlight
                text={paragraph}
                highlightText={header.introduction.highlight}
                key={index}
                variant="secondary"
                className="text-secondary-dark"
              />
            </p>
          ))}
        </div>

        <hr className="my-4 border border-silver-dark md:my-12" />

        <div className="mt-2">
          <h2 className="mb-6 text-center text-base font-bold text-black md:mb-12 md:text-[2rem]">
            <TextHighlight
              text="Here is what most students do wrong.."
              highlightText="do wrong.."
              variant="danger"
            />
          </h2>

          <p className="font-2xl mb-5 flex items-center gap-1 font-semibold text-secondary-800 md:mb-12">
            <Image
              src={footer.quote.image}
              alt="quote"
              width={32}
              height={32}
              className="size-4 md:size-8"
            />
            {footer.quote.text}
          </p>

          <div className="space-y-5 md:space-y-8">
            {mistakes.map((mistake) => (
              <div key={mistake.id} className="flex items-start gap-2 md:gap-4">
                <Image
                  alt="cut Logo"
                  src={mistake.image}
                  width={32}
                  height={32}
                  className="size-4 md:size-8"
                />
                <div className="-mt-1 leading-none">
                  <span className="text-sm font-bold text-black md:text-[1.625rem]">
                    {mistake.title}
                  </span>

                  <span className="font-2xl font-semibold text-secondary-800">
                    {mistake.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="font-2xl mt-7 font-semibold md:mt-12 !leading-normal">
            <TextHighlight
              text={footer.closing.split(" - ")[0]}
              highlightText="Ask Einstein"
              variant="primary"
            />
            {" - "}
            <TextHighlight
              className="text-secondary-dark"
              text={footer.closing.split(" - ")[1]}
              highlightText={footer.highlight}
              variant="tertiary"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudyMistakes;
