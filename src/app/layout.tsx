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
  title: "Ciqada — Portfolio",
  description: "Portfolio showcasing selected skills, process, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${melodrama.variable} ${satoshi.variable}`}>
        {children}
      </body>
    </html>
  );
}
