"use client";
import { useEffect, useState } from "react";
import Projects from "../components/Projects";

export default function ProjectPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    // Initialize theme on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
        const shouldUseDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark);
    
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
    
    return (
        <>
            <Projects isDarkMode={isDarkMode}/>
        </>
    );
}