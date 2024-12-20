"use client";

import React, { useState } from "react";
import CountdownTimer from "../custom/Timer";
import SubHeader from "./SubHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  // State to manage the visibility of SubHeader or Countdown Timer
  const [remainTime, setRemainTime] = useState(true);
console.log("header",remainTime)
  // Get the current pathname using Next.js navigation
  const pathname = usePathname();

  return (
    <>
      {/* Render SubHeader component only when remainTime is false */}
      {remainTime === false && <SubHeader />}

      {/* Main Header */}
      <header className="bg-[#0C2E16]">
        <div className="mx-auto lg:max-w-8xl h-[116px] gap-4 justify-center flex-wrap w-full px-4 sm:px-16 flex lg:justify-between items-center">
          
          {/* Logo Section */}
          <img
            className="object-contain"
            src={"/accets/hero/logo.jpg"}
            alt="ask Ainstein"
            width={200}
            height={200}
          />

          {/* Conditional rendering of Countdown Timer or Navigation Links */}
          {remainTime === true ? (
            // Countdown Timer Section
            <div className="flex justify-center text-lg items-center gap-6 flex-wrap">
              <div className="flex tracking-tight items-center gap-2 text-[#FFFFFF]">
                {/* Timer heading */}
                <p className="font-bold">The Wait is Almost Over!</p>
                <p>Our Beta Version Goes Live In</p>
              </div>

              {/* Countdown Timer Component */}
              <CountdownTimer
                gap={"gap-3"}
                endTime="2024-12-21T00:30:00"
                imageSize={54}
                img="/accets/timer/mainHeader.svg"
                valueClassName="text-[#FF9D33] text-[28px] font-bold"
                titleClassName="text-text-primary text-[13px] font-semibold second-font"
                setRemain={setRemainTime} // Callback to update remainTime
              />
            </div>
          ) : (
            // Navigation Links Section (displayed after Countdown ends)
            <div className="flex justify-between items-center gap-8">
              <div className="flex justify-center items-center gap-4">
                {/* Link to Learn page */}
                <Link
                  className={` text-xl ${
                    pathname === "/"
                      ? "font-semibold text-[#FF9D33] underline-offset-8 underline decoration-[#FF9D33]"
                      : "text-text-primary"
                  }`}
                  href="/"
                >
                  Learn
                </Link>

                {/* Link to Co-Teach page */}
                <Link
                  className={` text-xl ${
                    pathname === "/co-teach"
                      ? "font-semibold text-[#FF9D33] underline-offset-[12px] underline decoration-[#FF9D33]"
                      : "text-text-primary"
                  }`}
                  href="/co-teach"
                >
                  Co-Teach{" "}
                  <span className="text-text-secondary">{"(coming soon)"}</span>
                </Link>
              </div>

              {/* Sign Up and Sign In Buttons */}
              <div className="flex justify-center items-center gap-6">
                <button className="text-accent-green border-accent-green border-2 w-[110px] h-[50px] flex justify-center rounded-[10px] font-semibold items-center">
                  Sign Up
                </button>
                <button className="bg-accent-green w-[110px] rounded-[10px] h-[50px] flex justify-center font-semibold text-primary items-center">
                  Sign in
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
