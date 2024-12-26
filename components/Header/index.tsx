"use client";

import Image from "next/image";
import React, { useState } from "react";

import CountdownTimer from "@/components/Header/CountdownTimer";
import NavigationMenu from "@/components/Header/NavigationMenu";
import SubHeader from "@/components/Header/SubHeader";
import landingPageData from "@/data/landingPage/data.json";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isCounterEnded, setCounterEnded] = useState(false);
  const { logo, countdown } = landingPageData.header;
  const pathname = usePathname();

  const handleCounterEnded = (status: boolean) => {
    setCounterEnded(status);
  };

  return (
    <>
      {isCounterEnded && <SubHeader />}
      <header className="flex-center relative h-[8.875rem] bg-primary-600 px-4 md:px-8 lg:h-[7.25rem]">
        {!isCounterEnded && (
          <main className="flex-between  w-full max-w-8xl  py-14 md:flex-row md:gap-6">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={228.16}
              height={84}
              priority
              className="h-14 w-auto md:h-auto"
            />
            <NavigationMenu pathname={pathname} />
          </main>
        )}

        {isCounterEnded && (
          <main className="flex-center flex-col md:flex-between  w-full max-w-8xl  py-14 md:flex-row md:gap-6">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={228.16}
              height={84}
              priority
              className="h-14 w-auto md:h-auto"
            />
            <div className="flex flex-1 flex-col items-center justify-end text-xs md:text-lg lg:flex-row lg:gap-6">
              <p className="mb-2 text-center font-bold text-secondary-light md:text-start">
                {countdown.heading}
                <span className="ml-2 font-medium">{countdown.subheading}</span>
              </p>
              <CountdownTimer handleCounterEnded={handleCounterEnded} />
            </div>
          </main>
        )}
        <div className="absolute bottom-0 left-auto w-[95%] max-w-8xl border border-silver-100 opacity-20 lg:w-full" />
      </header>
    </>
  );
};

export default Header;
