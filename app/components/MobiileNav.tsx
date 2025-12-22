"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { navigationLinks } from "@/assets/assets";
import Link from "next/link";

interface MobileNavProps {
  isDarkMode: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose, isDarkMode }: MobileNavProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          /* 🔥 THIS LINE FIXES IT */
          className={`fixed inset-0 z-50 ${
            isDarkMode
              ? "bg-black/70 backdrop-blur-md"
              : "bg-white/80 backdrop-blur-md"
          }`}
          onClick={onClose}
        >
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className={`absolute top-0 right-0 h-full w-72 ${
              isDarkMode ? "bg-black" : "bg-white"
            } shadow-lg`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute right-6 top-3 p-1.5 rounded-full transition-colors ${
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
                  <Link
                    className={`font-ovo text-lg transition-colors ${
                      isDarkMode
                        ? "text-gray-300 hover:text-cyan-400"
                        : "text-gray-700 hover:text-purple-600"
                    }`}
                    href={link.href}
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
