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
    <div className="relative mx-4 my-8 flex max-w-[55.5rem] flex-col gap-4 rounded-[0.625rem] border-2 border-yellow-900 bg-yellow-700 px-4 py-5 md:gap-8 md:rounded-[1.25rem] md:p-12 md:pb-16 lg:mx-auto">
      <ReviewStar rating={rating} />
      <p
        className={
          " text-xs font-medium !leading-normal text-secondary-800 md:text-xl"
        }
      >
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
          className="size-11 rounded-full object-cover md:size-20"
        />
        <div>
          <h5 className=" text-sm font-bold md:text-2xl">{reviewer.name}</h5>
          <p className="text-xs font-medium italic text-secondary-600 md:text-base">
            {reviewer.detail}
          </p>
        </div>
      </div>
      <Image
        src="/assets/icons/comma.svg"
        alt="quotes"
        width={112}
        height={112}
        className="absolute bottom-2 right-[10%] size-11 md:bottom-0 md:size-28"
      />
    </div>
  );
};

export default FeebackCard;
