import React from "react";
import data from "@/data/landingPage/data.json"; // Update the path to your JSON file
import TopAinsteinBox from "@/components/TopAinsteinBox";
import GearingUpCard from "@/components/Cards/GearingUpCard";
import TextHighlight from "@/components/TextHighlight";
import Carousel from "@/components/Carousel";

const AreYouGearingUp = () => {
  const { sectionTitle, subPara, cards, bottomText } = data.functionalityData;

  return (
    <section className="bg-secondary-light shadow-darker pb-[10rem] md:pb-[30rem] mb-[6rem] lg:mb-[37.5rem] md:mt-[5rem] pt-[5rem] md:pt-[10rem] gap-[1rem] md:gap-[2rem] flex-col flex items-center px-[1rem] relative">
      {/* TOP COMPONENT */}
      <TopAinsteinBox image={sectionTitle.images} />

      {/* MAIN HEADING */}
      <h2 className="text-base md:text-[2rem] text-center leading-normal tracking-tight max-w-[58.3125rem] font-semibold">
        "{sectionTitle.mainHeading}"
        <br />"{sectionTitle.subHeading}"
      </h2>

      {/* SUB PARA */}
      <h4 className="font-semibold text-secondary-800 text-xs md:text-xl">
        <TextHighlight
          variant="primary"
          text={subPara.text}
          highlightText={subPara.highlight}
        />
      </h4>

      {/* ALL CARDS */}
      <div className="flex md:flex-row flex-col items-center gap-[1rem] md:gap-[2rem]">
        {cards.map((item) => {
          return <GearingUpCard item={item} key={item.text} />;
        })}
      </div>

      {/* BOTTOM PARA */}
      <h4 className="text-sm md:text-[1.75rem] leading-normal mt-[1rem] mb-[1.5rem] md:my-[2rem] font-bold bg-text-bg px-[0.5rem] rounded">
        <TextHighlight
          variant="tertiary"
          text={bottomText}
          highlightText={bottomText}
        />
      </h4>
      {/* Carousel Component */}
      <Carousel className="absolute px-[1rem] bottom-[-4rem] lg:bottom-[-32rem]" />
    </section>
  );
};

export default AreYouGearingUp;
