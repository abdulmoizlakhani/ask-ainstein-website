"use client";

import React, { useState } from "react";
import CountdownTimer from "../custom/Timer";

const SubHeader = () => {
  // State to manage whether the Countdown Timer and SubHeader are visible
  const [remainTime, setRemainTime] = useState(true);

  return (
    <>
      {/* Render SubHeader only if remainTime is true */}
      {remainTime === true && (
        <div className="flex justify-center items-center gap-4">
          {/* SubHeader Message */}
          <div className="bg-bg-sub py-2 text-[#000000] tracking-tight flex justify-center items-center font-semibold text-lg">
            {/* Highlighted text parts */}
            Your <span className="text-[#0094C9] mx-1"> first 200 </span>
            credits are FREE to explore and improve. Share your
            <span className="text-[#0094C9] mx-1"> feedback </span> and help us
            make the platform even better for you!
          </div>

          {/* Countdown Timer Component */}
          <CountdownTimer
            gap={"gap-1"} // Gap between timer units
            endTime="2024-12-20T00:00:00" // Countdown end date and time
            imageSize={24} // Size of timer icons/images
            img="/accets/timer/subHeader.svg" // Path to timer image
            valueClassName="text-[#F4658C] second-font text-[12px] font-bold" // Styling for timer values
            titleClassName="text-text-black text-[6px] font-semibold second-font" // Styling for timer labels
            setRemain={setRemainTime} // Callback to update remainTime state
          />
        </div>
      )}
    </>
  );
};

export default SubHeader;
