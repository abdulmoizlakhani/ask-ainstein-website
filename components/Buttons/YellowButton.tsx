import React from "react";

const YellowButton = ({ shadow }: { shadow?: boolean }) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`${shadow && "shadow-lg shadow-secondary-600"} bg-yellow-dark rounded-[20px] second-font w-[450px] h-[88px] text-secondary-900 flex justify-center items-center font-semibold text-[28px]`}
      >
        Start Learning Today
      </div>
      <p className="text-secondary-500 text-end">Free for limited time</p>
    </div>
  );
};

export default YellowButton;
