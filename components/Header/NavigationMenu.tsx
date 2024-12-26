import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import landingPageData from "@/data/landingPage/data.json";

const NavigationMenu = ({ pathname }: { pathname: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const links = landingPageData.header.links;
  const buttons = landingPageData.header.buttons;

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="justify-center hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            className={`text-xl ${
              pathname === link.href
                ? "font-semibold text-orange underline-offset-8 underline decoration-orange"
                : "text-secondary-light"
            }`}
            href={link.href}
          >
            {link.label}
            {link.additionalText && (
              <span className="text-secondary-450 mx-1 text-base">
                {link.additionalText}
              </span>
            )}
          </Link>
        ))}
        <div className="flex justify-center items-center gap-6">
          <Button variant="outlined">{buttons.signUp}</Button>
          <Button variant="filled">{buttons.signIn}</Button>
        </div>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative"
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

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 z-20 right-0 h-full w-[80%] max-w-md bg-primary-600 shadow-xl transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button at Top */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 z-50"
            aria-label="Close menu"
          >
            <Image
              src="/assets/icons/close.svg"
              alt="close menu"
              width={20}
              height={20}
              className="transition-transform duration-200"
            />
          </button>

          <div className="flex flex-col h-full pt-24 px-6">
            <div className="flex flex-col gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className={`text-xl transition-colors duration-200 ${
                    pathname === link.href
                      ? "font-semibold text-orange underline-offset-8 underline decoration-orange"
                      : "text-secondary-light hover:text-orange"
                  }`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  {link.additionalText && (
                    <span className="text-secondary-450 mx-1 text-base">
                      {link.additionalText}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <Button variant="outlined" onClick={() => setIsOpen(false)}>
                {buttons.signUp}
              </Button>
              <Button variant="filled" onClick={() => setIsOpen(false)}>
                {buttons.signIn}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
