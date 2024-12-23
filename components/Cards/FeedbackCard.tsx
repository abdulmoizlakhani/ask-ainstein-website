import Image from "next/image";
import React from "react";

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
  const getHighlightedText = (text: string, highlight?: string) =>
    !highlight
      ? text
      : text.split(new RegExp(`(${highlight})`, "gi")).map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="font-semibold text-secondary-900">
              {part}
            </span>
          ) : (
            part
          )
        );

  return (
    <div className="w-[888px] h-[472px] flex flex-col justify-center gap-8 px-12 relative rounded-[20px] border-[2px] border-secondary-900 bg-yellow-light">
      <div className="flex gap-1">
        {Array.from({ length: stars }, (_, i) => (
          <Image
            key={i}
            src="/accets/icons/star.svg"
            alt="Star"
            width={28}
            height={28}
          />
        ))}
      </div>
      <p className="text-xl text-secondary font-medium">
        "{getHighlightedText(review, highlight)}"
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={profileImage}
          alt={`${reviewerName}'s profile`}
          width={100}
          height={100}
          className="rounded-full h-[100px] w-[100px] object-cover"
        />
        <div>
          <h5 className="text-2xl font-bold">{reviewerName}</h5>
          <p className="text-secondary-600 font-medium italic">
            {reviewerDetail}
          </p>
        </div>
      </div>
      <span className="absolute bottom-0 right-52 text-yellow-light text-[18.75rem] leading-[0px] -mb-8 second-font">
        “
      </span>
    </div>
  );
};

export default FeebackCard;
