import Image from "next/image";
import React from "react";

import ReviewStar from "@/components/ReviewStar";
import TextHighlight from "@/components/TextHighlight";

interface FeebackCardProps {
  rating: number;
  reviewText: string;
  hightlightedText?: string;
  reviewer: {
    name: string;
    detail: string;
    image: {
      src: string;
      alt: string;
    };
  };
}

const FeebackCard: React.FC<FeebackCardProps> = ({
  rating,
  reviewText,
  hightlightedText,
  reviewer,
}) => {
  return (
    <div className="flex relative max-w-[55.5rem] flex-col gap-4 md:gap-8 rounded-[0.625rem] md:rounded-[1.25rem] border-2 border-yellow-900 bg-yellow-700 py-5 px-4 md:p-12 md:pb-16">
      <ReviewStar rating={rating} />
      <p className={" text-xs md:text-xl font-medium text-secondary-800"}>
        <TextHighlight
          variant="DEFUALT"
          text={`"${reviewText}"`}
          highlightText={hightlightedText}
          className="font-bold"
        />
      </p>
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          src={reviewer.image.src}
          alt={reviewer.image.alt}
          width={100}
          height={100}
          className="rounded-full object-cover h-11 w-11 md:h-20 md:w-20"
        />
        <div>
          <h5 className=" text-sm md:text-2xl font-bold">{reviewer.name}</h5>
          <p className="font-medium italic text-xs md:text-base text-secondary-600">
            {reviewer.detail}
          </p>
        </div>
      </div>
      <Image
        src="/assets/icons/comma.svg"
        alt="quotes"
        width={112}
        height={112}
        className="absolute bottom-2 md:bottom-0 right-[20%] h-11 w-11 md:h-28 md:w-28"
      />
    </div>
  );
};

export default FeebackCard;
