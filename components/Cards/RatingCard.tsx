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
    <div className="flex-center h-32 max-w-[52.25rem] gap-20 rounded-2xl bg-secondary-700 pl-10">
      <ReviewStar rating={props.rating} />
      <div className="flex flex-col gap-2">
        <Image
          src={props.image.src}
          alt={props.image.alt}
          width={120}
          height={28}
        />
        <p className="font-medium text-secondary-light">{props.text}</p>
      </div>
    </div>
  );
};

export default RatingCard;
