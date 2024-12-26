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
    <div className="flex-between md:flex-row p-6 md:p-8 flex-col max-w-[52.25rem] md:gap-20 gap-4 rounded-2xl bg-secondary-700 ">
      <ReviewStar rating={props.rating} />
      <div className="flex flex-col md:items-start items-center gap-2">
        <Image
          src={props.image.src}
          alt={props.image.alt}
          width={120}
          height={28}
          className="h-5 w-[5.375rem] md:h-[1.75rem] md:w-[7.50rem]"
        />
        <p className="font-medium text-xs md:text-base text-secondary-light">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default RatingCard;
