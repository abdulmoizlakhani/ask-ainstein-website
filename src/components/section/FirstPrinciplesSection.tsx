import Image from "next/image";
import React from "react";
import FirstPrinciplesCard from "../custom/cards/FirstPrinciplesCard";
import MainButton from "../custom/buttons/MainButton";
import StudyMistakes from "../custom/cards/StudyMistakes";
import DoYouWant from "../custom/cards/DoYouWant";
import ReviewCard from "../custom/cards/ReviewCard";

const FirstPrinciplesPage = () => {
  const personalities = 
  [
    {
      name: "Elon Musk",
      title: "Entrepreneur, CEO of Tesla and SpaceX",
      quote:
        "I think it’s important to reason from first principles rather than by analogy... you boil things down to the most fundamental truths and then reason up from there.",
    },
    {
      name: "Charlie Munger",
      title: "Partner, Vice Chairman of Berkshire Hathaway",
      quote:
        "You have to think about the big ideas that really work and see them coming... First principles thinking is essential to real process.",
    },
    {
      name: "Steve Jobs",
      title: "Entrepreneur, co-founder of Apple",
      quote:
        "You have to work hard to get your thinking clean to make it simple. But it's worth it in the end, because once you get there, you can move mountains.",
    },
  ];

  return (
    <section className="flex relative px-10 pb-[3.75rem] pt-[700px] flex-col items-center">
      {/* First Principles Card */}
      <div className="absolute top-[-300px]">
        <FirstPrinciplesCard />
      </div>
      <div>
        {/* Personalities Section */}
        <div className="space-y-16">
          <h2 className="text-3xl font-bold text-center">
            Here are some famous personalities shaped by this approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem]">
            {personalities.map((person, index) => (
              <div
                key={index}
                className="flex flex-col max-w-[480px] items-center space-y-4"
              >
                <Image
                  src={`/accets/FirstPrinciple/${index + 1}.png`}
                  alt={person.name}
                  className=" h-[380px] object-contain w-[380px] grayscale"
                  width={380}
                  height={380}
                />
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-2xl">{person.name}</h3>
                  <p className="font-semibold text-cardTitle">{person.title}</p>
                  <p className=" text-lg max-w-[420px]  tracking-tight">"{person.quote}"</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <MainButton shadow={true} />
          </div>
        </div>
        <div className="space-y-[3.75rem] flex items-center flex-col mt-[8rem]">
          <StudyMistakes />
          <DoYouWant />
          <ReviewCard
            stars={5}
            review={`My daughter was struggling with math and science, scoring only around 50-55%. It was frustrating for us because we knew she was capable but didn’t know how to help her. After using this platform, we started seeing a big difference. Her understanding improved, and her scores jumped to 85%! She's more confident now. We’re really proud of her progress, and I’m so glad we found this platform.`}
            highlight={
              "After using this platform, we started seeing a big difference."
            }
            reviewerName=" - Anjali Sharma"
            reviewerDetail="Parent of a Grade 10 Student"
            profileImage="/accets/profileImage/2.jpg"
            backgroundColor="bg-accent-lightYellow"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstPrinciplesPage;
