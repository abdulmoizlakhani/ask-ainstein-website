import Image from "next/image";
import Link from "next/link";
import React from "react";

import landingPageData from "@/data/landingPage/data.json";
import { generateKey } from "@/utils/helpers";

const Footer = () => {
  const footerData = landingPageData.footer;

  const dataPlacements: { [x: string]: string } = {
    start: "justify-self-start md:justify-self-start",
    center: "justify-self-start md:justify-self-center",
    end: "justify-self-start md:justify-self-end",
  };

  const placementoOrder: { [x: string]: string } = {
    1: "order-1 md:order-1",
    2: "order-4 md:order-2",
    3: "order-3 md:order-3",
    4: "order-2 md:order-4",
  };

  return (
    <footer className="overflow-hidden bg-secondary-dark px-4 md:px-8">
      <div className="mx-auto flex max-w-8xl flex-col">
        <div className="grid grid-cols-2 gap-y-6 py-14 md:grid-cols-4">
          {footerData.links.map((section) => (
            <div
              className={`${dataPlacements[section.placement]} ${placementoOrder[section.order]}`}
              key={`footer-menu-${generateKey(section.title)}`}
            >
              <h3 className="mb-3 text-sm font-medium text-secondary-light md:mb-5 md:text-xl md:font-semibold">
                {section.title}
              </h3>
              <ul className="space-y-3 text-xs md:text-xl">
                {section.links.map((link) => (
                  <li key={`footer-menu-links-${generateKey(link.label)}`}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-secondary-400"
                    >
                      {link.icon && (
                        <Image
                          src={`/assets/icons/social/${link.icon.src}`}
                          alt={link.icon.alt || link.label}
                          height={link.icon.size}
                          width={link.icon.size}
                          className="size-4 md:size-auto"
                        />
                      )}
                      <p className="break-all">{link.label}</p>
                      {link.comingSoon && (
                        <span className="text-[0.625rem] md:text-xs">
                          {link.comingSoonText}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center border-t border-secondary-750 py-8 text-center">
          <p className="font-source-sans text-xs text-secondary-400 md:text-xl">
            {footerData.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
