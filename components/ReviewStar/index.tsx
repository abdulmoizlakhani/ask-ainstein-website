import Image from "next/image";
import React from "react";

const ReviewStar = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }, (_, i) => (
        <Image
          key={i}
          src="/assets/icons/star.svg"
          alt="Star"
          width={28}
          height={28}
          className="lg:h-7 h-4 w-4 lg:w-7"
        />
      ))}
    </div>
  );
};

export default ReviewStar;
