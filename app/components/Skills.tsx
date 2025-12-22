"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillsData } from "@/assets/assets";

type SkillsProps = {
  isDarkMode: boolean;
};

const Skills = ({ isDarkMode }: SkillsProps) => {
  const [selectedSkill, setSelectedSkill] = useState<{
    title: string;
    brief: string;
  } | null>(null);

  const openModal = (title: string, brief: string) => {
    setSelectedSkill({ title, brief });
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="w-full px-[12%] py-10 md:py-20 scroll-mt-20"
      aria-labelledby="skills-heading"
    >
      {/* Section Title */}
      <motion.h2
        id="skills-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-ovo mb-8"
      >
        Skills and Expertise
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        {skillsData.description}
      </motion.p>

      {/* Skills Grid */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 my-10"
      >
        {skillsData.skills.map((skill, index) => (
          <motion.li
            onClick={() => openModal(skill.title, skill.brief)}
            whileHover={{ scale: 1.05 }}
            key={index}
            className={`border border-gray-400 rounded-lg px-8 py-12 cursor-pointer transform transition-all duration-500 hover:-translate-y-1 ${
              isDarkMode
                ? "hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 text-gray-100 hover:text-white"
                : "hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-200 text-gray-700 hover:text-gray-900"
            } shadow-[2px_2px_0_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0_rgba(0,0,0,0.2)]`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(skill.title, skill.brief);
              }
            }}
            aria-label={`View details about ${skill.title}`}
          >
            <i
              className={`${skill.icon} text-4xl mb-4 block ${
                isDarkMode ? "text-cyan-400" : "text-purple-600"
              }`}
              aria-hidden="true"
            ></i>

            <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>

            <p
              className={`text-sm leading-relaxed mb-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {skill.description}
            </p>

            <span
              className={`flex items-center gap-2 text-sm font-medium ${
                isDarkMode ? "text-cyan-400" : "text-purple-600"
              } hover:underline`}
            >
              Read more
              <i className="fa fa-arrow-right w-4" aria-hidden="true"></i>
            </span>
          </motion.li>
        ))}
      </motion.ul>

      {/* Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`${
                isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
              } rounded-xl max-w-2xl w-full p-8 relative shadow-2xl max-h-[80vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode
                    ? "hover:bg-gray-700 text-gray-300"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
                aria-label="Close modal"
              >
                <i className="fa fa-times text-2xl" aria-hidden="true"></i>
              </button>

              {/* Modal Content */}
              <h3
                id="modal-title"
                className={`text-2xl font-bold mb-6 pr-8 ${
                  isDarkMode ? "text-cyan-400" : "text-purple-600"
                }`}
              >
                {selectedSkill.title}
              </h3>

              <p
                className={`leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {selectedSkill.brief}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Skills;