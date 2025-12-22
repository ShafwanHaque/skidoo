"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import profileImage from "@/assets/profile-img.jpg";
import handIcon from "@/assets/hand-icon.png";
import { homeData, personalInfo } from "@/assets/assets";

type HomeProps = {
  isDarkMode: boolean;
};

const Home = ({ isDarkMode }: HomeProps) => {
  return (
    <section
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3"
      aria-labelledby="home-heading"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={profileImage}
          alt={`${personalInfo.name} - ${personalInfo.title}`}
          className="rounded-full w-40"
          priority
          width={160}
          height={160}
        />
      </motion.div>

      {/* Greeting */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        {homeData.greeting}
        <Image src={handIcon} alt="Waving hand" className="w-6" />
      </motion.h2>

      {/* Main Title */}
      <motion.h1
        id="home-heading"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        {homeData.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        {homeData.description}
        <span className="font-medium text-lg">{homeData.company}</span>
      </motion.p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          href="#contact"
          className={`px-10 py-3 border rounded-full flex items-center gap-2 transition-colors duration-300 ${
            isDarkMode
              ? "bg-white text-black hover:bg-black hover:text-[#00c8ff]"
              : "bg-black text-white hover:bg-white hover:text-[#6c00d1]"
          }`}
          aria-label="Navigate to contact section"
        >
          Contact Me
          <i
            className="fa fa-arrow-right rotate-315 w-4"
            aria-hidden="true"
          ></i>
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-10 py-3 border rounded-full flex items-center gap-2 transition-colors duration-300
            ${
              isDarkMode
                ? "bg-black text-white hover:bg-white hover:text-[#00c8ff]"
                : "bg-white text-black hover:bg-black hover:text-purple-400"
            }`}
          aria-label="Download resume (opens in new tab)"
        >
          My Resume
          <i className="fa fa-download w-4" aria-hidden="true"></i>
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
