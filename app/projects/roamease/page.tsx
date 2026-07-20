"use client";
import { useState, useEffect } from "react";
import RoamEase from "@/app/components/RoamEase";

export default function RoamEasePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDarkMode(shouldUseDarkMode);
    document.documentElement.classList.toggle("dark", shouldUseDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <main>
      <RoamEase isDarkMode={isDarkMode} />
    </main>
  );
}
