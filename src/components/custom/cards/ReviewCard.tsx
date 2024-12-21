import Image from "next/image";
import React from "react";

interface ReviewCardProps {
  stars: number; // Number of stars to display
  review: string; // Review text
  highlight?: string; // Highlighted part of the review
  reviewerName: string; // Name of the reviewer
  reviewerDetail: string; // Detail about the reviewer (e.g., Grade 10 Student)
  profileImage: string; // Path to the reviewer's profile image
  backgroundColor?: string; // Background color of the card
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  stars,
  review,
  highlight,
  reviewerName,
  reviewerDetail,
  profileImage,
  backgroundColor = "bg-megaCard", // Default background color
}) => {
  // Function to highlight the specific text in the review
  const getHighlightedText = (text: string, highlight: string | undefined) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi")); // Split on the highlight word
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="font-semibold text-text-black">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className={`w-[888px] relative flex border-[2px] border-megaCardBorder flex-col justify-center gap-8 rounded-[20px] h-[472px] px-12 ${backgroundColor}`}
    >
      {/* STARS */}
      <div className="flex items-center gap-1">
        {Array.from({ length: stars }).map((_, index) => (
          <Image
            key={index}
            src="/accets/icons/star.svg"
            alt="Star"
            width={28}
            height={28}
          />
        ))}
      </div>
      {/* REVIEW */}
      <p className="text-xl  font-medium">
        "{getHighlightedText(review, highlight)}"
      </p>
      {/* USER DETAIL */}
      <div className="flex items-center gap-4">
        <Image
          src={profileImage}
          alt={`${reviewerName}'s profile`}
          width={100}
          height={100}
          className="rounded-full h-[100px] w-[100px] object-cover"
          objectFit="cover"
        />
        <div className="flex flex-col items-center gap-1">
          <h5 className="text-2xl font-bold">{reviewerName}</h5>
          <p className="text-[#666666] font-medium italic">{reviewerDetail}</p>
        </div>
      </div>
      {/* Absolut quote */}
    </div>
  );
};

export default ReviewCard;
