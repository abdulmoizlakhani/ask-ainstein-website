import Image from "next/image";
import React from "react";

const ReviewStar = () => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Image
          key={i}
          src="/assets/icons/star.svg"
          alt="Star"
          width={28}
          height={28}
        />
      ))}
    </div>
  );
};

export default ReviewStar;