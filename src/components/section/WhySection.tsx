import Image from "next/image";
import React from "react";
import FeatureCard from "../custom/cards/FeatureCard";
import feature from "@/data/featureCard.json";

const WhySection = () => {
  return (
    <section className="bg-white relative flex justify-center items-center h-[800px]">
      {/* FEATURES (Why students love Ask Ainstein) */}
      <div className="top-[-40%] absolute">
        <div className="h-[923px] rounded-[30px] p-[2rem]  relative shadow-dark  shadow-[#0000004D] max-w-9xl flex flex-col pt-[140px] gap-[3rem] items-center border-dashed border-[#60B866] border-[3px] bg-[#F4FDE6]">
          {/* TOP COMPONENT */}
          <div className="h-[200px] w-[200px] absolute top-[-100px] bg-accent-brown flex items-center justify-center rounded-[10px]">
            <Image
              src={"/accets/why/ainstien.svg"}
              alt="ask Ainstein"
              width={130}
              height={130}
            />
          </div>
          {/* MAIN HEADING */}
          <div className="flex flex-col items-center gap-[1.5rem]">
          <h2 className="text-[48px] tracking-tight font-bold text-center">
            Why students love{" "}
            <span className="text-text-green">Ask Ainstein </span>{" "}
          </h2>
          {/* SUB HEADING */}
          <p className="text-[24px] font-semibold text-[#60B866]">
            ✨ Features That Make Learning Smarter and Simpler​
          </p>
</div>
          {/* FEATURES ALL CARDS */}
          <div className="grid w-full grid-cols-3 gap-[2rem]">
            {feature.features.map((item, i) => {
              return (
                <FeatureCard first={i === 0} key={item.title} data={item} />
              );
            })}
          </div>
          {/* SUB HEADING */}
          <p className="text-[#666666] text-[28px] text-center w-[90%] font-semibold">
            💡 Ask Ainstein is more than a study tool -{" "}
            <span className="text-text-black bg-text-bg px-2 rounded">
              it’s your personalized guide to mastering exams and building
              confidence.
            </span>
            ​
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
