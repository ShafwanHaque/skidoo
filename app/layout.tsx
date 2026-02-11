import type { Metadata, Viewport } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // ✓ Already correct!
  variable: "--font-outfit",
  fallback: ['system-ui', 'arial'], // ADD: Reduce layout shift
  adjustFontFallback: true, // ADD: Match fallback font metrics
  preload: true, // ADD: Prioritize loading
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap", // ✓ Already correct!
  variable: "--font-ovo",
  fallback: ['Georgia', 'serif'], // ADD: Reduce layout shift
  adjustFontFallback: true, // ADD: Match fallback font metrics
  preload: true, // ADD: Prioritize loading
});

// Viewport configuration to prevent mobile zoom
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6c00d1" },
    { media: "(prefers-color-scheme: dark)", color: "#00c8ff" }
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Shafwanul Haque Chowdhury | Full-Stack Developer Portfolio",
    template: "%s | Shafwanul Haque Chowdhury"
  },
  description: "Full-stack web developer from Dhaka, Bangladesh, specializing in NestJS, Next.js, ASP.NET Core, Vue.js, Laravel and modern web technologies. Currently building real-world solutions at CodeLab FZC LLC, UAE since June 2024.",
  keywords: [
    "Shafwanul Haque Chowdhury",
    "Full-stack developer",
    "Web developer Bangladesh",
    "NestJS developer",
    "Next.js developer",
    "ASP.NET Core developer",
    "Vue.js developer",
    "Laravel developer",
    "TypeScript developer",
    "Frontend developer",
    "Backend developer",
    "Dhaka developer",
    "CodeLab FZC"
  ],
  authors: [{ name: "Shafwanul Haque Chowdhury" }],
  creator: "Shafwanul Haque Chowdhury",
  publisher: "Shafwanul Haque Chowdhury",
  metadataBase: new URL("https://shafwanulhaquechowdhury.vercel.app"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Shafwanul Haque Chowdhury | Full-Stack Developer Portfolio",
    description: "Full-stack web developer from Dhaka, Bangladesh, specializing in NestJS, Next.js, ASP.NET Core, and modern web technologies. Building impactful digital solutions.",
    siteName: "Shafwanul Haque Chowdhury Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shafwanul Haque Chowdhury - Full-Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shafwanul Haque Chowdhury | Full-Stack Developer",
    description: "Full-stack web developer specializing in NestJS, Next.js, ASP.NET Core, and modern web technologies",
    images: ["/og-image.jpg"],
    creator: "@yourtwitter"
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
    google: "your-google-verification-code",
  },
  // ADD: Web App Manifest
  manifest: "/manifest.json",
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.WebP" />
        
        {/* CRITICAL FIX: Change to manifest.json instead of site.webmanifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shafwanul Haque Chowdhury",
              "url": "https://shafwanulhaquechowdhury.vercel.app",
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
              "email": "shafwanulhaquechowdhury@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/shafwanul-haque-chowdhury",
                "https://github.com/shafwanHaque"
              ],
              "knowsAbout": [
                "NestJS",
                "Next.js",
                "ASP.NET Core",
                "Vue.js",
                "Laravel",
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