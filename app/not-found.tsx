"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      router.push("/");
    }
  }, [seconds, router]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-800 animate-pulse">404</h1>
        <p className="text-2xl font-semibold text-gray-700">Page Not Found</p>
        <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
          <span>Redirecting to home in {seconds} second{seconds !== 1 && "s"}</span>
          <div className="flex gap-1">
            <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
          </div>
        </div>
      </div>
    </div>
  );
}