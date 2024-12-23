import React from "react";
import data from "@/data/landingPage/data.json";
import Message from "../custom/icons/Message";
import Facebook from "../custom/icons/Facebook";
import Youtube from "../custom/icons/Youtube";
import Instagram from "../custom/icons/Instagram";
import Linkdin from "../custom/icons/Linkdin";

const iconComponents: Record<string, React.ReactNode> = {
  Facebook: <Facebook />,
  Youtube: <Youtube />,
  Instagram: <Instagram />,
  Linkdin: <Linkdin />,
};

const Footer = () => {
  const { quickLinks, trustBadges, socialLinks } = data.footer;

  return (
    <footer className="bg-black ">
      <div className="max-w-8xl  min-h-[27.375rem] flex h-full flex-col  mx-auto px-4 ">
        <div className="grid grid-cols-1 py-[4rem] text-xl md:grid-cols-4 ">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-text-primary mb-[30px]">
              Quick Links
            </h3>
            <ul className="space-y-[25px]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#D2D2D2] transition-colors"
                  >
                    {link.label}
                    {link.comingSoon && (
                      <span className="ml-2 text-sm ">(Coming soon)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-text-primary mb-[30px]">
              Contact Information
            </h3>
            <div className="flex items-center text-[#D2D2D2] gap-3">
              <Message />

              <a
                href="mailto:support@askaainstein.com"
                className=" transition-colors"
              >
                support@askaainstein.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-text-primary mb-[30px]">
              Social Media
            </h3>
            <div className="flex flex-col gap-[2rem] items-start">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  className="text-[#D2D2D2] transition-colors flex items-center gap-3"
                  aria-label={social.platform}
                >
                  <div className="h-7">{iconComponents[social.icon]}</div>
                  <p>{social.platform}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div>
            <h3 className="font-semibold text-text-primary mb-[30px]">
              Trust Badges
            </h3>
            <ul className="space-y-[25px]">
              {trustBadges.map((badge) => (
                <li key={badge.label}>
                  <a
                    href={badge.href}
                    className="text-[#D2D2D2] transition-colors"
                  >
                    {badge.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#535353] py-[2rem] text-[20px] flex justify-center h-full items-center text-center">
          <p className="text-[#D2D2D2]">
            Copyright ©{new Date().getFullYear()} Ask Ainstein. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
