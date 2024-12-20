"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import timediff from "timediff";

// Define props types for better TypeScript support
interface CountdownTimerProps {
  setRemain: (remain: boolean) => void;
  valueClassName: string;
  titleClassName: string;
  gap: string;
  endTime: string;
  img: string;
  imageSize: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  setRemain,
  valueClassName,
  titleClassName,
  gap,
  endTime,
  img,
  imageSize,
}) => {
  // State to store the time remaining
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(endTime); // Convert endTime to a Date object

    // Function to calculate and update the remaining time
    const updateCountdown = () => {
      const remainTime = timediff(new Date(), targetDate); // Get time difference
      // If countdown is complete, update the `setRemain` state
      if (
        remainTime.days <= 0 &&
        remainTime.hours <= 0 &&
        remainTime.minutes <= 0 &&
        remainTime.seconds <= 0
      ) {
        setRemain(false); // Set countdown as complete
      } else {
        setRemain(true); // Countdown still active
        setTimeRemaining({
          days: remainTime.days,
          hours: remainTime.hours,
          minutes: remainTime.minutes,
          seconds: remainTime.seconds,
        });
      }
    };

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Data structure for countdown elements
  const counterData = [
    { id: 1, title: "DAYS", value: timeRemaining.days },
    { id: 2, title: "HOURS", value: timeRemaining.hours },
    { id: 3, title: "MINUTES", value: timeRemaining.minutes },
    { id: 4, title: "SECONDS", value: timeRemaining.seconds },
  ];

  return (
    <div className={`flex justify-center items-center ${gap}`}>
      {/* Render each countdown unit */}
      {counterData.map((item) => (
        <div key={item.id} className="flex justify-center items-center flex-col">
          {/* Countdown Value with Background Image */}
          <div className="relative flex justify-center items-center">
            <Image
              className={`w-[${imageSize}px] h-[${imageSize}px]`}
              src={img}
              alt="countdown"
              width={imageSize}
              height={imageSize}
            />
            {/* Display the countdown value */}
            <p className={`absolute ${valueClassName}`}>{item.value}</p>
          </div>
          {/* Display the title for each countdown unit */}
          <h2 className={`${titleClassName}`}>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
