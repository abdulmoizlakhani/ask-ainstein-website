import React from "react";
import data from "@/data/landingPage/data.json"; // Update the path to your JSON file
import TopAinsteinBox from "../TopAinsteinBox";
import GearingUpCard from "@/components/Cards/GearingUpCard";
import TextHighlight from "../TextHighlight";
import Carousel from "../Carousel";

const AreYouGearingUp = () => {
  const { sectionTitle, subPara, cards, bottomText } = data.functionalityData;

  return (
    <section className="bg-secondary-light md:mb-[37.5rem] mt-0 md:mt-[5rem] box-shadow pt-[10rem] gap-4 md:gap-12 flex-col flex items-center px-4 relative h-[1151px]">
      {/* TOP COMPONENT */}
      <TopAinsteinBox image={sectionTitle.images} />

      {/* MAIN HEADING */}
      <h2 className="text-base md:text-[2rem] text-center leading-normal tracking-tight max-w-[933px] font-semibold">
        "{sectionTitle.mainHeading}"
        <br />"{sectionTitle.subHeading}"
      </h2>

      {/* SUB PARA */}
      <h4 className="font-semibold  text-secondary-800 text-xs md:text-xl">
        <TextHighlight
          variant="primary"
          text={subPara.text}
          highlightText={subPara.highlight}
        />
      </h4>

      {/* ALL CARDS */}
      <div className="flex md:flex-row flex-col items-center gap-4 md:gap-8">
        {cards.map((item) => {
          return <GearingUpCard item={item} key={item.text} />;
        })}
      </div>

      {/* BOTTOM PARA */}
      <h4 className="text-sm md:text-[28px]  font-bold bg-text-bg px-2 rounded">
        <TextHighlight
          variant="tertiary"
          text={bottomText}
          highlightText={bottomText}
        />
      </h4>
      {/* Carousel Component */}
      <Carousel />
    </section>
  );
};

export default AreYouGearingUp;
