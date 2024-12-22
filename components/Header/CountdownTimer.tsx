"use client";

import Image from "next/image";
import React from "react";

import landingPageData from "@/data/landingPage/data.json";
import useCountdown from "@/hooks/useCountdown";

const CountdownTimer: React.FC = () => {
  const { countdown } = landingPageData.header;
  const counterData = useCountdown(countdown.endTime);

  return (
    <div className="flex-center gap-3">
      {counterData.map((item, i) => (
        <div key={`timer-unit-${i}`} className="flex-center flex-col">
          <div className="flex-center relative">
            <Image
              src="/assets/icons/timer-bg.svg"
              alt="countdown"
              width={56.95}
              height={54.24}
            />
            <p className="absolute font-source-sans text-3xl font-bold text-orange">
              {item.value}
            </p>
          </div>
          <p className="mt-1 font-source-sans text-sm font-semibold text-secondary-light">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;