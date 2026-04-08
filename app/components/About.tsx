"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import userImage from "@/assets/user-image.jpg";
import { aboutData } from "@/assets/assets";

type AboutProps = {
  isDarkMode: boolean;
};

const About = ({ isDarkMode }: AboutProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-6 sm:px-8 md:px-[8%] lg:px-[12%] py-14 sm:py-18 md:py-20 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      {/* Section Title */}
      <motion.h2
        id="about-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-ovo mb-8 sm:mb-10 md:mb-12"
      >
        About Me
      </motion.h2>

      {/* Content Grid — tighter gap for 13-14" */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 my-8 sm:my-10"
      >
        {/* Image — explicit sizing at every breakpoint */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 flex-shrink-0 rounded-3xl order-1 lg:order-2"
        >
          <Image
            src={userImage}
            alt="Shafwanul Haque Chowdhury"
            className="w-full rounded-3xl shadow-lg"
            width={384}
            height={480}
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 order-2 lg:order-1 min-w-0"
        >
          <p className="mb-7 sm:mb-8 font-ovo text-sm sm:text-base md:text-lg leading-relaxed">
            {aboutData.description}
          </p>

          {/* Info Cards — 2-col from sm, always 2-col when side by side */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
          >
            {aboutData.infoCards.map((card, index) => (
              <motion.li
                whileHover={{ scale: 1.03 }}
                key={index}
                className={`border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-5 cursor-pointer transform transition-all duration-500 hover:-translate-y-1 ${
                  isDarkMode
                    ? "hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 text-gray-100"
                    : "hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-200 text-gray-700 hover:text-gray-900"
                } shadow-[2px_2px_0_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0_rgba(0,0,0,0.2)]`}
              >
                <i
                  className={`${card.icon} text-xl sm:text-2xl mb-2 sm:mb-3 block ${
                    isDarkMode ? "text-cyan-400" : "text-purple-600"
                  }`}
                  aria-hidden="true"
                />
                <h3
                  className={`text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 ${
                    isDarkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {card.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;