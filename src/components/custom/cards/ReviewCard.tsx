import Image from "next/image";
import React from "react";

const ReviewCard = () => {
  return (
    // REVIEW CARD
    <div className="w-[888px] flex flex-col justify-center  gap-8 rounded-[20px] h-[480px] px-12 bg-accent-lightYellow">
      {/* STARS */}
      <div className="flex items-center gap-1">
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
      {/* REVIEW */}
      <p className="text-[20px] font-medium">
        "I used to score only 50-55% in math and science, and it created a lot
        of stress at home. My parents were always worried, and I felt stuck.
        This platform helped me figure out where I was making mistakes and how
        to fix them. After a few weeks, my score improved to 85%! My parents
        were so <span className="font-semibold">PROUD</span>, and things at home are much better now. Even my teachers
        noticed the change and appreciated my hard work. I finally feel
        confident in my studies."
      </p>
      {/* USER DETAIL */}
      <div className="flex items-center gap-4">
        <Image
          src="/accets/cruasal/reviewProfile.jpg"
          alt="prfile image"
          width={100}
          height={100}
          className="rounded-full h-[100px] w-[100px] object-cover"
        />
        <div className="flex flex-col items-center gap-1">
          <h5 className="text-2xl font-bold">Riya Sharma</h5>
          <p className="text-[#666666] font-medium">Grade 10 Student</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
