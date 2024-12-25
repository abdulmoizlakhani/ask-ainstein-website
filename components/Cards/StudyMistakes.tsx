import Image from "next/image";
import React from "react";

import TextHighlight from "@/components/TextHighlight";
import landingPageData from "@/data/landingPage/data.json";

const StudyMistakes = () => {
  const { header, mistakes, footer } = landingPageData.studyMistakesData;

  return (
    <div className="relative mx-auto mt-12 h-[73.37rem] w-full max-w-[84.81rem] rounded-[1.25rem] border-4 border-yellow-800 bg-yellow-650 pb-[18.75rem] pt-32 text-secondary-800">
      <Image
        src={header.image}
        alt="ghost"
        width={150}
        height={150}
        className="absolute left-1/2 top-[-8%] -translate-x-1/2"
      />

      <div className="mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center gap-10 text-2xl font-semibold">
          <h1 className="text-center text-5xl font-bold text-secondary-dark">
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

        <hr className="mb-12 border-2 border-silver-dark" />

        {/* Main Content Section */}
        <div className="space-y-8">
          <h2 className="mb-12 text-center text-[2rem] font-bold text-black">
            <TextHighlight
              text="Here is what most students do wrong.."
              highlightText="do wrong.."
              variant="danger"
            />
          </h2>

          <p className="mb-12 text-2xl font-semibold text-secondary-800">
            {footer.quote}
          </p>

          {/* Mistakes List */}
          <div className="space-y-8">
            {mistakes.map((mistake) => (
              <div key={mistake.id} className="flex items-start gap-4">
                <Image
                  alt="cut Logo"
                  src={mistake.image}
                  width={32}
                  height={32}
                  className="size-8"
                />
                <div className="space-y-1">
                  <span className="text-[1.625rem] font-bold text-black">
                    {mistake.title}
                  </span>
                  <span className="text-2xl font-semibold text-secondary-800">
                    {mistake.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Quote */}
          <p className="mt-12 text-2xl font-semibold leading-relaxed">
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
