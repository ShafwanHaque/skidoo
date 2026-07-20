import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RESMO — Multi-School Japanese School Management System",
  description: "Case study: RESMO — a multi-school management system for Japanese schools built with Laravel, Vue.js, and MySQL. Handles student records, attendance, grading, and multi-tenant school administration.",
  alternates: {
    canonical: "/projects/resmo",
  },
  openGraph: {
    title: "RESMO — Multi-School Japanese School Management System",
    description: "Multi-school management system for Japanese schools built with Laravel, Vue.js, and MySQL.",
    url: "/projects/resmo",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
