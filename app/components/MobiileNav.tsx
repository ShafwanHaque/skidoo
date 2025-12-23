"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { navigationLinks } from "@/assets/assets";

interface MobileNavProps {
  isDarkMode: boolean;
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const MobileNav = ({ isOpen, onClose, isDarkMode, activeSection }: MobileNavProps) => {
  const getNavClass = (href: string) => {
    const sectionId = href.replace("#", "");
    const isActive = activeSection === sectionId;
    
    return `font-ovo text-lg transition-colors ${
      isActive
        ? isDarkMode
          ? "text-cyan-400 font-semibold"
          : "text-purple-600 font-semibold"
        : isDarkMode
        ? "text-gray-300 hover:text-cyan-400"
        : "text-gray-700 hover:text-purple-600"
    }`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`fixed top-0 right-0 bottom-0 w-72 z-40 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          } shadow-2xl`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute right-6 top-4 p-1.5 rounded-full transition-colors ${
              isDarkMode
                ? "hover:bg-gray-700 text-gray-300"
                : "hover:bg-gray-200 text-gray-700"
            }`}
            aria-label="Close navigation menu"
          >
            <i className="fa fa-times text-2xl" aria-hidden="true"></i>
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 py-20 px-8">
            {navigationLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  className={getNavClass(link.href)}
                  href={link.href}
                  onClick={onClose}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;