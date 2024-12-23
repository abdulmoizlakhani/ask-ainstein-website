import React from "react";
import data from "@/data/landingPage/data.json";
import Image from "next/image";

const Footer = () => {
  const footerData = data.footer;

  return (
    <footer className="bg-black">
      <div className="max-w-8xl min-h-[27.375rem] flex flex-col mx-auto px-4">
        <div className="flex justify-between py-[4rem] text-xl gap-8">
          {footerData.map((section, sectionIndex) => (
            <div key={`${section.title}-${sectionIndex}`}>
              <h3 className="font-semibold text-secondary-light mb-[30px]">
                {section.title}
              </h3>
              <ul className="space-y-[25px]">
                {section.links.map((link, linkIndex) => (
                  <li key={`${'platform' in link ? link.platform : link.label}-${linkIndex}`}>
                    <a
                      href={link.href || "#"}
                      className="text-[#D2D2D2] transition-colors flex items-center gap-3"
                    >
                      {"icon" in link && (
                        <Image
                          src={`/assets/icons/social/${link.icon.src}`}
                          alt={link.icon.alt || ('label' in link ? link.label : link.platform)}
                          height={link.icon.size}
                          width={link.icon.size}
                        />
                      )}
                      {"platform" in link ? link.platform : link.label}
                      {"comingSoon" in link && link.comingSoon && (
                        <span className="ml-2 text-sm">(Coming soon)</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#535353] py-[2rem] text-[20px] flex justify-center items-center text-center">
          <p className="text-[#D2D2D2]">
            Copyright ©{new Date().getFullYear()} Ask Ainstein. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
