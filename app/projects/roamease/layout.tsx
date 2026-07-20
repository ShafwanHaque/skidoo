import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RoamEase — Travellers Management System",
  description: "Case study: RoamEase — a Windows desktop application for travellers management built with C# and MS SQL Server. Features booking management, customer records, and itinerary tracking.",
  alternates: {
    canonical: "/projects/roamease",
  },
  openGraph: {
    title: "RoamEase — Travellers Management System",
    description: "Windows desktop travellers management system built with C# and MS SQL Server.",
    url: "/projects/roamease",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
