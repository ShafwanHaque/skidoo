import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChainNative Admin — Payment Gateway Dashboard",
  description: "Case study: ChainNative Admin Panel — a full-stack blockchain-native payment gateway admin dashboard built with NestJS, Next.js, and PostgreSQL for managing merchants, transactions, and system settings.",
  alternates: {
    canonical: "/projects/chainnative/admin",
  },
  openGraph: {
    title: "ChainNative Admin — Payment Gateway Dashboard",
    description: "Full-stack payment gateway admin dashboard built with NestJS, Next.js, and PostgreSQL.",
    url: "/projects/chainnative/admin",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
