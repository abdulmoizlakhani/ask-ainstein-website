import React from "react";
import FeatureCard from "@/components/WhyStudentLove/FeedbackCard";
import data from "@/data/landingPage/data.json";
import TopAinsteinBox from "../TopAinsteinBox";
import TextHighlight from "../TextHighlight";

const WhyStudentLove = () => {
  const { features, title, image, footerText, subHeading } =
    data.featureSection;
  return (
    <section className="bg-secondary-light mt-[30rem] p-4 relative flex justify-center items-center h-[800px]">
      {/* FEATURES (Why students love Ask Ainstein) */}
      <div className=" top-[0%] px-4  md:top-[-40%] absolute">
        <div className=" rounded-[0.625rem] md:rounded-[30px] px-3 md:px-10  pb-16 relative   shadow-darkest max-w-9xl flex flex-col pt-[5.625rem] md:pt-[140px] gap-6 md:gap-12 items-center border-dashed border-primary-400 border-[3px] bg-primary-100">
          {/* TOP COMPONENT */}
          <TopAinsteinBox image={image} />
          {/* MAIN HEADING */}
          <div className="flex flex-col items-center gap-5 md:gap-[1.5rem]">
            <h2 className="text-base md:text-[48px] tracking-tight font-bold text-center">
              <TextHighlight
                variant="primary"
                text={title.text}
                highlightText={title.highlight}
              />
            </h2>
            {/* SUB HEADING */}
            <p className="font-2xl font-semibold text-secondary-500">
              {subHeading}
            </p>
          </div>
          {/* FEATURES ALL CARDS */}
          <div className="grid w-ful grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
            {features.map((item, i) => {
              return <FeatureCard key={item.title.text} data={item} />;
            })}
          </div>
          {/* SUB HEADING */}
          <p className="text-secondary-500 font-2xl text-center md:w-[90%] font-semibold">
            <TextHighlight
              variant="tertiary"
              highlightText={footerText.highlight}
              text={footerText.text}
              className="text-sm md:text-[1.75rem]"
            />
            ​
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyStudentLove;
