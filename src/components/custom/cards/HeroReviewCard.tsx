import Image from "next/image";
import React from "react";

const HeroReviewCard = () => {
  return (
    // HERO REVIEW CARD
    <div className="flex h-[128px] max-w-[836px] p-12  bg-[#424242] rounded-[16px] justify-between items-center gap-16">
      {/* LEFT SECTION STARS */}
      <div className="flex justify-center items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={"/accets/icons/star.svg"}
            alt="ask Ainstein"
            width={28}
            height={28}
          />
        ))}
      </div>
      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-2">
        {/* STUDENT IMAGES */}
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`border-4 transform  border-white ${
                index > 0 ? `-ml-3` : ""
              }  rounded-full`}
            >
              <Image
                src={`/accets/hero/studentImage/${index + 1}.jpg`}
                alt="ask Ainstein"
                width={28}
                height={28}
                className="rounded-full h-[28px] w-[28px] "
              />
            </div>
          ))}
        </div>
        {/* PARA */}
        <p className="font-medium ">
          17,643 students are using the platform to improve their learning and
          exam performance using Ask Ainstein platform.
        </p>
      </div>
    </div>
  );
};

export default HeroReviewCard;
