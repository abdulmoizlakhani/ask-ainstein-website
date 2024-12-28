import Image from "next/image";
import React from "react";

import { generateKey } from "@/utils/helpers";

const ReviewStar = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }, (_, i) => (
        <Image
          key={generateKey(i)}
          src="/assets/icons/star.svg"
          alt="Star"
          width={28}
          height={28}
          className="size-4 lg:size-7"
        />
      ))}
    </div>
  );
};

export default ReviewStar;
