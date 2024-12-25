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
    <div className="flex max-w-[888px] flex-col gap-8 rounded-[1.25rem] border-2 border-yellow-900 bg-yellow-700 p-12 pb-16">
      <ReviewStar rating={rating} />
      <p className={"text-xl font-medium text-secondary-800"}>
        <TextHighlight
          variant="DEFUALT"
          text={reviewText}
          highlightText={hightlightedText}
          className="font-bold"
        />
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={reviewer.image.src}
          alt={reviewer.image.alt}
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
        <div>
          <h5 className="text-2xl font-bold">{reviewer.name}</h5>
          <p className="font-medium italic text-secondary-600">
            {reviewer.detail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeebackCard;
