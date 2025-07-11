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
  metadataBase: new URL("https://www.hninhninwai.com"),
  title: {
    default:
      "Hnin Hnin Wai - Portfolio | Software Developer, Mobile Developer & Flutter Expert",
    template: "%s | Hnin Hnin Wai - Portfolio",
  },
  description:
    "Hnin Hnin Wai's portfolio - A professional Software Developer with expertise in mobile and web applications. Specializing in Flutter, React, and full-stack development.",
  keywords: [
    "Hnin Hnin Wai",
    "hnin hnin wai",
    "hninhninwai",
    "hninwai",
    "Flutter Developer",
    "Mobile Developer",
    "Software Developer",
    "Portfolio",
    "React Developer",
    "Full Stack Developer",
    "Web Developer",
    "Myanmar Developer",
  ],
  authors: [{ name: "Hnin Hnin Wai" }],
  creator: "Hnin Hnin Wai",
  publisher: "Hnin Hnin Wai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Hnin Hnin Wai - Portfolio | Software Developer",
    description:
      "Hnin Hnin Wai's portfolio - A professional Software Developer with expertise in mobile and web applications. Specializing in Flutter, React, and full-stack development.",
    siteName: "Hnin Hnin Wai - Portfolio",
    images: [
      {
        url: "/images/shwe.jpg",
        width: 1200,
        height: 630,
        alt: "Hnin Hnin Wai - Software Developer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hnin Hnin Wai",
              jobTitle: "Software Developer",
              description:
                "Professional Software Developer with expertise in mobile and web applications",
              url: "https://www.hninhninwai.com",
              sameAs: [
                "https://www.linkedin.com/in/hnin-hnin-wai-97447a185/",
                "https://github.com/shwehnin",
              ],
              knowsAbout: [
                "Flutter Development",
                "Mobile Development",
                "Software Development",
                "React Development",
                "Full Stack Development",
              ],
              image: "https://www.hninhninwai.com/images/shwe.jpg",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
