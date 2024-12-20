import Image from "next/image";
import React from "react";
import FirstPrinciplesCard from "../custom/cards/FirstPrinciplesCard";
import MainButton from "../custom/buttons/MainButton";

const FirstPrinciplesPage = () => {
  const personalities = [
    {
      name: "Elon Musk",
      title: "Entrepreneur, CEO of Tesla and SpaceX",
      quote:
        "I think it's important to reason from first principles rather than by analogy... And the things about first principles is, you have to boil things down to the most fundamental truths and then reason up from there.",
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
    <div className="flex mx-auto relative px-10 pt-[550px] pb-[200px] flex-col items-center">
      {/* First Principles Card */}
      <div className="absolute top-[-15%]">
        <FirstPrinciplesCard />
      </div>
      {/* Personalities Section */}
      <div className="space-y-16">
        <h2 className="text-3xl font-bold text-center">
          Here are some famous personalities shaped by this approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalities.map((person, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <Image
                src={`/accets/FirstPrinciple/${index + 1}.png`}
                alt={person.name}
                className="w-48 h-48 object-center grayscale"
                width={192}
                height={192}
              />
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">{person.name}</h3>
                <p className="text-sm text-gray-600">{person.title}</p>
                <p className="text-sm italic">"{person.quote}"</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
        <MainButton />
      </div>
      </div>
    </div>
  );
};

export default FirstPrinciplesPage;
