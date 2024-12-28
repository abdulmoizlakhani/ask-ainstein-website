import React from "react";

import GearingUpCard from "@/components/Cards/GearingUpCard";
import Carousel from "@/components/Carousel";
import TextHighlight from "@/components/TextHighlight";
import TopAinsteinBox from "@/components/TopAinsteinBox";
import data from "@/data/landingPage/data.json";
import { generateKey } from "@/utils/helpers";

const AreYouGearingUp = () => {
  const { sectionTitle, subPara, cards, bottomText } = data.functionalityData;

  return (
    <section className="flex-center relative mb-16 h-[54rem] sm:h-[63rem] md:mt-16 md:h-[97rem] lg:h-[96rem] xl:h-[105rem]">
      <TopAinsteinBox image={sectionTitle.images} />
      <div className="absolute top-0 h-[45.56rem] w-full bg-secondary-light pt-20 shadow-darker sm:h-[50rem] md:h-[78rem] md:pt-40">
        <h2 className="mx-auto w-[90%] max-w-[58.3125rem] text-center text-base font-semibold leading-normal tracking-tight md:text-[2rem]">
          &quot;{sectionTitle.mainHeading}&quot;
          <br />
          &quot;{sectionTitle.subHeading}&quot;
        </h2>

        <h4 className="mt-5 text-center text-xs font-semibold text-secondary-800 md:mt-8 md:text-xl">
          <TextHighlight
            variant="primary"
            text={subPara.text}
            highlightText={subPara.highlight}
          />
        </h4>

        <div className="flex-center mx-auto mt-7 w-4/5 flex-col gap-4 md:mt-12 md:gap-10 lg:flex-row">
          {cards.map((item) => {
            return <GearingUpCard item={item} key={generateKey(item.text)} />;
          })}
        </div>

        <h4 className="mx-auto my-6 w-[82%] rounded px-2 text-sm font-bold leading-normal md:my-10 md:w-[90%] md:text-[1.75rem] lg:text-center">
          <TextHighlight
            variant="primary200"
            text={bottomText}
            highlightText={bottomText}
          />
        </h4>

        <Carousel className="mt-8 w-[90%] lg:max-w-[95rem]" />
      </div>
    </section>
  );
};

export default AreYouGearingUp;
