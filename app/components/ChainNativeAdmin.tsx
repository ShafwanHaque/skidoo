"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { assets, personalInfo } from "@/assets/assets";

type ChainNativeAdminProps = {
  isDarkMode?: boolean;
};

export default function ChainNativeAdmin({ isDarkMode = false }: ChainNativeAdminProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const projectInfo = {
    title: "ChainNative Admin",
    subtitle: "Enterprise Payment Gateway Admin Panel",
    description: "A sophisticated, microservice-based administrative platform for managing merchants, stores, invoices, and system-wide configurations. Built with modern architecture patterns including event-driven communication and real-time data synchronization.",
    duration: "Development Period: June 2024 - December 2024",
    role: "Full-Stack Developer",
    company: "CodeLab FZC LLC",
  };

  const technologies = [
    { name: "NestJS", category: "Backend API" },
    { name: "Next.js 14", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Prisma ORM", category: "Database Layer" },
    { name: "RabbitMQ", category: "Message Queue" },
    { name: "TypeScript", category: "Language" },
    { name: "Shadcn/ui", category: "UI Components" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Docker", category: "Containerization" },
    { name: "Microservices", category: "Architecture" },
  ];

  const features = [
    {
      icon: "fa fa-users",
      title: "Merchant Management",
      description: "Complete CRUD operations for merchant accounts including list view, add new merchants, edit details, password reset, and secure merchant removal with data integrity checks.",
    },
    {
      icon: "fa fa-store",
      title: "Store Creation & Management",
      description: "Enable merchants to create and manage multiple stores with individual configurations, allowing each store to have unique payment settings and branding.",
    },
    {
      icon: "fa fa-building",
      title: "Store Administration",
      description: "Comprehensive store management with listing, editing capabilities, rate configuration, invoice tracking, and customizable checkout appearance settings.",
    },
    {
      icon: "fa fa-chart-line",
      title: "Exchange Rate Configuration",
      description: "Dynamic rate management system for stores with real-time exchange rate updates, multi-currency support, and automated rate synchronization.",
    },
    {
      icon: "fa fa-file-invoice-dollar",
      title: "Advanced Invoice System",
      description: "Powerful invoice management with search by ID/amount, time-based filtering, status filtering, pagination, and comprehensive invoice lifecycle tracking.",
    },
    {
      icon: "fa fa-credit-card",
      title: "Checkout Customization",
      description: "Store-specific checkout appearance editor with branding options, color schemes, logo uploads, and preview functionality for merchant customization.",
    },
    {
      icon: "fa fa-envelope",
      title: "SMTP Server Configuration",
      description: "System-wide email server settings management with support for multiple SMTP providers, authentication configuration, and email template management.",
    },
    {
      icon: "fa fa-cog",
      title: "Server Policies & Settings",
      description: "Centralized system configuration including security policies, rate limiting, API throttling, session management, and global application settings.",
    },
    {
      icon: "fa fa-key",
      title: "API Key Management",
      description: "Secure API key generation, listing, and revocation system with permission scopes, usage tracking, and audit logging for API access control.",
    },
    {
      icon: "fa fa-tasks",
      title: "Request Management",
      description: "Monitor and manage system requests with filtering, status tracking, approval workflows, and comprehensive request history for operational oversight.",
    },
    {
      icon: "fa fa-crown",
      title: "Subscription Management",
      description: "Handle merchant subscription tiers, billing cycles, feature access control, and automated subscription renewal processes.",
    },
    {
      icon: "fa fa-shield-alt",
      title: "Security & Authentication",
      description: "Advanced security features including password management, two-factor authentication (2FA), session control, and comprehensive security audit trails.",
    },
  ];

  const technicalHighlights = [
    {
      title: "Microservice Architecture",
      description: "Implemented separate microservices for user management and request processing, enabling independent scaling, deployment, and maintenance of critical system components.",
    },
    {
      title: "Event-Driven Communication",
      description: "Leveraged RabbitMQ message broker for asynchronous communication between microservices, ensuring loose coupling and high system resilience with guaranteed message delivery.",
    },
    {
      title: "Next.js Server Components",
      description: "Utilized Next.js 14 with server-side rendering and server components for optimal performance, SEO benefits, and reduced client-side JavaScript bundle sizes.",
    },
    {
      title: "Prisma Type-Safe ORM",
      description: "Implemented Prisma for type-safe database operations with automatic TypeScript generation, migration management, and optimized query performance across all microservices.",
    },
    {
      title: "Shadcn Component Library",
      description: "Built consistent, accessible UI with Shadcn/ui components on top of Tailwind CSS, ensuring a cohesive design system and accelerated development workflow.",
    },
    {
      title: "RESTful & GraphQL APIs",
      description: "Designed comprehensive APIs using NestJS with proper versioning, documentation via Swagger, authentication middleware, and robust error handling mechanisms.",
    },
  ];

  const architectureFeatures = [
    {
      icon: "fa fa-project-diagram",
      title: "User Microservice",
      points: [
        "Merchant and store management",
        "Authentication and authorization",
        "Role-based access control (RBAC)",
        "Password and 2FA handling",
        "User profile management",
      ],
    },
    {
      icon: "fa fa-network-wired",
      title: "Request Microservice",
      points: [
        "Request processing and tracking",
        "Approval workflow management",
        "Request history and auditing",
        "Status monitoring and updates",
        "Integration with payment processing",
      ],
    },
    {
      icon: "fa fa-exchange-alt",
      title: "Message Queue Integration",
      points: [
        "Asynchronous event publishing",
        "Inter-service communication",
        "Guaranteed message delivery",
        "Dead letter queue handling",
        "Event replay capabilities",
      ],
    },
  ];

  const challenges = [
    {
      challenge: "Microservice Data Consistency",
      solution: "Implemented eventual consistency patterns with RabbitMQ event sourcing, saga patterns for distributed transactions, and compensating transactions to ensure data integrity across services.",
    },
    {
      challenge: "Real-time Admin Dashboard Updates",
      solution: "Developed Server-Sent Events (SSE) integration with Next.js for live invoice status updates, merchant activity monitoring, and system health metrics without constant polling.",
    },
    {
      challenge: "Complex Merchant-Store Relationship",
      solution: "Designed a flexible multi-tenancy system allowing merchants to manage multiple stores with isolated configurations while maintaining centralized billing and reporting.",
    },
    {
      challenge: "Secure API Key Management",
      solution: "Created a robust API key lifecycle management system with hashed storage, automatic expiration, rate limiting per key, and comprehensive access logging for security auditing.",
    },
    {
      challenge: "SMTP Configuration Validation",
      solution: "Built a real-time SMTP testing framework that validates server credentials, tests email delivery, and provides detailed diagnostic information before saving configurations.",
    },
  ];

  const adminModules = [
    {
      title: "Merchant Operations",
      features: [
        "List all merchants with search and filtering",
        "Add new merchant accounts with validation",
        "Edit merchant details and configurations",
        "Secure password reset functionality",
        "Merchant removal with data cleanup",
        "Create and assign stores to merchants",
      ],
    },
    {
      title: "Store Management",
      features: [
        "View all stores across merchants",
        "Edit store-specific settings",
        "Configure exchange rates per store",
        "Monitor store invoices and transactions",
        "Customize checkout appearance and branding",
        "Manage store-level user permissions",
      ],
    },
    {
      title: "System Administration",
      features: [
        "Email SMTP server configuration",
        "Server policies and global settings",
        "API key generation and management",
        "Request approval workflows",
        "Subscription tier management",
        "Security settings and 2FA enforcement",
      ],
    },
    {
      title: "Invoice & Reporting",
      features: [
        "Advanced invoice search by ID or amount",
        "Time-based filtering and date ranges",
        "Status-based filtering (pending, paid, expired)",
        "Paginated results for performance",
        "Export capabilities for accounting",
        "Real-time invoice status updates",
      ],
    },
  ];

  const screenshots = [
    { title: "Merchant Dashboard", path: "/screenshots/admin-merchant-list.png" },
    { title: "Store Management", path: "/screenshots/admin-store-management.png" },
    { title: "Invoice Listing", path: "/screenshots/admin-invoices.png" },
    { title: "API Key Management", path: "/screenshots/admin-api-keys.png" },
    { title: "SMTP Configuration", path: "/screenshots/admin-smtp-settings.png" },
    { title: "Server Settings", path: "/screenshots/admin-server-settings.png" },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900"}`}>
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
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              isDarkMode ? "bg-cyan-400/10 text-cyan-400" : "bg-purple-100 text-purple-600"
            }`}>
              {projectInfo.company}
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-ovo font-bold mb-6">
            {projectInfo.title}
          </h1>
          
          <p className={`text-xl sm:text-2xl mb-4 font-medium ${
            isDarkMode ? "text-cyan-400" : "text-purple-600"
          }`}>
            {projectInfo.subtitle}
          </p>

          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 leading-relaxed font-ovo">
            {projectInfo.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className={`px-4 py-2 rounded-full text-sm ${
              isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
            }`}>
              <i className="fa fa-briefcase mr-2"></i>
              {projectInfo.role}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm ${
              isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
            }`}>
              <i className="fa fa-calendar mr-2"></i>
              {projectInfo.duration}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/projects/chainnative/merchant"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                isDarkMode
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                  : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              }`}
            >
              <i className="fa fa-link"></i>
              View Merchant System
            </Link>
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
      <section className={`w-full px-6 sm:px-8 md:px-[12%] py-16 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}>
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
                <p className={`text-xs ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}>
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
            Administrative Features
          </h2>
          <p className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Comprehensive tools for managing merchants, stores, and system-wide configurations
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
                <i className={`${feature.icon} text-3xl mb-4 block ${
                  isDarkMode ? "text-cyan-400" : "text-purple-600"
                }`}></i>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Architecture Features */}
      <section className={`w-full px-6 sm:px-8 md:px-[12%] py-16 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold text-center mb-4">
            Microservice Architecture
          </h2>
          <p className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Independent, scalable services communicating via event-driven architecture
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {architectureFeatures.map((arch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  isDarkMode ? "bg-cyan-400/10" : "bg-purple-100"
                }`}>
                  <i className={`${arch.icon} text-2xl ${
                    isDarkMode ? "text-cyan-400" : "text-purple-600"
                  }`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">{arch.title}</h3>
                <ul className="space-y-2">
                  {arch.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i className={`fa fa-check-circle mt-1 text-sm ${
                        isDarkMode ? "text-cyan-400" : "text-purple-600"
                      }`}></i>
                      <span className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Admin Modules */}
      <section className="w-full px-6 sm:px-8 md:px-[12%] py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold text-center mb-12">
            Admin Panel Modules
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {adminModules.map((module, index) => (
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
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? "text-cyan-400" : "text-purple-600"
                }`}>
                  {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i className={`fa fa-angle-right mt-1 ${
                        isDarkMode ? "text-cyan-400" : "text-purple-600"
                      }`}></i>
                      <span className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}>
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

      {/* Technical Highlights */}
      <section className={`w-full px-6 sm:px-8 md:px-[12%] py-16 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}>
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
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? "text-cyan-400" : "text-purple-600"
                }`}>
                  {highlight.title}
                </h3>
                <p className={`leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
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
          <p className={`text-center max-w-2xl mx-auto mb-12 font-ovo ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Complex problems solved during the development of this microservice architecture
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
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    isDarkMode ? "bg-red-400/10" : "bg-red-100"
                  }`}>
                    <i className={`fa fa-exclamation-triangle ${
                      isDarkMode ? "text-red-400" : "text-red-600"
                    }`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      Challenge: {item.challenge}
                    </h3>
                    <div className="flex items-start gap-4 mt-3">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        isDarkMode ? "bg-green-400/10" : "bg-green-100"
                      }`}>
                        <i className={`fa fa-check-circle ${
                          isDarkMode ? "text-green-400" : "text-green-600"
                        }`}></i>
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium mb-1 ${
                          isDarkMode ? "text-green-400" : "text-green-600"
                        }`}>
                          Solution:
                        </h4>
                        <p className={`leading-relaxed ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}>
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
      <section className={`w-full px-6 sm:px-8 md:px-[12%] py-16 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-ovo font-bold text-center mb-12">
            Admin Panel Screenshots
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl overflow-hidden shadow-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className={`aspect-video flex items-center justify-center ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                }`}>
                  <div className="text-center">
                    <i className={`fa fa-image text-6xl mb-4 ${
                      isDarkMode ? "text-gray-600" : "text-gray-400"
                    }`}></i>
                    <p className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}>
                      Screenshot Placeholder
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-center">{screenshot.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <p className={`text-center mt-8 text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}>
            <i className="fa fa-info-circle mr-2"></i>
            Screenshots showcase the admin panel interface and key features
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
            Explore the Complete System
          </h2>
          <p className={`mb-8 font-ovo ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            See how the merchant and admin systems work together to create a comprehensive payment gateway solution
          </p>
            <Link
              href="/projects/chainnative/merchant"
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-full border transition-all duration-300 ${
                isDarkMode
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                  : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              }`}
            >
              <i className="fa fa-store"></i>
              View Merchant System
            </Link>
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