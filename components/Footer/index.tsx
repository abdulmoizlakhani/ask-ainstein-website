import Image from "next/image";
import Link from "next/link";
import React from "react";

import data from "@/data/landingPage/data.json";

const Footer = () => {
  const footerData = data.footer;

  return (
    <footer className="bg-secondary-dark p-4">
      <div className="mx-auto  flex max-w-8xl flex-col ">
        <div className="grid grid-cols-2  md:grid-cols-4 gap-6 md:gap-8 py-16">
          {footerData.links.map((section, sectionIndex) => (
            <div className="" key={`${section.title}-${sectionIndex}`}>
              <h3 className="mb-[1.875rem] font-medium md:text-xl text-sm  md:font-semibold text-secondary-light">
                {section.title}
              </h3>
              <ul className="space-y-3 text-xs md:text-xl">
                {section.links.map((link, linkIndex) => (
                  <li key={`footer-menu-${linkIndex}`}>
                    <Link
                      href={link.href}
                      className="flex items-center  gap-3 text-secondary-400"
                    >
                      {link.icon && (
                        <Image
                          src={`/assets/icons/social/${link.icon.src}`}
                          alt={link.icon.alt || link.label}
                          height={link.icon.size}
                          width={link.icon.size}
                          className={` h-4 w-4 md:h-auto md:w-auto`}
                        />
                      )}
                      <p className="text-wrap">{link.label}</p>
                      {link.comingSoon && (
                        <span className="text-[0.625rem] md:text-xs ">
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

        <div className="flex items-center justify-center border-t border-secondary-750 py-8 md:py-10 text-center">
          <p className="text-secondary-400 md:text-xl text-sm">
            {footerData.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
