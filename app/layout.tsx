import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit"
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-ovo"
});

export const metadata: Metadata = {
  title: {
    default: "Shafwanul Haque Chowdhury | Full-Stack Developer Portfolio",
    template: "%s | Shafwanul Haque Chowdhury"
  },
  description: "Full-stack web developer from Dhaka, Bangladesh, specializing in React, Next.js, Node.js, and modern web technologies. Currently building real-world solutions at CodeLab FZC LLC, UAE since June 2024.",
  keywords: [
    "Shafwanul Haque Chowdhury",
    "Full-stack developer",
    "Web developer Bangladesh",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "JavaScript developer",
    "TypeScript developer",
    "Frontend developer",
    "Backend developer",
    "Dhaka developer",
    "CodeLab FZC"
  ],
  authors: [{ name: "Shafwanul Haque Chowdhury" }],
  creator: "Shafwanul Haque Chowdhury",
  publisher: "Shafwanul Haque Chowdhury",
  metadataBase: new URL("https://shafwanulhaque.com"), // Replace with your actual domain
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Shafwanul Haque Chowdhury | Full-Stack Developer Portfolio",
    description: "Full-stack web developer from Dhaka, Bangladesh, specializing in React, Next.js, and modern web technologies. Building impactful digital solutions.",
    siteName: "Shafwanul Haque Chowdhury Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add an Open Graph image (1200x630px)
        width: 1200,
        height: 630,
        alt: "Shafwanul Haque Chowdhury - Full-Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shafwanul Haque Chowdhury | Full-Stack Developer",
    description: "Full-stack web developer specializing in React, Next.js, and modern web technologies",
    images: ["/og-image.jpg"], // Same image as Open Graph
    creator: "@yourtwitter" // Add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code", // Add Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO meta tags */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6c00d1" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shafwanul Haque Chowdhury",
              "url": "https://shafwanulhaque.com", // Replace with your actual domain
              "jobTitle": "Full-Stack Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "CodeLab FZC LLC"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dhaka",
                "addressCountry": "Bangladesh"
              },
              "email": "safwan198207@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/shafwanul-haque-chowdhury",
                "https://github.com/shafwanHaque"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "Full-Stack Development",
                "Web Development"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${ovo.variable} font-outfit antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}