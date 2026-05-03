"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import Link from "next/link";

type ContactProps = {
  isDarkMode: boolean;
};

const LOCAL_KEY = "contact_retry_after"; // stores a retryAfter timestamp (ms)

function formatCountdown(ms: number): string {
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

const Contact = ({ isDarkMode }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [isRateLimited, setIsRateLimited] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const [cooldownTotal, setCooldownTotal] = useState(0);

  const checkRateLimit = useCallback(() => {
    try {
      const stored = localStorage.getItem(LOCAL_KEY);
      if (stored) {
        const retryAfter = parseInt(stored, 10);
        const remaining = retryAfter - Date.now();
        if (remaining > 0) {
          setIsRateLimited(true);
          setCooldownRemaining(remaining);
          setCooldownTotal((prev) => (prev > 0 ? prev : remaining));
          return;
        }
      }
    } catch {}
    setIsRateLimited(false);
    setCooldownRemaining(0);
  }, []);

  // Replace the localStorage-only checkRateLimit with this:
  useEffect(() => {
    const checkWithServer = async () => {
      try {
        const res = await fetch("/api/contact");
        const data = await res.json();
        if (data.rateLimited) {
          const remaining = data.retryAfter - Date.now();
          localStorage.setItem(LOCAL_KEY, String(data.retryAfter));
          setCooldownTotal(remaining);
          setCooldownRemaining(remaining);
          setIsRateLimited(true);
        } else {
          localStorage.removeItem(LOCAL_KEY);
          setIsRateLimited(false);
        }
      } catch {
        // fallback to localStorage if server unreachable
        checkRateLimit();
      }
    };

    checkWithServer();
  }, []);

  useEffect(() => {
    if (!isRateLimited) return;
    const interval = setInterval(() => {
      try {
        const stored = localStorage.getItem(LOCAL_KEY);
        if (stored) {
          const remaining = parseInt(stored, 10) - Date.now();
          if (remaining > 0) {
            setCooldownRemaining(remaining);
            return;
          }
        }
      } catch {}
      setIsRateLimited(false);
      setCooldownRemaining(0);
      localStorage.removeItem(LOCAL_KEY);
      clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, [isRateLimited]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRateLimited) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 429) {
        const retryAfter: number = data.retryAfter;
        const remaining = retryAfter - Date.now();
        localStorage.setItem(LOCAL_KEY, String(retryAfter));
        setCooldownTotal(remaining);
        setCooldownRemaining(remaining);
        setIsRateLimited(true);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
        return;
      }

      if (!res.ok) throw new Error(data.error ?? "Unknown error");

      // Success — lock UI based on server's retryAfter
      const retryAfter: number = data.retryAfter;
      const remaining = retryAfter - Date.now();
      localStorage.setItem(LOCAL_KEY, String(retryAfter));
      setCooldownTotal(remaining);
      setCooldownRemaining(remaining);
      setIsRateLimited(true);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress =
    cooldownTotal > 0 ? Math.max(0, 1 - cooldownRemaining / cooldownTotal) : 1;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-6 sm:px-8 md:px-[12%] py-16 sm:py-20 scroll-mt-20 overflow-x-hidden"
      aria-labelledby="contact-heading"
    >
      <motion.h2
        id="contact-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-ovo mb-8"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Have a project in mind or just want to chat? Feel free to reach out.
        I&apos;m always open to discussing new opportunities and collaborations.
      </motion.p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="space-y-8"
        >
          <div>
            <h3
              className={`text-2xl font-semibold mb-6 ${isDarkMode ? "text-cyan-400" : "text-purple-600"}`}
            >
              Contact Information
            </h3>
            <div className="space-y-4">
              <Link
                href="mailto:shafwanulhaquechowdhury@gmail.com"
                className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${isDarkMode ? "hover:bg-gray-800 text-gray-200" : "hover:bg-gray-100 text-gray-700"}`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? "bg-cyan-400/20" : "bg-purple-100"}`}
                >
                  <i
                    className={`fa fa-envelope text-xl ${isDarkMode ? "text-cyan-400" : "text-purple-600"}`}
                  ></i>
                </div>
                <div>
                  <p
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    Email
                  </p>
                  <p className="font-medium">
                    shafwanulhaquechowdhury@gmail.com
                  </p>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/shafwanul-haque-chowdhury"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${isDarkMode ? "hover:bg-gray-800 text-gray-200" : "hover:bg-gray-100 text-gray-700"}`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? "bg-cyan-400/20" : "bg-purple-100"}`}
                >
                  <i
                    className={`fa-brands fa-linkedin text-xl ${isDarkMode ? "text-cyan-400" : "text-purple-600"}`}
                  ></i>
                </div>
                <div>
                  <p
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    LinkedIn
                  </p>
                  <p className="font-medium">Connect with me</p>
                </div>
              </Link>

              <Link
                href="https://github.com/shafwanHaque"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${isDarkMode ? "hover:bg-gray-800 text-gray-200" : "hover:bg-gray-100 text-gray-700"}`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? "bg-cyan-400/20" : "bg-purple-100"}`}
                >
                  <i
                    className={`fa-brands fa-github text-xl ${isDarkMode ? "text-cyan-400" : "text-purple-600"}`}
                  ></i>
                </div>
                <div>
                  <p
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    GitHub
                  </p>
                  <p className="font-medium">View my work</p>
                </div>
              </Link>

              <div
                className={`flex items-center gap-4 p-4 rounded-lg ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? "bg-cyan-400/20" : "bg-purple-100"}`}
                >
                  <i
                    className={`fa fa-map-marker-alt text-xl ${isDarkMode ? "text-cyan-400" : "text-purple-600"}`}
                  ></i>
                </div>
                <div>
                  <p
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    Location
                  </p>
                  <p className="font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`p-6 rounded-lg ${isDarkMode ? "bg-gray-800/50" : "bg-gray-50"}`}
          >
            <h4
              className={`font-semibold mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
            >
              Let&apos;s Build Something Great
            </h4>
            <p
              className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Whether you have a project in mind, need technical consultation,
              or just want to connect, I&apos;m here to help bring your ideas to
              life.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className={`block mb-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
            >
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isRateLimited}
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${isDarkMode ? "bg-gray-800 border-gray-700 text-gray-200 focus:ring-cyan-400 disabled:opacity-40" : "bg-white border-gray-300 text-gray-900 focus:ring-purple-600 disabled:opacity-40"}`}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`block mb-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
            >
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isRateLimited}
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${isDarkMode ? "bg-gray-800 border-gray-700 text-gray-200 focus:ring-cyan-400 disabled:opacity-40" : "bg-white border-gray-300 text-gray-900 focus:ring-purple-600 disabled:opacity-40"}`}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className={`block mb-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isRateLimited}
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${isDarkMode ? "bg-gray-800 border-gray-700 text-gray-200 focus:ring-cyan-400 disabled:opacity-40" : "bg-white border-gray-300 text-gray-900 focus:ring-purple-600 disabled:opacity-40"}`}
              placeholder="Project Inquiry"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block mb-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              disabled={isRateLimited}
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none ${isDarkMode ? "bg-gray-800 border-gray-700 text-gray-200 focus:ring-cyan-400 disabled:opacity-40" : "bg-white border-gray-300 text-gray-900 focus:ring-purple-600 disabled:opacity-40"}`}
              placeholder="Tell me about your project..."
            />
          </div>

          {isRateLimited && (
            <div
              className={`p-4 rounded-lg ${isDarkMode ? "bg-yellow-900/30 border border-yellow-700/50" : "bg-yellow-50 border border-yellow-200"}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <i
                  className={`fa fa-clock text-sm ${isDarkMode ? "text-yellow-400" : "text-yellow-600"}`}
                ></i>
                <span
                  className={`text-sm font-medium ${isDarkMode ? "text-yellow-300" : "text-yellow-700"}`}
                >
                  Please wait before sending another message
                </span>
              </div>
              <div
                className={`w-full h-1.5 rounded-full mb-2 ${isDarkMode ? "bg-gray-700" : "bg-yellow-200"}`}
              >
                <div
                  className={`h-full rounded-full transition-all duration-500 ${isDarkMode ? "bg-yellow-400" : "bg-yellow-500"}`}
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <span
                className={`text-xs tabular-nums font-mono ${isDarkMode ? "text-yellow-400" : "text-yellow-600"}`}
              >
                {formatCountdown(cooldownRemaining)} remaining
              </span>
            </div>
          )}

          {submitStatus === "success" && (
            <div className="p-4 rounded-lg bg-green-100 text-green-700 flex items-center gap-2">
              <i className="fa fa-check-circle"></i>
              <span>
                Message sent successfully! I&apos;ll get back to you soon.
              </span>
            </div>
          )}

          {submitStatus === "error" && !isRateLimited && (
            <div className="p-4 rounded-lg bg-red-100 text-red-700 flex items-center gap-2">
              <i className="fa fa-exclamation-circle"></i>
              <span>Something went wrong. Please try again.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || isRateLimited}
            className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              isDarkMode
                ? "bg-cyan-400 text-gray-900 hover:bg-cyan-500 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            }`}
          >
            {isSubmitting ? (
              <>
                <i className="fa fa-spinner fa-spin"></i> Sending...
              </>
            ) : isRateLimited ? (
              <>
                <i className="fa fa-lock"></i> Locked —{" "}
                {formatCountdown(cooldownRemaining)}
              </>
            ) : (
              <>
                Send Message <i className="fa fa-paper-plane"></i>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
