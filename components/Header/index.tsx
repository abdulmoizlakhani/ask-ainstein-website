import Image from "next/image";
import React from "react";

import CountdownTimer from "@/components/Header/CountdownTimer";
import landingPageData from "@/data/landingPage/data.json";

const Header = () => {
  const { logo, countdown } = landingPageData.header;

  return (
    <header className="flex-center relative h-[8.875rem] bg-primary-600 px-4 md:px-8 lg:h-[7.25rem]">
      <main className="sm:flex-between flex-center w-full max-w-8xl flex-col py-14 md:flex-row md:gap-6">
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
          <CountdownTimer />
        </div>
      </main>
      <div className="absolute bottom-0 left-auto w-[95%] max-w-8xl border border-silver-100 opacity-20 lg:w-full" />
    </header>
  );
};

export default Header;
