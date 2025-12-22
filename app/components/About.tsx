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
      className="w-full px-[12%] py-10 md:py-20 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      {/* Section Title */}
      <motion.h2
        id="about-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-ovo mb-12"
      >
        About Me
      </motion.h2>

      {/* Content Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-12"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-80 rounded-3xl max-w-none order-1 lg:order-2"
        >
          <Image
            src={userImage}
            alt="Shafwanul Haque Chowdhury"
            className="w-full rounded-3xl"
            width={320}
            height={400}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 order-2 lg:order-1"
        >
          <p className="mb-10 font-ovo text-lg leading-relaxed">
            {aboutData.description}
          </p>

          {/* Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6"
          >
            {aboutData.infoCards.map((card, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer transform transition-all duration-500 hover:-translate-y-1 ${
                  isDarkMode
                    ? "hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 text-gray-100 hover:text-gray-900"
                    : "hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-200 text-gray-700 hover:text-gray-900"
                } shadow-[2px_2px_0_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0_rgba(0,0,0,0.2)]`}
              >
                <i
                  className={`${card.icon} text-3xl mb-4 block ${
                    isDarkMode ? "text-cyan-400" : "text-purple-600"
                  }`}
                  aria-hidden="true"
                ></i>
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    isDarkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
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