import Image from "next/image";
import React from "react";

import TextHighlight from "@/components/TextHighlight";
import landingPageData from "@/data/landingPage/data.json";

const StudyMistakes = () => {
  const { header, mistakes, footer } = landingPageData.studyMistakesData;

  return (
    <div className="relative mx-auto w-full max-w-[84.81rem] box-round border-4 border-yellow-800 bg-yellow-650  pb-10 pt-20 md:pt-44 text-secondary-800">
      <Image
        src={header.image}
        alt="ghost"
        width={150}
        height={150}
        className="absolute w-[4.5rem] h-[4.5rem] md:w-[9.375rem] md:h-[9.375rem] left-1/2 top-[-36px] md:top-[-75px] -translate-x-1/2"
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className=" flex flex-col items-center gap-4 md:gap-10  font-2xl font-semibold">
          <h1 className="text-center mb-6 text-xl md:text-5xl font-bold text-secondary-dark">
            <TextHighlight
              text={header.title}
              highlightText={header.redSpan}
              variant="danger"
            />
          </h1>
          {header.introduction.text.map((paragraph, index) => (
            <p key={`study_mistakes_${index}`}>
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

        <hr className="my-4  md:my-12 border-2 border-silver-dark" />

        <div className=" mt-2 ">
          <h2 className=" mb-6  md:mb-12  text-center text-base md:text-[2rem] font-bold text-black">
            <TextHighlight
              text="Here is what most students do wrong.."
              highlightText="do wrong.."
              variant="danger"
            />
          </h2>

          <p className=" mb-5 md:mb-12 flex items-center gap-1 font-2xl font-semibold text-secondary-800">
            <Image
              src={footer.quote.image}
              alt="quote"
              width={32}
              height={32}
              className="size-4 md:size-8"
            />
            {footer.quote.text}
          </p>

          <div className=" space-y-5 md:space-y-8">
            {mistakes.map((mistake) => (
              <div key={mistake.id} className="flex items-start gap-2 md:gap-4">
                <Image
                  alt="cut Logo"
                  src={mistake.image}
                  width={32}
                  height={32}
                  className="size-4 md:size-8"
                />
                <div className="-mt-1">
                  <span className=" text-sm md:text-[1.625rem] font-bold text-black">
                    {mistake.title}
                  </span>

                  <span className=" font-2xl font-semibold text-secondary-800">
                    {mistake.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-7 md:mt-12 font-2xl font-semibold leading-relaxed">
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
