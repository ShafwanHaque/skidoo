"use client";
import Resmo from "@/app/components/Resmo";
import { useState, useEffect } from "react";

export default function ResmoPage() {
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
      <Resmo isDarkMode={isDarkMode} />
    </main>
  );
}
