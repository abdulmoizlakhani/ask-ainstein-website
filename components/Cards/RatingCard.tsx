import Image from "next/image";
import React from "react";

import ReviewStar from "@/components/ReviewStar";

interface RatingCardProps {
  rating: number;
  image: {
    src: string;
    alt: string;
  };
  text: string;
}

const RatingCard = (props: RatingCardProps) => {
  return (
    <div className="flex-between h-[10.125rem] max-w-[52.25rem] flex-col gap-4 rounded-2xl bg-secondary-700 p-6 md:flex-row md:gap-20 md:p-8 lg:h-32">
      <ReviewStar rating={props.rating} />
      <div className="flex flex-col items-center gap-2 md:items-start">
        <Image
          src={props.image.src}
          alt={props.image.alt}
          width={120}
          height={28}
        />
        <p className="text-xs font-medium text-secondary-light md:text-base">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default RatingCard;
