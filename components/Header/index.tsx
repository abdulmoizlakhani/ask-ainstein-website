import Image from "next/image";
import React from "react";

import CountdownTimer from "@/components/Header/CountdownTimer";
import landingPageData from "@/data/landingPage/data.json";

const Header = () => {
  const { logo, countdown } = landingPageData.header;

  return (
    <header className="flex-center max-h-[8.875rem] min-h-[7.25rem] bg-primary-600">
      <main className="flex-between mx-12 w-full max-w-8xl">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={228.16}
          height={84}
          priority
        />
        <div className="flex-between gap-6 text-lg">
          <div className="flex items-center text-secondary-light">
            <p className="font-bold">
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
