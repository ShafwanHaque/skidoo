"use client";
import { useState, useEffect } from "react";
import ChainNativeMerchant from "@/app/components/ChainNativeMerchant";

export default function ChainNativeMerchantPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const shouldUseDarkMode =
      savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDarkMode(shouldUseDarkMode);
    document.documentElement.classList.toggle("dark", shouldUseDarkMode);
    setIsLoading(false);
  }, []);

  // Update theme when isDarkMode changes
  useEffect(() => {
    if (!isLoading) {
      document.documentElement.classList.toggle("dark", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode, isLoading]);

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <main className={isDarkMode ? "dark" : ""}>
      <ChainNativeMerchant isDarkMode={isDarkMode} />
    </main>
  );
}
