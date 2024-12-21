import React from "react";
import MainButton from "../buttons/MainButton";
import HeroReviewCard from "./HeroReviewCard";

const DoYouWant = () => {
  return (
    <div
      className="bg-white w-full  max-w-[1218px] p-8 rounded-[20px]    text-[#000000] flex justify-center items-center flex-col
      gap-10"
    >
      <p className="text-[#999999] font-bold">Ask Yourself</p>
      <h2 className="text-5xl font-bold text-text-black w-[90%] tracking-tight text-center">
        Do you want to think like the top 1%, or do you want to be like everyone
        else?
      </h2>
      <h5 className="text-[#444444] text-[26px] font-semibold">
        Consistent practice with{" "}
        <span className="text-text-green"> Ask Ainstein</span>, can save you
        several hours and still better prepare you for your examinations.
      </h5>
      <MainButton />
      <HeroReviewCard />
    </div>
  );
};

export default DoYouWant;
