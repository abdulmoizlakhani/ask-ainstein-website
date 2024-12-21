import React from "react";

import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Message from "../custom/icons/Message";
import Facebook from "../custom/icons/Facebook";
import Youtube from "../custom/icons/Youtube";
import Instagram from "../custom/icons/Instagram";
import Linkdin from "../custom/icons/Linkdin";

interface FooterLink {
  label: string;
  href: string;
  comingSoon?: boolean;
}

interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

const Footer = () => {
  const quickLinks: FooterLink[] = [
    { label: "Learn", href: "/learn" },
    { label: "Co-Teach", href: "/co-teach", comingSoon: true },
    { label: "Sign Up", href: "/signup" },
    { label: "Sign In", href: "/signin" },
  ];

  const trustBadges: FooterLink[] = [
    { label: "SSL certification", href: "/ssl" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Legal Disclaimer", href: "/legal" },
  ];

  const socialLinks: SocialLink[] = [
    {
      platform: "Facebook",
      href: "#",
      icon: <Facebook />,
    },
    { platform: "Youtube", href: "#", icon: <Youtube/> },
    {
      platform: "Instagram",
      href: "#",
      icon: <Instagram />,
    },
    {
      platform: "LinkedIn",
      href: "#",
      icon: <Linkdin />,
    },
  ];

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
                      <span className="ml-2 text-gray-400">(Coming soon)</span>
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
              <Message/>

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
                  
                  <div className="h-7">{social.icon}</div><p>{social.platform}</p>
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
        <div className="border-t border-gray-800 py-[2rem] text-[20px] flex justify-center h-full items-center text-center">
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
