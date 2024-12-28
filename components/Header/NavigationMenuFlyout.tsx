import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import Button from "@/components/Button";
import landingPageData from "@/data/landingPage/data.json";
import { generateKey } from "@/utils/helpers";

interface NavigationMenuFlyoutProps {
  open: boolean;
  onToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationMenuFlyout = (props: NavigationMenuFlyoutProps) => {
  const { open, onToggle } = props;
  const pathname = usePathname();

  const links = landingPageData.header.links;
  const buttons = landingPageData.header.buttons;

  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => onToggle(false)}
      />

      {open && (
        <div
          className={`fixed right-0 top-0 z-20 h-full w-4/5 max-w-md bg-primary-600 shadow-xl transition-transform duration-300 ease-in-out lg:hidden${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => onToggle(false)}
            className="absolute right-6 top-6 z-50"
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

          <div className="flex h-full flex-col px-6 pt-24">
            <div className="flex flex-col gap-8">
              {links.map((link) => (
                <Link
                  key={generateKey(link.href)}
                  className={`text-xl transition-colors duration-200 ${
                    pathname === link.href
                      ? "font-semibold text-orange underline decoration-orange underline-offset-8"
                      : "text-secondary-light hover:text-orange"
                  }`}
                  href={link.href}
                  onClick={() => onToggle(false)}
                >
                  {link.label}
                  {link.additionalText && (
                    <span className="mx-1 text-base text-secondary-450">
                      {link.additionalText}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <Button variant="outlined" onClick={() => onToggle(false)}>
                {buttons.signUp}
              </Button>
              <Button variant="filled" onClick={() => onToggle(false)}>
                {buttons.signIn}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationMenuFlyout;
