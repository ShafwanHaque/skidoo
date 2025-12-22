"use client";
import { assets, personalInfo } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterProps = {
  isDarkMode: boolean;
};

const socialLinks = [
  {
    name: "GitHub",
    url: personalInfo.github,
    icon: "fa-brands fa-github",
    ariaLabel: "Visit GitHub profile",
  },
  {
    name: "LinkedIn",
    url: personalInfo.linkedin,
    icon: "fa-brands fa-linkedin",
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    name: "Resume",
    url: personalInfo.resume,
    icon: "fa fa-file-alt",
    ariaLabel: "Download resume",
  },
];

const Footer = ({ isDarkMode }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`mt-20 pt-12 pb-6 ${
        isDarkMode ? "bg-black" : "bg-gray-50"
      }`}
      role="contentinfo"
    >
      <div className="text-center px-[5%]">
        {/* Logo */}
        <Link href="#home" aria-label="Go to home section">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt={`${personalInfo.name} logo`}
            className="w-36 mx-auto mb-4"
            width={144}
            height={36}
          />
        </Link>

        {/* Email */}
        <Link
          href={`mailto:${personalInfo.email}`}
          className={`inline-flex items-center gap-2 mb-8 transition-colors ${
            isDarkMode
              ? "text-gray-300 hover:text-cyan-400"
              : "text-gray-700 hover:text-purple-600"
          }`}
          aria-label={`Send email to ${personalInfo.email}`}
        >
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <span>{personalInfo.email}</span>
        </Link>

        {/* Divider */}
        <div
          className={`border-t mx-[10%] mt-8 ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
        />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mx-[10%] mt-6 gap-6">
          {/* Social Links */}
          <ul
            className="flex items-center gap-6 justify-center"
            role="list"
            aria-label="Social media links"
          >
            {socialLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-colors ${
                    isDarkMode
                      ? "text-gray-300 hover:text-cyan-400"
                      : "text-gray-700 hover:text-purple-600"
                  }`}
                  aria-label={link.ariaLabel}
                >
                  <i className={link.icon} aria-hidden="true"></i>
                </Link>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Tagline */}
        <p
          className={`mt-6 text-sm font-ovo ${
            isDarkMode ? "text-gray-500" : "text-gray-500"
          }`}
        >
          skidoo || passionate
        </p>
      </div>
    </footer>
  );
};

export default Footer;