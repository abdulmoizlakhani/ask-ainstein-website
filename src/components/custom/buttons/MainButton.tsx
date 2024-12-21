import React from "react";

const MainButton = () => {
  return (
    <div className="flex flex-col gap-2">
    <div className="bg-[#FED300] rounded-[20px] second-font w-[450px] h-[88px] text-text-black flex justify-center items-center font-semibold text-[28px]">
      Start Learning Today
    </div>
    <p className="text-text-secondary text-end">Free for limited time</p>
    </div>

  );
};

export default MainButton;
