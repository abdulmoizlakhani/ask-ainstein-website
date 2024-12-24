import { TextHighlight } from "@/components/ui/TextHighlisht";
import Image from "next/image";
import React from "react";
import ReviewStar from "../ReviewStar";

interface FeebackCardProps {
  review: string;
  highlight?: string;
  reviewerName?: string;
  reviewerDetail?: string;
  profileImage: string;
  variant?: "primary" | "secondary";
}

const FeebackCard: React.FC<FeebackCardProps> = ({
  review,
  highlight,
  reviewerName,
  reviewerDetail,
  profileImage,
  variant = "primary",
}) => {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`
        ${isPrimary ? "max-w-[888px] p-12 pb-16 flex flex-col gap-8 border-2 border-yellow-900 bg-yellow-700" : "h-[128px] max-w-[836px] p-12 bg-secondary-700 text-secondary-light flex items-center gap-16"}
        rounded-${isPrimary ? "[1.25rem]" : "2xl"}
        relative justify-${isPrimary ? "center" : "between"}`}
    >
      <ReviewStar />
      {/* reviewer people image */}
      <div className={`${!isPrimary ? "flex flex-col gap-2" : ""}`}>
        {variant === "secondary" && (
          <Image
            src={profileImage}
            alt={`${reviewerName}'s profile`}
            width={120}
            height={28}
          />
        )}

        <p
          className={`font-medium ${isPrimary ? "text-xl text-secondary-800" : ""}`}
        >
          <TextHighlight
            variant="DEFUALT"
            text={review}
            highlightText={highlight}
          />
        </p>
      </div>

      {isPrimary && (
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
      )}

      {isPrimary && (
        <span className="absolute bottom-0 right-52 text-yellow-600 text-[18.75rem] leading-[0px] -mb-8 font-source-sans">
          “
        </span>
      )}
    </div>
  );
};

export default FeebackCard;
