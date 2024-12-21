"use client";

import React, { useState } from "react";
import CountdownTimer from "../custom/Timer";
import SubHeader from "./SubHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";
import landingPageData from "@/data/landingPage/data.json"; // Import JSON data

const Header = () => {
  const [remainTime, setRemainTime] = useState(true);
  const pathname = usePathname();

  // Extract the header data from JSON
  const { logo, countdown, links, buttons } = landingPageData.header;

  return (
    <>
      {/* SubHeader displayed only when remainTime is false */}
      {remainTime === false && <SubHeader />}
      <header className="bg-accent-brown">
        <div className="mx-auto lg:max-w-8xl min-h-[7.25rem] gap-4 justify-center flex-wrap w-full flex lg:justify-between items-center">
          {/* Logo Section */}
          <img
            className="object-contain"
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={200}
          />

          {/* Conditional Rendering: Countdown Timer or Navigation Links */}
          {remainTime ? (
            <div className="flex justify-center text-lg items-center gap-6 flex-wrap">
              <div className="flex tracking-tight items-center gap-4 text-[#FFFFFF]">
                <p className="font-bold">{countdown.heading}</p>
                <p className="font-medium">{countdown.subheading}</p>
              </div>
              <CountdownTimer
                gap="gap-3"
                endTime={countdown.endTime}
                imageSize={54}
                img={countdown.image}
                valueClassName="text-[#FF9D33] text-[28px] font-bold"
                titleClassName="text-text-primary text-[13px] font-semibold second-font"
                setRemain={setRemainTime}
              />
            </div>
          ) : (
            <div className="flex justify-between items-center gap-8">
              {/* Navigation Links */}
              <div className="flex justify-center items-center gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    className={`text-xl ${
                      pathname === link.href
                        ? "font-semibold text-[#FF9D33] underline-offset-8 underline decoration-[#FF9D33]"
                        : "text-text-primary"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                    {link.additionalText && (
                      <span className="text-text-secondary">
                        {link.additionalText}
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-center items-center gap-6">
                <button className="text-accent-green border-accent-green border-2 w-[110px] h-[50px] flex justify-center rounded-[10px] font-semibold items-center">
                  {buttons.signUp}
                </button>
                <button className="bg-accent-green w-[110px] rounded-[10px] h-[50px] flex justify-center font-semibold text-primary items-center">
                  {buttons.signIn}
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
