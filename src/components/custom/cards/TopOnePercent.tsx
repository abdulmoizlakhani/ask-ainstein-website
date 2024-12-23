import React from "react";
import MainButton from "../buttons/MainButton";
import HeroReviewCard from "./HeroReviewCard";

const DoYouWant = () => {
  return (
    <div
      className="bg-white w-full  max-w-[76.125rem] p-14 rounded-[20px] border-dashed border-[2px] border-[#DDDDDD]   text-[#000000] flex justify-center items-center flex-col
      gap-[2rem]"
    >
      <p className="text-[#999999] font-bold text-lg uppercase">Ask Yourself</p>
      <h2 className="text-5xl font-bold text-text-black w-[90%] leading-normal text-center">
        Do you want to think like the{" "}
        <span className="bg-text-bgBlue p-1 rounded">top 1%</span> or do you
        want to be like everyone else?
      </h2>
      <h5 className="text-[#444444] text-[26px] font-semibold">
        Consistent practice with{" "}
        <span className="text-text-green"> Ask Ainstein</span>, can save you
        several hours and still better prepare you for your examinations.
      </h5>
      <MainButton shadow={true} />
      <HeroReviewCard />
    </div>
  );
};

export default DoYouWant;
