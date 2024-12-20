import Image from "next/image";
import React from "react";

const StudyMistakes = () => {
  const headerContent = {
    title: "The 3 biggest mistakes most students make",
    redSpan: "3 biggest mistakes",
    paragraphs: [
      "Having been a student myself and coping with ADHD, I deeply understand the challenges that many face. At a young age, we are full of energy and eager to explore and express ourselves. Yet, the pressure for academic excellence, imposed by parents and society, can be overwhelming.",
      "While we can't change the rat race, we can empower the youth of today to be better prepared for the future by helping them avoid key mistakes in their learning journey."
    ]
  };

  const mistakes = [
    {
      id: 1,
      title: "Memorizing Answers:",
      description:
        "🧠 Rote learning won't help you understand concepts or think critically. It will catch up to you at some point."
    },
    {
      id: 2,
      title: "Not Practicing Enough Problems:",
      description:
        "📚 Without consistent practice, it's hard to identify and fill your learning gaps."
    },
    {
      id: 3,
      title: "Relying on Group Tuitions:",
      description:
        "‍👨 These days, most outside tuitions are conducted in groups, replicating the same challenges as a regular classroom—limited personalized attention."
    }
  ];

  const footerContent = {
    text: "💡 Avoid these mistakes with",
    highlight: "Ask Einstein",
    description:
      "where learning is personalized, practice is plentiful, and understanding always comes first."
  };

  return (
    <div className="bg-black mb-2 text-white relative pt-28 pb-[300px] w-full mx-auto">
      {/* Ghost Image */}
      <Image
        src="/accets/icons/ghoast.png"
        alt="ghost"
        width={150}
        height={150}
        className="absolute top-[-8%] left-1/2 -translate-x-1/2"
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex items-center flex-col gap-6 text-2xl text-text-lightGray font-semibold mb-12">
          <h1 className="text-5xl font-bold text-center">
            The <span className="text-text-red">{headerContent.redSpan}</span>{" "}
            most students make
          </h1>

          {headerContent.paragraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        <hr className="border-[#DEE4EC] border-[2px] mb-12" />

        {/* Main Content Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Here is what most students{" "}
            <span className="text-text-red">do wrong..</span>
          </h2>

          <p className="text-text-lightGray font-semibold text-2xl mb-8">
            🚨 Are you falling into these traps?
          </p>

          {/* Mistakes List */}
          <div className="space-y-8">
            {mistakes.map((mistake) => (
              <div key={mistake.id} className="flex items-start gap-4">
                <span className="text-text-red text-xl mt-1">✗</span>
                <div className="space-y-1">
                  <span className="font-bold text-[26px] block">
                    {mistake.title}
                  </span>
                  <span className="text-text-lightGray text-[24px] font-semibold">
                    {mistake.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Quote */}
          <p className="mt-12 text-2xl leading-relaxed font-semibold">
            <span className="text-white">{footerContent.text} </span>
            <span className="text-text-green">{footerContent.highlight}</span>
            <span className="text-white"> - </span>
            <span className="text-text-black bg-text-bg rounded px-3 py-1">
              {footerContent.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudyMistakes;
