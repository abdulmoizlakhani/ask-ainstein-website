import { TextHighlight } from "@/components/ui/TextHighlisht";
import Image from "next/image";
import React from "react";
import ReviewStar from "../ReviewStar";

interface FeebackCardProps {
  stars: number;
  review: string;
  highlight?: string;
  reviewerName: string;
  reviewerDetail: string;
  profileImage: string;
}

const FeebackCard: React.FC<FeebackCardProps> = ({
  stars,
  review,
  highlight,
  reviewerName,
  reviewerDetail,
  profileImage,
}) => {
  return (
    <div className="max-w-[888px] p-12 pb-16 flex flex-col justify-center gap-8 relative rounded-[1.25rem] border-2 border-yellow-900 bg-yellow-700">
      <ReviewStar />
      <p className="text-xl text-secondary-800 font-medium">
        <TextHighlight
          variant="DEFUALT"
          text={review}
          highlightText={highlight}
        />
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={profileImage}
          alt={`${reviewerName}'s profile`}
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
        <div>
          <h5 className="text-2xl font-bold">{reviewerName}</h5>
          <p className="text-secondary-600 font-medium italic">
            {reviewerDetail}
          </p>
        </div>
      </div>
      <span className="absolute bottom-0 right-52 text-yellow-600 text-[18.75rem] leading-[0px] -mb-8 font-source-sans">
        “
      </span>
    </div>
  );
};

export default FeebackCard;
