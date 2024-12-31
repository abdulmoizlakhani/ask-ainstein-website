import React from "react";

import TextHighlight from "@/components/TextHighlight";
import TopAinsteinBox from "@/components/TopAinsteinBox";
import FeatureCard from "@/components/WhyStudentLove/FeatureCard";
import data from "@/data/landingPage/data.json";
import { generateKey } from "@/utils/helpers";

const WhyStudentLove = () => {
  const { featureSection } = data;
  const { features, title, image, footerText, subHeading } = featureSection;

  return (
    <section className="relative mt-[21rem] flex h-[53rem] items-center justify-center bg-secondary-light p-4 shadow-dark sm:mt-64 sm:h-[36rem] md:mt-[36rem] md:h-[62rem] lg:h-[50rem] xl:mt-[30rem] xl:h-[48rem]">
      <div className="absolute top-[-27%] px-4 md:top-[-40%]">
        <div className="relative flex max-w-9xl flex-col items-center gap-6 rounded-[0.625rem] border-[3px] border-dashed border-primary-400 bg-primary-100 px-3 pb-12 pt-[5.625rem] shadow-darkest md:gap-12 md:rounded-[30px] md:px-10 md:pt-[140px]">
          <TopAinsteinBox image={image} />
          <div className="flex flex-col items-center gap-5 md:gap-6">
            <h2 className="text-center text-base font-bold !leading-normal tracking-tight md:text-[48px] md:leading-tight">
              <TextHighlight
                variant="primary"
                text={title.text}
                highlightText={title.highlight}
              />
            </h2>
            <p className="font-2xl font-semibold tracking-tight text-secondary-600">
              {subHeading}
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
            {features.map((item) => {
              return (
                <FeatureCard key={generateKey(item.title.text)} data={item} />
              );
            })}
          </div>
          <p className="font-2xl font-semibold !leading-normal tracking-tight text-secondary-600">
            <TextHighlight
              variant="tertiary"
              highlightText={footerText.highlight}
              text={footerText.text}
              className="text-sm md:text-[1.75rem]"
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyStudentLove;
