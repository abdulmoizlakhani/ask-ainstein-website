"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import Button from "@/components/Button";
import NavigationMenuFlyout from "@/components/Header/NavigationMenuFlyout";
import landingPageData from "@/data/landingPage/data.json";
import { generateKey } from "@/utils/helpers";

const NavigationMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const links = landingPageData.header.links;
  const buttons = landingPageData.header.buttons;

  return (
    <div className="relative">
      <div className="hidden items-center justify-center gap-8 lg:flex">
        {links.map((link) => (
          <Link
            key={generateKey(link.href)}
            className={`text-xl ${
              pathname === link.href
                ? "font-semibold text-orange underline decoration-orange underline-offset-8"
                : "text-secondary-light"
            }`}
            href={link.href}
          >
            {link.label}
            {link.additionalText && (
              <span className="mx-1 text-base text-secondary-450">
                {link.additionalText}
              </span>
            )}
          </Link>
        ))}
        <div className="flex items-center justify-center gap-6">
          <Button variant="outlined">{buttons.signUp}</Button>
          <Button variant="filled">{buttons.signIn}</Button>
        </div>
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex-center relative"
          aria-label="Toggle menu"
        >
          <Image
            src="/assets/icons/hamburger.svg"
            alt="open menu"
            width={40}
            height={40}
            className="transition-transform duration-200"
          />
        </button>
      </div>

      <NavigationMenuFlyout open={isOpen} onToggle={setIsOpen} />
    </div>
  );
};

export default NavigationMenu;
