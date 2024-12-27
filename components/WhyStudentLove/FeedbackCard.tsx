import Image from "next/image";
import React from "react";
import TextHighlight from "../TextHighlight";

interface FeatureType {
  title: {
    text: string;
    highlight: string;
  };
  description: {
    text: string;
    highlight: string;
  };
  icon: string;
  tickIcon: string;
}
const FeatureCard = ({ data }: { data: FeatureType }) => {
  return (
    // Feature Card
    <div className="bg-secondary-light p-3 md:p-5 shadow-custom flex flex-col justify-center gap-3 md:gap-6 relative md:min-h-[200px] min-h-[5.625rem] max-w-[500px] w-full rounded-[10px] md:rounded-[28px] border border-dashed">
      {/* bottom icon */}
      <Image
        src={data.icon}
        alt={data.title.text}
        width={35}
        height={35}
        className="h-6 w-6 md:h-[35px] md:w-[35px] absolute top-3 right-3 md:top-auto md:bottom-6 md:right-6"
      />
      {/* top section */}
      <div className="flex items-center gap-4">
        <Image
          src={data.tickIcon}
          alt={data.title.text}
          width={35}
          height={35}
          className="h-6 w-6 md:h-[35px] md:w-[35px]"
        />
        <h4 className={`text-sm md:text-2xl tracking- font-bold`}>
          <TextHighlight
            text={data.title.text}
            highlightText={data.title.highlight}
            variant="secondary"
          />
        </h4>
      </div>
      {/* Paragraph */}
      <p className="text-secondary-800 text-xs md:text-[22px] leading-normal italic font-medium">
        <TextHighlight
          text={data.description.text}
          highlightText={data.description.highlight}
          variant="secondary"
          className="whitespace-nowrap"
        />
      </p>
    </div>
  );
};

export default FeatureCard;
