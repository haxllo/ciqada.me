import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const melodrama = localFont({
  src: "../fonts/Melodrama-Variable.woff2",
  variable: "--font-display",
  display: "swap",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Siraj Habeebur Rahman — Full-Stack Developer Portfolio",
  description:
    "Full-stack developer and BIT undergraduate specializing in Next.js, React, Node.js, and TypeScript. Building production-ready web applications with modern tools and cloud platforms.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Siraj Habeebur Rahman" }],
  openGraph: {
    title: "Muhammad Siraj Habeebur Rahman — Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, React, and Node.js. Building production-ready web applications.",
    url: "https://ciqada.me",
    siteName: "Muhammad Siraj Habeebur Rahman Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Siraj Habeebur Rahman — Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, React, and Node.js. Building production-ready web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${melodrama.variable} ${satoshi.variable}`}>
        {children}
      </body>
    </html>
  );
}
