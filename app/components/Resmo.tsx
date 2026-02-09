"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { assets, personalInfo } from "@/assets/assets";

type ResmoProps = {
  isDarkMode?: boolean;
};

export default function Resmo({ isDarkMode = false }: ResmoProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeScreenshot, setActiveScreenshot] = useState<{
    title: string;
    path: string;
  } | null>(null);

  const projectInfo = {
    title: "RESMO",
    subtitle: "Multi-School Japanese School Management System",
    description:
      "A comprehensive school management platform designed specifically for Japanese educational institutions, enabling multiple schools to manage students, teachers, events, communications, and administrative operations through dedicated portals with real-time collaboration features.",
    duration: "Development Period: June 2024 - September 2024",
    role: "Full-Stack Developer",
    company: "CodeLab FZC",
    liveUrl: "https://resmo.tokyo",
  };

  const technologies = [
    { name: "Laravel 10", category: "Backend Framework" },
    { name: "Vue.js 3", category: "Frontend Framework" },
    { name: "MySQL", category: "Database" },
    { name: "Socket.IO", category: "Real-time Communication" },
    { name: "PHP 8.2", category: "Server Language" },
    { name: "JavaScript/ES6", category: "Client Language" },
    { name: "Bootstrap 5", category: "CSS Framework" },
    { name: "Docker", category: "Containerization" },
    { name: "Git/Bitbucket", category: "Version Control" },
    { name: "Nginx", category: "Web Server" },
  ];

  const features = [
    {
      icon: "fa fa-users-cog",
      title: "Multi-School Architecture",
      description:
        "Centralized platform supporting multiple schools with isolated data management, customizable branding, and school-specific configurations while maintaining unified system administration.",
    },
    {
      icon: "fa fa-user-shield",
      title: "Role-Based Access Control",
      description:
        "Comprehensive user management with distinct portals for administrators, teachers, students, and parents, each with customized permissions and interface tailored to their needs.",
    },
    {
      icon: "fa fa-graduation-cap",
      title: "Student Management",
      description:
        "Complete student lifecycle management including enrollment, attendance tracking, grade management, behavior records, and academic progress monitoring across multiple schools.",
    },
    {
      icon: "fa fa-chalkboard-teacher",
      title: "Teacher Portal",
      description:
        "Dedicated interface for teachers to manage classes, record attendance, input grades, create assignments, communicate with parents, and access student information.",
    },
    {
      icon: "fa fa-user-friends",
      title: "Parent Portal",
      description:
        "Secure parent access to view their children's attendance, grades, assignments, school events, and direct messaging with teachers for enhanced parent-school communication.",
    },
    {
      icon: "fa fa-calendar-alt",
      title: "Event Management System",
      description:
        "Comprehensive event planning and management with drag-and-drop functionality, calendar integration, RSVP tracking, and automated notifications for school-wide or class-specific events.",
    },
    {
      icon: "fa fa-comments",
      title: "Real-Time Chat System",
      description:
        "Socket.IO-powered real-time messaging enabling instant communication between all user types - administrators, teachers, students, and parents with message history and notifications.",
    },
    {
      icon: "fa fa-bell",
      title: "Notification System",
      description:
        "Multi-channel notification delivery for important updates, announcements, attendance alerts, grade postings, and event reminders via in-app notifications and email.",
    },
    {
      icon: "fa fa-clipboard-check",
      title: "Attendance Tracking",
      description:
        "Efficient attendance recording system with daily, weekly, and monthly reports, absence tracking, automated parent notifications, and detailed attendance analytics.",
    },
    {
      icon: "fa fa-chart-bar",
      title: "Academic Reporting",
      description:
        "Comprehensive reporting tools for student performance, class analytics, attendance summaries, and administrative insights with exportable reports and visual dashboards.",
    },
    {
      icon: "fa fa-mobile-alt",
      title: "Responsive Design",
      description:
        "Fully responsive interface optimized for desktop, tablet, and mobile devices, ensuring seamless access to the platform from any device for all user types.",
    },
    {
      icon: "fa fa-language",
      title: "Japanese Localization",
      description:
        "Complete Japanese language support with culturally appropriate UI/UX design, date formats, and educational terminology specific to Japanese school systems.",
    },
  ];

  const userPortals = [
    {
      title: "Administrator Portal",
      icon: "fa fa-user-shield",
      features: [
        "Manage multiple schools and their configurations",
        "User management (teachers, students, parents)",
        "Event creation and management with drag-and-drop",
        "System-wide settings and customization",
        "Generate comprehensive reports and analytics",
        "Monitor platform usage and activity",
        "Manage subscriptions and billing",
        "Configure SMTP and email templates",
      ],
    },
    {
      title: "Teacher Portal",
      icon: "fa fa-chalkboard-teacher",
      features: [
        "Class and subject management",
        "Daily attendance recording",
        "Grade entry and report card generation",
        "Assignment creation and distribution",
        "Real-time chat with students and parents",
        "Event participation tracking",
        "Access to student academic history",
        "Schedule and timetable management",
      ],
    },
    {
      title: "Student Portal",
      icon: "fa fa-user-graduate",
      features: [
        "View personal schedule and timetable",
        "Access grades and academic progress",
        "Check attendance records",
        "Submit assignments and homework",
        "Chat with teachers and classmates",
        "View and RSVP to school events",
        "Access learning materials and resources",
        "Receive notifications and announcements",
      ],
    },
    {
      title: "Parent Portal",
      icon: "fa fa-users",
      features: [
        "Monitor child's attendance in real-time",
        "View academic grades and progress reports",
        "Communicate directly with teachers via chat",
        "Receive instant notifications about child's activities",
        "View upcoming events and school calendar",
        "Access behavior and conduct reports",
        "Download report cards and certificates",
        "Manage multiple children from one account",
      ],
    },
  ];

  const technicalHighlights = [
    {
      title: "Laravel Backend Architecture",
      description:
        "Built a robust RESTful API using Laravel 10 with proper MVC architecture, eloquent ORM for database operations, middleware for authentication, and service layer pattern for business logic separation.",
    },
    {
      title: "Vue.js Component System",
      description:
        "Developed reusable Vue.js components with reactive data binding, component composition, and state management for complex UI interactions including drag-and-drop event management.",
    },
    {
      title: "Real-Time Communication",
      description:
        "Implemented Socket.IO for bidirectional real-time communication enabling instant chat messages, live notifications, and real-time attendance updates across all user portals.",
    },
    {
      title: "Multi-Tenancy Implementation",
      description:
        "Architected a multi-tenant system allowing multiple schools to operate independently on the same platform with data isolation, school-specific customization, and shared infrastructure.",
    },
    {
      title: "Responsive UI/UX Design",
      description:
        "Created mobile-first responsive designs using Bootstrap 5 with custom components, ensuring optimal user experience across desktop, tablet, and mobile devices for all user types.",
    },
    {
      title: "Authentication & Authorization",
      description:
        "Implemented Laravel's authentication system with role-based access control (RBAC), session management, password reset functionality, and two-factor authentication for enhanced security.",
    },
  ];

  const developmentContributions = [
    {
      title: "Header & Footer Redesign",
      description:
        "Completely redesigned and implemented the landing page header and footer sections, improving navigation structure and visual consistency across the platform.",
      tasks: [
        "Responsive navigation menu for PC and mobile views",
        "Authentication-based menu rendering",
        "Dynamic content based on user roles",
        "Mobile-optimized hamburger menu",
      ],
    },
    {
      title: "Event Management System",
      description:
        "Developed the comprehensive event management module with advanced features for creating, managing, and tracking school events.",
      tasks: [
        "Event search and filtering functionality",
        "Admin panel event listing with pagination",
        "Drag-and-drop event ordering using Vue.js",
        "Event creation form with validation",
        "Event RSVP and attendance tracking",
        "Calendar integration and visualization",
      ],
    },
    {
      title: "Real-Time Chat Implementation",
      description:
        "Built a complete real-time chat system using Socket.IO enabling instant communication between all user types across the platform.",
      tasks: [
        "Socket.IO server setup and configuration",
        "Real-time message delivery system",
        "Chat rooms for different user groups",
        "Message history and persistence",
        "Typing indicators and read receipts",
        "File sharing in chat conversations",
      ],
    },
    {
      title: "Responsive Menu System",
      description:
        "Implemented a fully responsive navigation system that adapts to different screen sizes and user authentication states.",
      tasks: [
        "PC view navigation with dropdown menus",
        "Mobile (SP) view with slide-out menu",
        "Authentication check for menu items",
        "Role-based menu item visibility",
        "Smooth transitions and animations",
      ],
    },
  ];

  const challenges = [
    {
      challenge: "Multi-School Data Isolation",
      solution:
        "Implemented a tenant-aware database architecture using Laravel's global scopes and middleware to automatically filter queries based on the school context, ensuring complete data isolation between schools.",
    },
    {
      challenge: "Real-Time Chat Scalability",
      solution:
        "Optimized Socket.IO implementation with Redis adapter for horizontal scaling, message queuing for offline users, and efficient room management to handle thousands of concurrent connections.",
    },
    {
      challenge: "Japanese Character Encoding",
      solution:
        "Configured database charset to UTF8MB4, implemented proper character encoding in API responses, and ensured all forms correctly handle Japanese input including kanji, hiragana, and katakana.",
    },
    {
      challenge: "Drag-and-Drop Event Ordering",
      solution:
        "Utilized Vue.js with Vuedraggable library to create smooth drag-and-drop functionality for event management, with optimistic UI updates and server-side validation to maintain data consistency.",
    },
    {
      challenge: "Role-Based Access Control Complexity",
      solution:
        "Designed a flexible permission system using Laravel policies and gates, allowing fine-grained access control across multiple user roles while maintaining code simplicity and reusability.",
    },
  ];

  const screenshots = [
    { title: "Landing Page", path: "/projects/resmo/resmo-landing.png" },
    { title: "PC Navigation Menu", path: "/projects/resmo/resmo-menu-pc.png" },
    { title: "Mobile Menu View", path: "/projects/resmo/resmo-menu-mobile.png" },
    { title: "Event Search Page", path: "/projects/resmo/resmo-event-search.png" },
    { title: "Admin Event Panel", path: "/projects/resmo/resmo-admin-events.png" },
    { title: "Add Event Form", path: "/projects/resmo/resmo-add-event.png" },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900"}`}
    >
      {/* Logo */}
      <div className="flex p-5 justify-center">
        <Link href="/#home" aria-label="Go to home section">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 md:w-30 cursor-pointer"
            alt={`${personalInfo.name} logo`}
            width={160}
            height={40}
          />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative w-full px-6 sm:px-8 md:px-[12%] py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-cyan-400/10 text-cyan-400"
                  : "bg-purple-100 text-purple-600"
              }`}
            >
              {projectInfo.company} - Internship Project
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-ovo font-bold mb-6">
            {projectInfo.title}
          </h1>

          <p
            className={`text-xl sm:text-2xl mb-4 font-medium ${
              isDarkMode ? "text-cyan-400" : "text-purple-600"
            }`}
          >
            {projectInfo.subtitle}
          </p>

          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 leading-relaxed font-ovo">
            {projectInfo.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span
              className={`px-4 py-2 rounded-full text-sm ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <i className="fa fa-briefcase mr-2"></i>
              {projectInfo.role}
            </span>
            <span
              className={`px-4 py-2 rounded-full text-sm ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <i className="fa fa-calendar mr-2"></i>
              {projectInfo.duration}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={projectInfo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                isDarkMode
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                  : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              }`}
            >
              <i className="fa fa-external-link-alt"></i>
              Visit resmo.tokyo
            </a>
            <Link
              href="/#projects"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                isDarkMode
                  ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <i className="fa fa-arrow-left"></i>
              Back to Projects
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section
        className={`w-full px-6 sm:px-8 md:px-[12%] py-16 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold text-center mb-12">
            Technology Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg text-center ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white hover:bg-gray-50"
                } shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <p className="font-medium text-sm mb-1">{tech.name}</p>
                <p
                  className={`text-xs ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {tech.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="w-full px-6 sm:px-8 md:px-[12%] py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold text-center mb-4">
            Platform Features
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Comprehensive school management capabilities for Japanese
            educational institutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className={`p-6 rounded-xl border ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-800 hover:border-cyan-400/50"
                    : "bg-white border-gray-200 hover:border-purple-400/50"
                } shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                <i
                  className={`${feature.icon} text-3xl mb-4 block ${
                    isDarkMode ? "text-cyan-400" : "text-purple-600"
                  }`}
                ></i>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* User Portals Section */}
      <section
        className={`w-full px-6 sm:px-8 md:px-[12%] py-16 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold text-center mb-4">
            User Portals
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Dedicated interfaces for administrators, teachers, students, and
            parents
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {userPortals.map((portal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    isDarkMode ? "bg-cyan-400/10" : "bg-purple-100"
                  }`}
                >
                  <i
                    className={`${portal.icon} text-2xl ${
                      isDarkMode ? "text-cyan-400" : "text-purple-600"
                    }`}
                  ></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">{portal.title}</h3>
                <ul className="space-y-2">
                  {portal.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i
                        className={`fa fa-check-circle mt-1 text-sm ${
                          isDarkMode ? "text-cyan-400" : "text-purple-600"
                        }`}
                      ></i>
                      <span
                        className={`text-sm ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Development Contributions */}
      <section className="w-full px-6 sm:px-8 md:px-[12%] py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold text-center mb-4">
            My Development Contributions
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Key features and modules I developed during the internship
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {developmentContributions.map((contribution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                } shadow-md`}
              >
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDarkMode ? "text-cyan-400" : "text-purple-600"
                  }`}
                >
                  {contribution.title}
                </h3>
                <p
                  className={`mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {contribution.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {contribution.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <i
                        className={`fa fa-code mt-1 text-sm ${
                          isDarkMode ? "text-cyan-400" : "text-purple-600"
                        }`}
                      ></i>
                      <span
                        className={`text-sm ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technical Highlights */}
      <section
        className={`w-full px-6 sm:px-8 md:px-[12%] py-16 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold text-center mb-12">
            Technical Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {technicalHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-md`}
              >
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDarkMode ? "text-cyan-400" : "text-purple-600"
                  }`}
                >
                  {highlight.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Challenges & Solutions */}
      <section className="w-full px-6 sm:px-8 md:px-[12%] py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold text-center mb-4">
            Challenges & Solutions
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Technical challenges encountered and overcome during development
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                } shadow-md`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      isDarkMode ? "bg-red-400/10" : "bg-red-100"
                    }`}
                  >
                    <i
                      className={`fa fa-exclamation-triangle ${
                        isDarkMode ? "text-red-400" : "text-red-600"
                      }`}
                    ></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      Challenge: {item.challenge}
                    </h3>
                    <div className="flex items-start gap-4 mt-3">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          isDarkMode ? "bg-green-400/10" : "bg-green-100"
                        }`}
                      >
                        <i
                          className={`fa fa-check-circle ${
                            isDarkMode ? "text-green-400" : "text-green-600"
                          }`}
                        ></i>
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-medium mb-1 ${
                            isDarkMode ? "text-green-400" : "text-green-600"
                          }`}
                        >
                          Solution:
                        </h4>
                        <p
                          className={`leading-relaxed ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* photos Section */}
      <section
        className={`w-full px-6 sm:px-8 md:px-[12%] py-16 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold text-center mb-12">
            ChainNative Admin Panel Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                onClick={() => setActiveScreenshot(screenshot)}
                whileHover={{ scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl overflow-hidden shadow-lg cursor-pointer ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div
                  className={`relative aspect-video ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <Image
                    src={screenshot.path}
                    alt={screenshot.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-center">
                    {screenshot.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <p
            className={`text-center mt-8 text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <i className="fa fa-info-circle mr-2"></i>
            Photos showcase the admin panel interface and key features
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="w-full px-6 sm:px-8 md:px-[12%] py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold mb-6">
            Explore the Platform
          </h2>
          <p
            className={`mb-8 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Visit the live platform to see the school management system in
            action
          </p>
          <a
            href={projectInfo.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full border transition-all duration-300 ${
              isDarkMode
                ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            }`}
          >
            <i className="fa fa-external-link-alt"></i>
            Visit resmo.tokyo
          </a>
        </motion.div>

        {/* Logo */}
        <Link href="/#home" className="p-5" aria-label="Go to home section">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt={`${personalInfo.name} logo`}
            className="w-36 mx-auto mb-4"
            width={144}
            height={36}
          />
        </Link>

        {activeScreenshot && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveScreenshot(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-6xl rounded-xl overflow-hidden ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveScreenshot(null)}
                className={`absolute top-4 right-4 z-10 text-2xl hover:opacity-80 cursor-pointer`}
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Image */}
              <div className="relative w-full h-[80vh]">
                <Image
                  src={activeScreenshot.path}
                  alt={activeScreenshot.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Title */}
              <div
                className={`p-4 text-center ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <h3 className="font-semibold">{activeScreenshot.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
