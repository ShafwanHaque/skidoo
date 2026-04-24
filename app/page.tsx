// NO "use client" here!
import Link from "next/link";
import ThemeProvider from "./components/ThemeProvider";

export default function Page() {
  return (
    <>
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </Link>
      <ThemeProvider />
    </>
  );
}