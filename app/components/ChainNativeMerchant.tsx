"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { assets, personalInfo } from "@/assets/assets";

type ChainNativeMerchantProps = {
  isDarkMode?: boolean;
};

export default function ChainNativeMerchant({
  isDarkMode = false,
}: ChainNativeMerchantProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeScreenshot, setActiveScreenshot] = useState<{
    title: string;
    path: string;
  } | null>(null);

  const projectInfo = {
    title: "ChainNative Merchant",
    subtitle: "Enterprise Bitcoin Payment Gateway System",
    description:
      "A comprehensive, self-hosted Bitcoin payment processing platform designed for merchants to accept cryptocurrency payments with complete control and privacy. Built with modern enterprise architecture and containerized deployment.",
    duration: "Development Period: January 2025 - Present",
    role: "Full-Stack Developer",
    company: "CodeLab FZC LLC",
  };

  const technologies = [
    { name: "ASP.NET Core 8.0", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Entity Framework Core", category: "ORM" },
    { name: "Bitcoin Core Integration", category: "Blockchain" },
    { name: "RESTful APIs", category: "Architecture" },
    { name: "Razor Pages", category: "Frontend" },
    { name: "Bootstrap 5", category: "UI Framework" },
    { name: "NBitcoin Library", category: "Cryptography" },
    { name: "WebSockets", category: "Real-time" },
  ];

  const features = [
    {
      icon: "fa fa-tachometer-alt",
      title: "Comprehensive Dashboard",
      description:
        "Real-time monitoring of transactions, revenue analytics, and payment status tracking with intuitive data visualization.",
    },
    {
      icon: "fa fa-store",
      title: "Store Settings",
      description:
        "Flexible configuration for multiple stores with customizable payment methods, currencies, and business rules.",
    },
    {
      icon: "fa fa-chart-line",
      title: "Dynamic Rate Management",
      description:
        "Automated exchange rate updates with support for multiple fiat currencies and customizable rate sources.",
    },
    {
      icon: "fa fa-shopping-cart",
      title: "Checkout Experience",
      description:
        "Seamless payment flow with customizable branding, QR code generation, and mobile-optimized interfaces.",
    },
    {
      icon: "fa fa-users",
      title: "Store Users & Permissions",
      description:
        "Role-based access control with granular permissions for team collaboration and secure multi-user management.",
    },
    {
      icon: "fa fa-envelope",
      title: "Email Rules & Notifications",
      description:
        "Automated email notifications for payment confirmations, refunds, and custom business triggers.",
    },
    {
      icon: "fa fa-wallet",
      title: "BTC Wallet Management",
      description:
        "Secure HD wallet implementation with full custody control, backup mechanisms, and multi-signature support.",
    },
    {
      icon: "fa fa-paper-plane",
      title: "Send & Receive BTC",
      description:
        "Integrated wallet functionality for direct Bitcoin transactions with fee estimation and batch processing.",
    },
    {
      icon: "fa fa-file-invoice-dollar",
      title: "Invoice System",
      description:
        "Comprehensive invoicing with expiration management, partial payments, and automatic settlement tracking.",
    },
    {
      icon: "fa fa-chart-bar",
      title: "Advanced Reporting",
      description:
        "Detailed financial reports, transaction history exports, and customizable analytics dashboards.",
    },
    {
      icon: "fa fa-credit-card",
      title: "Payment Requests",
      description:
        "Create sharable payment links with customizable amounts, descriptions, and expiration dates.",
    },
    {
      icon: "fa fa-book",
      title: "Documentation Portal",
      description:
        "Comprehensive API documentation and merchant guides for seamless integration and troubleshooting.",
    },
  ];

  const technicalHighlights = [
    {
      title: "Containerized Architecture",
      description:
        "Fully Dockerized application ensuring consistent deployment across environments with docker-compose orchestration for seamless scaling and maintenance.",
    },
    {
      title: "PostgreSQL Data Layer",
      description:
        "Robust relational database design with optimized indexing, transaction integrity, and efficient query performance for high-volume payment processing.",
    },
    {
      title: "Bitcoin Core Integration",
      description:
        "Direct integration with Bitcoin network using NBitcoin library for wallet management, transaction signing, and blockchain synchronization.",
    },
    {
      title: "RESTful API Design",
      description:
        "Well-documented APIs following REST principles with authentication, rate limiting, and comprehensive error handling for third-party integrations.",
    },
    {
      title: "Real-time Updates",
      description:
        "WebSocket implementation for instant payment status notifications and live transaction monitoring without page refreshes.",
    },
    {
      title: "Security First",
      description:
        "Industry-standard encryption, secure key storage, HTTPS enforcement, and protection against common vulnerabilities (XSS, CSRF, SQL injection).",
    },
  ];

  const challenges = [
    {
      challenge: "Bitcoin Network Synchronization",
      solution:
        "Implemented efficient block verification with pruning strategies and SPV wallet support to reduce storage requirements while maintaining security.",
    },
    {
      challenge: "Payment Confirmation Times",
      solution:
        "Developed a configurable confirmation system with risk-based instant payment acceptance for trusted customers and full verification for high-value transactions.",
    },
    {
      challenge: "Exchange Rate Volatility",
      solution:
        "Integrated multiple rate providers with automatic fallback mechanisms and configurable rate locking periods to protect against volatility during checkout.",
    },
    {
      challenge: "Multi-Store Scalability",
      solution:
        "Architected a multi-tenant system with isolated wallet management and efficient database partitioning to support thousands of concurrent merchants.",
    },
  ];

  const screenshots = [
    {
      title: "Dashboard Overview",
      path: "/projects/chainnative-merchant/merchant-dashboard.png",
    },
    {
      title: "Store Settings",
      path: "/projects/chainnative-merchant/merchant-store-settings.png",
    },
    { title: "Checkout Interface", path: "/projects/chainnative-merchant/merchant-checkout.png" },
    { title: "Invoice Management", path: "/projects/chainnative-merchant/merchant-invoices.png" },
    { title: "Subscription Plan", path: "/projects/chainnative-merchant/subscription-list.png" },
    { title: "Reporting Analytics", path: "/projects/chainnative-merchant/merchant-reports.png" },
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
              {projectInfo.company}
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
              href="https://chainnative.gitbook.io/chainnative-docs"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                isDarkMode
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                  : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              }`}
            >
              <i className="fa fa-book"></i>
              View Documentation
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
            Key Features
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A comprehensive suite of tools designed for modern cryptocurrency
            payment processing
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
            Key technical challenges overcome during development
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

      {/* Screenshots Section */}
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
            Application Overview
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
            Photos are representative of the application interface
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
            Interested in Learning More?
          </h2>
          <p
            className={`mb-8 font-ovo ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore the comprehensive documentation or get in touch to discuss
            payment gateway solutions
          </p>
          <a
            href="https://chainnative.gitbook.io/chainnative-docs"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full border transition-all duration-300 ${
              isDarkMode
                ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            }`}
          >
            <i className="fa fa-book"></i>
            Documentation
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
    </div>
  );
}
