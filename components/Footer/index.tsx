import Image from "next/image";
import React from "react";

import data from "@/data/landingPage/data.json";

const Footer = () => {
  const footerData = data.footer;

  return (
    <footer className="bg-secondary-dark">
      <div className="mx-auto flex max-w-8xl flex-col text-xl">
        <div className="flex justify-between gap-8 py-16">
          {footerData.links.map((section, sectionIndex) => (
            <div key={`${section.title}-${sectionIndex}`}>
              <h3 className="mb-[1.875rem] font-semibold text-secondary-light">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={`footer-menu-${linkIndex}`}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-secondary-400"
                    >
                      {link.icon && (
                        <Image
                          src={`/assets/icons/social/${link.icon.src}`}
                          alt={link.icon.alt || link.label}
                          height={link.icon.size}
                          width={link.icon.size}
                        />
                      )}
                      {link.label}
                      {link.comingSoon && (
                        <span className="text-sm">{link.comingSoonText}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center border-t border-secondary-750 py-10 text-center">
          <p className="text-secondary-400">{footerData.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
