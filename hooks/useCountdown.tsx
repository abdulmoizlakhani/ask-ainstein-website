"use client";

import { useCallback, useEffect, useState } from "react";

const addZero = (num: number) => (num < 10 ? `0${num}` : num);

const useCountdown = (endDate: string) => {
  const [isCounterEnded, setCounterEnded] = useState(false);
  const [counterData, setCounterData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const startCountdown = useCallback(() => {
    const current = new Date().getTime();
    const endingDate = new Date(endDate).getTime();

    if (isNaN(current) || isNaN(endingDate)) {
      throw new Error("Invalid date format. Please provide valid dates.");
    }

    // Calculate the difference in milliseconds
    const diffInMs = endingDate - current;

    // Handle negative differences (when end date is earlier than current date)
    if (diffInMs < 0) {
      setCounterEnded(true);
      throw new Error("End date must be later than the current date.");
    }

    // Constants for time calculations
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;

    // Calculate time differences
    const days = Math.floor(diffInMs / msInDay);
    const hours = Math.floor((diffInMs % msInDay) / msInHour);
    const minutes = Math.floor((diffInMs % msInHour) / msInMinute);
    const seconds = Math.floor((diffInMs % msInMinute) / msInSecond);

    setCounterData({ days, hours, minutes, seconds });
  }, [endDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      startCountdown();
    }, 1000);

    return () => clearInterval(interval);
  }, [startCountdown]);

  return {
    isCounterEnded,
    counterData: [
      { title: "DAYS", value: addZero(counterData.days) },
      { title: "HOURS", value: addZero(counterData.hours) },
      { title: "MINUTES", value: addZero(counterData.minutes) },
      { title: "SECONDS", value: addZero(counterData.seconds) },
    ],
  };
};

export default useCountdown;
