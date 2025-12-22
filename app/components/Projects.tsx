"use client";
import React from "react";
import { motion } from "motion/react";
import { projectsData } from "@/assets/assets";
import Link from "next/link";

type ProjectsProps = {
  isDarkMode: boolean;
};

export const Projects = ({ isDarkMode }: ProjectsProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 md:py-20 scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      {/* Section Title */}
      <motion.h2
        id="projects-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-ovo mb-8"
      >
        Featured Projects
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        {projectsData.description}
      </motion.p>

      {/* Projects Grid */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6"
      >
        {projectsData.projects.map((project, index) => (
          <Link
            key={index}
            href={project.liveUrl}
            rel="noopener noreferrer"
            className="block"
          >
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Project Info Card */}
              <div className="bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-black text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={project.liveUrl}
                  rel="noopener noreferrer"
                  className={`border rounded-full border-black w-10 h-10 flex-shrink-0 flex items-center justify-center shadow-[2px_2px_0_#000]  transition ml-3 ${
                    isDarkMode
                      ? "group-hover:bg-cyan-400"
                      : "group-hover:bg-purple-600"
                  }`}
                  aria-label={`View ${project.title} project`}
                >
                  <i
                    className="fa fa-arrow-right text-black"
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
            </motion.li>
          </Link>
        ))}
      </motion.ul>

      {/* Show More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-center mt-12"
      >
        <Link
          href="https://github.com/shafwanHaque"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-8 py-3 rounded-full border transition-all duration-300 ${
            isDarkMode
              ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
              : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          }`}
        >
          View More on GitHub
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
