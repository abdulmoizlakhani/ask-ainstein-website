import React from 'react';

import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from 'react-icons/md';


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
    { label: 'Learn', href: '/learn' },
    { label: 'Co-Teach', href: '/co-teach', comingSoon: true },
    { label: 'Sign Up', href: '/signup' },
    { label: 'Sign In', href: '/signin' }
  ];

  const trustBadges: FooterLink[] = [
    { label: 'SSL certification', href: '/ssl' },
    { label: 'Terms and Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Legal Disclaimer', href: '/legal' }
  ];

  const socialLinks: SocialLink[] = [
    { platform: 'Facebook', href: '#', icon: <FaFacebook
      className="w-5 h-5" /> },
    { platform: 'Youtube', href: '#', icon: <FaYoutube className="w-5 h-5" /> },
    { platform: 'Instagram', href: '#', icon: <FaInstagram className="w-5 h-5" /> },
    { platform: 'LinkedIn', href: '#', icon: <FaLinkedin className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                    {link.comingSoon && (
                      <span className="ml-2 text-xs text-gray-400">(Coming soon)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center space-x-2">
              <MdMailOutline className="w-5 h-5" />
              <a 
                href="mailto:support@askaainstein.com"
                className="hover:text-gray-300 transition-colors"
              >
                support@askaainstein.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  className="hover:text-gray-300 transition-colors"
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trust Badges</h3>
            <ul className="space-y-2">
              {trustBadges.map((badge) => (
                <li key={badge.label}>
                  <a
                    href={badge.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {badge.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            Copyright ©{new Date().getFullYear()} Ask Ainstein. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;