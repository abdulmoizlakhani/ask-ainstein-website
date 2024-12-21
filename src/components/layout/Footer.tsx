import React from "react";

import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

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
      icon: <FaFacebook className="w-5 h-5" />,
    },
    { platform: "Youtube", href: "#", icon: <FaYoutube className="w-5 h-5" /> },
    {
      platform: "Instagram",
      href: "#",
      icon: <FaInstagram className="w-5 h-5" />,
    },
    {
      platform: "LinkedIn",
      href: "#",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-black  min-h-[27.375rem]">
      <div className="max-w-8xl flex flex-col  mx-auto px-4 ">
        <div className="grid grid-cols-1 py-[4rem] text-xl md:grid-cols-4 ">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-text-primary mb-[30px]">
              Quick Links
            </h3>
            <ul className="space-y-2">
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
            <h3 className="font-semibold text-text-primary mb-4">
              Contact Information
            </h3>
            <div className="flex items-center space-x-2">
              <MdMailOutline className="w-5 h-5" />
              <a
                href="mailto:support@askaainstein.com"
                className="text-[#D2D2D2] transition-colors"
              >
                support@askaainstein.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">
              Social Media
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  className="text-[#D2D2D2] transition-colors"
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">
              Trust Badges
            </h3>
            <ul className="space-y-2">
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
        <div className="mt-2 border-t border-gray-800 flex justify-center items-center text-center">
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
