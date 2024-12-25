import Image from "next/image";
import React from "react";

import CountdownTimer from "@/components/Header/CountdownTimer";
import landingPageData from "@/data/landingPage/data.json";

const Header = () => {
  const { logo, countdown } = landingPageData.header;

  return (
    <header className="flex-center py-4 md:py-0  max-h-[8.875rem] min-h-[7.25rem] bg-primary-600">
      <main className="md:flex-between flex-center gap-4  md:gap-6 flex-wrap mx-12 w-full max-w-8xl">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={228.16}
          height={84}
          priority
          className="md:h-auto w-auto h-8"
        />
        <div className="md:flex-between flex-center gap-3 flex-wrap md:gap-6 text-xs md:text-lg">
          <div className="flex items-center text-secondary-light">
            <p className="font-bold md:text-start text-center">
              {countdown.heading}
              <span className="ml-2 font-medium">{countdown.subheading}</span>
            </p>
          </div>
          <CountdownTimer />
        </div>
      </main>
    </header>
  );
};

export default Header;
