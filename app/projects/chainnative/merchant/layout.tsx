import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChainNative Merchant — Payment Gateway Portal",
  description: "Case study: ChainNative Merchant Portal — a full-stack payment gateway system built with ASP.NET Core and PostgreSQL, enabling merchants to manage transactions, wallets, and settlements.",
  alternates: {
    canonical: "/projects/chainnative/merchant",
  },
  openGraph: {
    title: "ChainNative Merchant — Payment Gateway Portal",
    description: "Full-stack payment gateway merchant portal built with ASP.NET Core and PostgreSQL.",
    url: "/projects/chainnative/merchant",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
