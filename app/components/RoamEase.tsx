"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { assets, personalInfo } from "@/assets/assets";

type RoamEaseProps = {
  isDarkMode?: boolean;
};

export default function RoamEase({ isDarkMode = false }: RoamEaseProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const projectInfo = {
    title: "RoamEase",
    subtitle: "Windows Desktop Travel Management System",
    description:
      "A comprehensive desktop application built with C# for managing travel services including hotel bookings, food services, and traveler information. Features complete user authentication, role-based access control, and SMTP integration for password recovery.",
    duration: "Development Period: December 2022 (approximately 20 days)",
    role: "Solo Developer",
    type: "Windows Application",
    githubUrl: "https://github.com/ShafwanHaque/RoamEase",
  };

  const technologies = [
    { name: "C#", category: "Programming Language" },
    { name: "Windows Forms", category: "UI Framework" },
    { name: "MS SQL Server", category: "Database" },
    { name: "SMTP Protocol", category: "Email Service" },
    { name: "SQL", category: "Query Language" },
    { name: "Visual Studio", category: "IDE" },
  ];

  const features = [
    {
      icon: "fa fa-user-lock",
      title: "Authentication System",
      description:
        "Secure user authentication with login/logout functionality, password hashing, session management, and role-based access control for different user types.",
    },
    {
      icon: "fa fa-envelope",
      title: "SMTP Password Recovery",
      description:
        "Integrated SMTP service for 'Forgot Password' functionality, enabling users to receive password reset links via email with secure token generation.",
    },
    {
      icon: "fa fa-users-cog",
      title: "Multi-Role User Management",
      description:
        "Comprehensive role management supporting Admin, Super Admin, Traveler, and Vendor user types, each with specific permissions and interface access.",
    },
    {
      icon: "fa fa-shield-alt",
      title: "Admin Portal",
      description:
        "Administrative dashboard for managing users, monitoring system activity, generating reports, and configuring system-wide settings and permissions.",
    },
    {
      icon: "fa fa-user-crown",
      title: "Super Admin Capabilities",
      description:
        "Elevated privileges for super administrators including full system control, admin management, database operations, and critical system configurations.",
    },
    {
      icon: "fa fa-suitcase",
      title: "Traveler Management",
      description:
        "Dedicated interface for travelers to browse services, make bookings, view travel history, manage profiles, and track reservations and payments.",
    },
    {
      icon: "fa fa-hotel",
      title: "Hotel & Room Rental Services",
      description:
        "Vendor portal for hotel owners and room rental services to list properties, manage availability, set pricing, and handle booking requests.",
    },
    {
      icon: "fa fa-utensils",
      title: "Food Service Management",
      description:
        "Restaurant and food service vendor interface for menu management, order processing, availability updates, and customer review handling.",
    },
    {
      icon: "fa fa-calendar-check",
      title: "Booking System",
      description:
        "End-to-end booking management with availability checking, reservation creation, confirmation emails, cancellation handling, and booking history.",
    },
    {
      icon: "fa fa-dollar-sign",
      title: "Payment Tracking",
      description:
        "Payment management system tracking transactions, payment status, invoice generation, and financial reporting for both vendors and travelers.",
    },
    {
      icon: "fa fa-chart-line",
      title: "Reporting & Analytics",
      description:
        "Comprehensive reporting tools for system statistics, user activity, booking trends, revenue analytics, and exportable reports for business insights.",
    },
    {
      icon: "fa fa-database",
      title: "Database Management",
      description:
        "Robust MS SQL Server database with normalized schema, stored procedures, triggers for data integrity, and optimized queries for performance.",
    },
  ];

  const userRoles = [
    {
      title: "Super Admin",
      icon: "fa fa-user-shield",
      color: isDarkMode ? "text-red-400" : "text-red-600",
      bgColor: isDarkMode ? "bg-red-400/10" : "bg-red-100",
      capabilities: [
        "Full system access and control",
        "Manage admin accounts and permissions",
        "Configure system-wide settings",
        "Access all database operations",
        "View comprehensive system analytics",
        "Override and modify all data",
        "System backup and restore",
        "Critical security configurations",
      ],
    },
    {
      title: "Admin",
      icon: "fa fa-user-cog",
      color: isDarkMode ? "text-cyan-400" : "text-purple-600",
      bgColor: isDarkMode ? "bg-cyan-400/10" : "bg-purple-100",
      capabilities: [
        "Manage traveler accounts",
        "Manage vendor accounts",
        "Approve vendor registrations",
        "Monitor booking activities",
        "Generate system reports",
        "Handle user complaints and support",
        "Moderate user reviews and ratings",
        "Access financial summaries",
      ],
    },
    {
      title: "Traveler",
      icon: "fa fa-user",
      color: isDarkMode ? "text-green-400" : "text-green-600",
      bgColor: isDarkMode ? "bg-green-400/10" : "bg-green-100",
      capabilities: [
        "Browse available services",
        "Search hotels and restaurants",
        "Make bookings and reservations",
        "View booking history",
        "Manage personal profile",
        "Submit reviews and ratings",
        "Track payment status",
        "Receive booking confirmations",
      ],
    },
    {
      title: "Vendor (Hotel/Food Service)",
      icon: "fa fa-store",
      color: isDarkMode ? "text-blue-400" : "text-blue-600",
      bgColor: isDarkMode ? "bg-blue-400/10" : "bg-blue-100",
      capabilities: [
        "Register and manage business profile",
        "List services and products",
        "Set pricing and availability",
        "Manage bookings and orders",
        "Update service information",
        "View customer reviews",
        "Track revenue and payments",
        "Communication with travelers",
      ],
    },
  ];

  const technicalHighlights = [
    {
      title: "Windows Forms Application",
      description:
        "Built using Windows Forms for a native desktop experience with multiple forms for different functionalities, custom controls, and optimized event handling for smooth user interactions.",
    },
    {
      title: "SQL Server Database Design",
      description:
        "Designed normalized database schema with proper relationships, constraints, and indexes. Implemented stored procedures for complex operations and triggers for automated data validation.",
    },
    {
      title: "Role-Based Access Control",
      description:
        "Implemented comprehensive RBAC system using database roles and application-level permissions, ensuring secure access to features based on user type with form-level authorization.",
    },
    {
      title: "Secure Password Management",
      description:
        "Implemented password hashing using cryptographic algorithms, secure storage of credentials, password strength validation, and secure password reset workflow via email.",
    },
  ];

  const systemArchitecture = [
    {
      layer: "Presentation Layer",
      icon: "fa fa-desktop",
      components: [
        "Windows Forms UI",
        "Login/Registration Forms",
        "Dashboard Forms (Admin, Super Admin, Traveler, Vendor)",
        "Booking Management Forms",
        "Service Management Forms",
        "User Profile Forms",
        "Report Generation Forms",
      ],
    },
    {
      layer: "Business Logic Layer",
      icon: "fa fa-cogs",
      components: [
        "Authentication Manager",
        "User Management Service",
        "Booking Service",
        "Payment Processing Logic",
        "Email Service (SMTP)",
        "Validation Services",
        "Report Generation Logic",
      ],
    },
    {
      layer: "Data Access Layer",
      icon: "fa fa-database",
      components: [
        "SQL Query Handlers",
        "Stored Procedure Calls",
        "Database Connection Management",
        "Transaction Handlers",
        "Data Models/Entities",
      ],
    },
    {
      layer: "Database Layer",
      icon: "fa fa-server",
      components: [
        "MS SQL Server Database",
        "User Tables (Admin, SuperAdmin, Traveler, Vendor)",
        "Service Tables (Hotels, Restaurants)",
        "Booking & Transaction Tables",
        "Stored Procedures",
        "Triggers & Constraints",
      ],
    },
  ];

  const challenges = [
    {
      challenge: "Multi-Form Navigation & State Management",
      solution:
        "Implemented a centralized form manager class to handle form navigation, maintain application state across forms, and ensure proper data passing between different windows while preventing memory leaks.",
    },
    {
      challenge: "Database Connection Management",
      solution:
        "Created a singleton database connection class with connection pooling, automatic retry logic for failed connections, and proper disposal patterns to prevent connection leaks and ensure optimal performance.",
    },
    {
      challenge: "SMTP Email Configuration",
      solution:
        "Implemented flexible SMTP configuration with support for multiple email providers, error handling for failed email delivery, retry mechanisms, and secure credential storage in encrypted configuration files.",
    },
    {
      challenge: "Role-Based UI Rendering",
      solution:
        "Designed a dynamic UI rendering system that adapts interface elements based on user roles, hiding/showing controls programmatically, and loading role-specific menus and features at runtime.",
    },
    {
      challenge: "Concurrent Booking Conflicts",
      solution:
        "Implemented database-level locking mechanisms using SQL transactions to prevent double bookings, with optimistic concurrency control and user-friendly conflict resolution messages.",
    },
  ];

  const learningOutcomes = [
    {
      title: "Desktop Application Development",
      description:
        "Gained comprehensive understanding of Windows Forms development, event-driven programming, and creating intuitive desktop user interfaces with C#.",
    },
    {
      title: "Database Design & Management",
      description:
        "Learned database normalization, entity relationships, SQL Server management, stored procedures, and optimizing queries for performance in a multi-user environment.",
    },
    {
      title: "Object-Oriented Programming",
      description:
        "Applied OOP principles including inheritance, polymorphism, encapsulation, and abstraction to create maintainable and scalable application architecture.",
    },
    {
      title: "Software Architecture Patterns",
      description:
        "Implemented layered architecture pattern separating presentation, business logic, and data access layers for better code organization and maintainability.",
    },
    {
      title: "Email Integration & SMTP",
      description:
        "Mastered SMTP protocol integration for automated email functionality, including password resets, booking confirmations, and notification systems.",
    },
    {
      title: "Security Best Practices",
      description:
        "Implemented authentication, authorization, password hashing, SQL injection prevention, and secure data handling throughout the application.",
    },
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
              {projectInfo.type} - Academic Project
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
              <i className="fa fa-user mr-2"></i>
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
              href={projectInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                isDarkMode
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                  : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              }`}
            >
              <i className="fa-brands fa-github"></i>
              View on GitHub
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
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
            System Features
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Comprehensive travel management with role-based access and SMTP
            integration
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

      {/* User Roles Section */}
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
            User Roles & Capabilities
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Multi-role access control system for different user types
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {userRoles.map((role, index) => (
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
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${role.bgColor}`}
                >
                  <i className={`${role.icon} text-2xl ${role.color}`}></i>
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${role.color}`}>
                  {role.title}
                </h3>
                <ul className="space-y-2">
                  {role.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i
                        className={`fa fa-check-circle mt-1 text-sm ${role.color}`}
                      ></i>
                      <span
                        className={`text-sm ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* System Architecture */}
      <section className="w-full px-6 sm:px-8 md:px-[12%] py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold text-center mb-4">
            System Architecture
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Layered architecture pattern for maintainable and scalable code
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {systemArchitecture.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                } shadow-md`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isDarkMode ? "bg-cyan-400/10" : "bg-purple-100"
                    }`}
                  >
                    <i
                      className={`${layer.icon} text-xl ${
                        isDarkMode ? "text-cyan-400" : "text-purple-600"
                      }`}
                    ></i>
                  </div>
                  <h3
                    className={`text-xl font-semibold ${
                      isDarkMode ? "text-cyan-400" : "text-purple-600"
                    }`}
                  >
                    {layer.layer}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {layer.components.map((component, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i
                        className={`fa fa-angle-right mt-1 ${
                          isDarkMode ? "text-cyan-400" : "text-purple-600"
                        }`}
                      ></i>
                      <span
                        className={`text-sm ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {component}
                      </span>
                    </li>
                  ))}
                </ul>
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
            Technical obstacles overcome during development
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

      {/* Learning Outcomes */}
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
            Learning Outcomes
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Key skills and knowledge gained from this project
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-md`}
              >
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    isDarkMode ? "text-cyan-400" : "text-purple-600"
                  }`}
                >
                  {outcome.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {outcome.description}
                </p>
              </motion.div>
            ))}
          </div>
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
            View the Source Code
          </h2>
          <p
            className={`mb-8 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore the complete implementation on GitHub
          </p>
          <a
            href={projectInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full border transition-all duration-300 ${
              isDarkMode
                ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            }`}
          >
            <i className="fa-brands fa-github"></i>
            View on GitHub
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
      </section>
    </div>
  );
}
