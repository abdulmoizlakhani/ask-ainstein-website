import Image from "next/image";
import React from "react";
import TextHighlight from "@/components/TextHighlight";
import content from "@/data/landingPage/data.json"; // Import the JSON data

const StudyMistakes = () => {
  const { header, mistakes, footer } = content.biggestMistakeData; // Destructure JSON data

  return (
    <div className="bg-yellow-650 border-4 border-yellow-800 rounded-[1.25rem] w-full max-w-[84.81rem] h-[73.37rem] text-secondary-800 relative pt-32 pb-[18.75rem] mx-auto mt-12">
      {/* Ghost Image */}
      <Image
        src={header.image}
        alt="ghost"
        width={150}
        height={150}
        className="absolute top-[-8%] left-1/2 -translate-x-1/2"
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex items-center flex-col gap-10 text-2xl font-semibold mb-12">
          <h1 className="text-5xl font-bold text-secondary-dark text-center">
            <TextHighlight
              text={header.title}
              highlightText={header.redSpan}
              variant="red"
            />
          </h1>
          {header.introduction.text.map((paragraph, index) => (
            <p>
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

        <hr className="border-silver-dark border-2 mb-12" />

        {/* Main Content Section */}
        <div className="space-y-8">
          <h2 className="text-[2rem] text-black font-bold text-center mb-12">
            <TextHighlight
              text={"Here is what most students do wrong..​"}
              highlightText={"do wrong.."}
              variant="red"
            />
          </h2>

          <p className="text-secondary-800 font-semibold text-2xl mb-12">
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
                  className="h-8 w-8"
                />
                <div className="space-y-1">
                  <span className="font-bold text-[1.625rem] text-black">
                    {mistake.title}
                  </span>
                  <span className="text-secondary-800 text-2xl font-semibold">
                    {mistake.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Quote */}
          <p className="mt-12 text-2xl leading-relaxed font-semibold">
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
