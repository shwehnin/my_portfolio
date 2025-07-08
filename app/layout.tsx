import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Hnin Hnin Wai - Portfolio | Software Developer, Mobile Developer & Flutter Expert",
  description:
    "Hnin Hnin Wai's portfolio - A professional Software Developer with expertise in mobile and web applications",
  keywords:
    "Hnin Hnin Wai, hnin hnin wai, hninhninwai, hninwai, Flutter Developer, Mobile Developer, Software Developer, Portfolio,",
  alternates: {
    canonical: "https://www.hninhninwai.com/",
  },
  openGraph: {
    title: "Hnin Hnin Wai - Portfolio | Software Developer",
    description:
      "Hnin Hnin Wai's portfolio - A professional Software Developer with expertise in mobile and web applications",
    url: "https://www.hninhninwai.com/",
    siteName: "Hnin Hnin Wai - Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
