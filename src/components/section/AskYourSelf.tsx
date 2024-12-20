import React from "react";
import MainButton from "../custom/buttons/MainButton";
import HeroReviewCard from "../custom/cards/HeroReviewCard";
import ReviewCard from "../custom/cards/ReviewCard";

const AskYourSelf = () => {
  return (
    <section className="relative pb-[100px] pt-[500px] flex flex-col items-center justify-center">
      {/* <!-- Top One Percent Card --> */}
      <div
        className="bg-white w-full  max-w-[1218px] p-8 rounded-[20px]  absolute top-[-20%] translate-x-[-50%]  left-1/2  text-[#000000] flex justify-center items-center flex-col
      gap-10"
      >
        <p className="text-[#999999] font-bold">Ask Yourself</p>
        <h2 className="text-5xl font-bold text-text-black text-center">
          Do you want to think like the top 1%, or do you want to be like
          everyone else?
        </h2>
        <h5 className="text-[#444444] text-[26px] font-semibold">
          Consistent practice with{" "}
          <span className="text-text-green"> Ask Ainstein</span>, can save you
          several hours and still better prepare you for your examinations.
        </h5>
        <MainButton />
        <HeroReviewCard />
      </div>

      {/* User Review */}
      <ReviewCard
        stars={5}
        review={`My daughter was struggling with math and science, scoring only around 50-55%. It was frustrating for us because we knew she was capable but didn’t know how to help her. After using this platform, we started seeing a big difference. Her understanding improved, and her scores jumped to 85%! She's more confident now. We’re really proud of her progress, and I’m so glad we found this platform.`}
        highlight={
          "After using this platform, we started seeing a big difference."
        }
        reviewerName="Anjali Sharma"
        reviewerDetail="Parent of a Grade 10 Student"
        profileImage="/accets/profileImage/2.jpg"
        backgroundColor="bg-accent-lightYellow"
      />
    </section>
  );
};

export default AskYourSelf;
