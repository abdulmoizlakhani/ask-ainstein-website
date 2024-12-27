"use client";

import Image from "next/image";
import React, { useState } from "react";

import CountdownTimer from "@/components/Header/CountdownTimer";
import NavigationMenu from "@/components/Header/NavigationMenu";
import SubHeader from "@/components/Header/SubHeader";
import landingPageData from "@/data/landingPage/data.json";

interface HeaderContainerProps {
  isCounterEnded: boolean;
  children: React.ReactNode;
}

const HeaderContainer = ({
  isCounterEnded,
  children,
}: HeaderContainerProps) => {
  return isCounterEnded ? (
    <header className="flex-center relative h-20 bg-primary-600 px-4 md:h-24 md:px-8 lg:h-[7.25rem]">
      <main className="flex-between w-full max-w-[95.625rem]">{children}</main>
    </header>
  ) : (
    <header className="flex-center relative h-[8.875rem] bg-primary-600 px-4 md:px-8 lg:h-[7.25rem]">
      <main className="sm:flex-between flex-center w-full max-w-8xl flex-col py-14 md:flex-row md:gap-6">
        {children}
      </main>
      <div className="absolute bottom-0 left-auto w-[95%] max-w-8xl border border-silver-100 opacity-20 lg:w-full" />
    </header>
  );
};

const Header = () => {
  const [isCounterEnded, setCounterEnded] = useState(false);
  const { logo, countdown } = landingPageData.header;

  const handleCounterEnded = (status: boolean) => {
    setCounterEnded(status);
  };

  return (
    <>
      {isCounterEnded && <SubHeader />}
      <HeaderContainer isCounterEnded={isCounterEnded}>
        <Image
          src={logo.src}
          alt={logo.alt}
          width={228.16}
          height={84}
          priority
          className="h-14 w-auto md:h-auto"
        />
        {!isCounterEnded ? (
          <div className="flex flex-1 flex-col items-center justify-end text-xs md:text-lg lg:flex-row lg:gap-6">
            <p className="mb-2 text-center font-bold text-secondary-light md:text-start">
              {countdown.heading}
              <span className="ml-2 font-medium">{countdown.subheading}</span>
            </p>
            <CountdownTimer handleCounterEnded={handleCounterEnded} />
          </div>
        ) : (
          <NavigationMenu />
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
