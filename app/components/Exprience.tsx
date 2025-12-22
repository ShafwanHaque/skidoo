"use client";
import React from "react";
import { motion } from "motion/react";
import { experienceData, personalInfo } from "@/assets/assets";
import Link from "next/link";

type ExperienceProps = {
  isDarkMode: boolean;
};

const Experience = ({ isDarkMode }: ExperienceProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[12%] py-10 md:py-20 scroll-mt-20"
      aria-labelledby="experience-heading"
    >
      {/* Section Title */}
      <motion.h2
        id="experience-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-ovo mb-8"
      >
        Work Experience
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        {experienceData.description}
      </motion.p>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {experienceData.experiences.map((exp, index) => (
          <motion.article
            key={exp.id}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative border-l-4 pl-8 pb-8 ${
              isDarkMode ? "border-cyan-400" : "border-purple-600"
            }`}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute -left-3 top-0 w-6 h-6 rounded-full border-4 ${
                isDarkMode
                  ? "bg-cyan-400 border-gray-800"
                  : "bg-purple-600 border-white"
              }`}
            />

            {/* Experience Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800/50 hover:bg-gray-800/70"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3
                    className={`text-2xl font-semibold ${
                      isDarkMode ? "text-cyan-400" : "text-purple-600"
                    }`}
                  >
                    {exp.position}
                  </h3>
                  <p
                    className={`text-xl mt-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {exp.company}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isDarkMode
                      ? "bg-cyan-400/20 text-cyan-400"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {exp.type}
                </span>
              </div>

              {/* Meta Info */}
              <div
                className={`flex flex-wrap gap-4 mb-4 text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span className="flex items-center gap-2">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  {exp.duration}
                </span>
                <span className="flex items-center gap-2">
                  <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
                  {exp.location}
                </span>
              </div>

              {/* Responsibilities */}
              <div className="mb-4">
                <h4
                  className={`font-semibold mb-3 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Key Responsibilities:
                </h4>
                <ul
                  className={`space-y-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 ${
                          isDarkMode ? "text-cyan-400" : "text-purple-600"
                        }`}
                      >
                        •
                      </span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4
                  className={`font-semibold mb-3 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-center mt-12"
      >
        <Link
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
            isDarkMode
              ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
              : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          }`}
          aria-label="Download full resume"
        >
          <i className="fa fa-download" aria-hidden="true"></i>
          Full Resume
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Experience;