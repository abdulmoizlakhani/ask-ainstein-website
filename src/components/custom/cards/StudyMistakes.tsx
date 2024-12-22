import Image from "next/image";
import React from "react";

const StudyMistakes = () => {
  const headerContent = {
    title: "The 3 biggest mistakes most students make",
    redSpan: "3 biggest mistakes",
  };

  const mistakes = [
    {
      id: 1,
      title: "Memorizing Answers:",
      description:
        "🧠 Rote learning won't help you understand concepts or think critically. It will catch up to you at some point.",
    },
    {
      id: 2,
      title: "Not Practicing Enough Problems:",
      description:
        "📚 Without consistent practice, it's hard to identify and fill your learning gaps.",
    },
    {
      id: 3,
      title: "Relying on Group Tuitions:",
      description:
        "👨‍🏫 These days, most outside tuitions are conducted in groups, replicating the same challenges as a regular classroom—limited personalized attention.",
    },
  ];

  const footerContent = {
    text: "💡 Avoid these mistakes with",
    highlight: "Ask Einstein",
    description:
      "where learning is personalized, practice is plentiful, and understanding always comes first.",
  };

  return (
    <div className="bg-bgLightYellow border-4 border-borderYellow rounded-[20px] w-full max-w-[84.81rem] h-[73.37rem] mb-2 text-text-smallLight relative pt-32 pb-[300px] mx-auto mt-12">
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
        <div className="flex items-center flex-col  gap-10 text-2xl  font-semibold mb-12">
          <h1 className="text-5xl font-bold text-black text-center">
            The <span className="text-darkRed">{headerContent.redSpan}</span>{" "}
            most students make
          </h1>
          <p>
            {" "}
            Having been a student myself and coping with ADHD, I deeply
            understand the challenges that many face. At a young age, we are
            full of energy and eager to explore and express ourselves. Yet, the
            pressure for academic excellence, imposed by parents and society,
            can be overwhelming.
          </p>
          <p>
          <span className="text-black bg-card p-1 rounded">While we can't change the rat race, we can empower the youth of
          today</span> to be better prepared for the future by helping them avoid key
            mistakes in their learning journey.
          </p>
        </div>

        <hr className="border-[#DEE4EC] border-[2px] mb-12" />

        {/* Main Content Section */}
        <div className="space-y-8">
          <h2 className="text-[2rem] text-black font-bold text-center mb-12">
            Here is what most students{" "}
            <span className="text-text-red">do wrong..</span>
          </h2>

          <p className="text-text-smallLight font-semibold text-2xl mb-12">
            🚨 Are you falling into these traps?
          </p>

          {/* Mistakes List */}
          <div className="space-y-8">
            {mistakes.map((mistake) => (
              <div key={mistake.id} className="flex items-start gap-4">
                <Image
                  alt="cut Logo"
                  src={"/accets/icons/cut.svg"}
                  width={32}
                  height={32}
                  className="h-[32px] w-[32px]"
                />
                <div className="space-y-1">
                  <span className="font-bold text-[26px] text-black">
                    {mistake.title}
                  </span>
                  <span className="text-text-smallLight text-[24px] font-semibold">
                    {mistake.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Quote */}
          <p className="mt-12 text-2xl leading-relaxed font-semibold">
            <span className="">{footerContent.text} </span>
            <span className="text-text-green">{footerContent.highlight}</span>
            <span className="t"> - </span>
            <span className="text-text-black bg-text-bgBlue rounded px-3 py-1">
              {footerContent.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudyMistakes;
