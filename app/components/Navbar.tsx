"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import headerBg from "@/assets/header-bg-color.png";
import { assets, navigationLinks, personalInfo } from "@/assets/assets";
import MobileNav from "./MobiileNav";
import Link from "next/link";

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  // Track active section based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get navigation link classes
  const getNavClass = (hash: string) => {
    const isActive = activeHash === hash;
    const baseClass = "font-ovo transition-colors duration-300";

    if (isActive) {
      return `${baseClass} font-semibold ${
        isDarkMode ? "text-cyan-400" : "text-purple-600"
      }`;
    }

    return `${baseClass} ${
      isDarkMode
        ? "text-gray-300 hover:text-cyan-400"
        : "text-gray-700 hover:text-purple-600"
    }`;
  };

  return (
    <>
      {/* Background Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Header Background Decoration */}
      <div
        className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ${
          isDarkMode ? "hidden" : ""
        }`}
        aria-hidden="true"
      >
        <Image
          src={headerBg}
          alt=""
          priority
          className="w-full"
        />
      </div>

      {/* Navigation Bar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-xl shadow-sm" : ""
        } ${isDarkMode && isScrolled ? "shadow-white/20" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div>
          <Link href="#home" aria-label="Go to home section">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              className="w-28 md:w-40 cursor-pointer"
              alt={`${personalInfo.name} logo`}
              width={160}
              height={40}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
            isScrolled ? "" : "shadow-sm"
          } ${isDarkMode && !isScrolled ? "shadow-white/20" : ""}`}
        >
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link className={getNavClass(link.href)} href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="cursor-pointer p-2 rounded-full transition-colors"
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {!isDarkMode ? (
              <i className="text-2xl lg:text-3xl fa fa-moon" aria-hidden="true"></i>
            ) : (
              <Image
                src={assets.sun_icon}
                alt=""
                className="w-6"
                width={24}
                height={24}
              />
            )}
          </button>

          {/* Connect Button (Desktop) */}
          <div className="hidden md:flex">
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                isDarkMode
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                  : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              }`}
              aria-label="Connect on LinkedIn"
            >
              <span className="font-ovo">Let's connect</span>
              <i
                className="fa fa-arrow-right rotate-[-45deg]"
                aria-hidden="true"
              ></i>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden ml-3 p-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            <i className="fa fa-bars text-2xl" aria-hidden="true"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileNav
          isDarkMode={isDarkMode}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </nav>
    </>
  );
};

export default Navbar;