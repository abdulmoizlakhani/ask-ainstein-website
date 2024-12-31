import Image from "next/image";
import React from "react";

import TextHighlight from "@/components/TextHighlight";

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
    <div className="relative flex min-h-[5.625rem] w-full max-w-[31.45rem] flex-col justify-center gap-3 rounded-lg border border-dashed bg-secondary-light p-3 shadow-dark md:min-h-52 md:gap-6 md:p-5">
      <Image
        src={data.icon}
        alt={data.title.text}
        width={35}
        height={35}
        className="absolute right-2 top-3 size-6 md:bottom-6 md:right-6 md:top-auto md:size-[35px]"
      />
      <div className="flex items-center gap-2">
        <Image
          src={data.tickIcon}
          alt={data.title.text}
          width={35}
          height={35}
          className="size-6 md:size-[35px]"
        />
        <h4 className="text-sm font-bold !leading-normal tracking-tight md:text-2xl">
          <TextHighlight
            text={data.title.text}
            highlightText={data.title.highlight}
            variant="secondary"
          />
        </h4>
      </div>
      <p className="text-xs font-medium italic !leading-normal tracking-tight text-secondary-800 md:text-[22px]">
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
