import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WAVE — Global Staging Architecture & Live Concert Production",
  description:
    "Next-generation touring audio, dynamic stadium lighting, and technical precision for international live concerts and global festivals.",
  keywords: [
    "WAVE",
    "Live Concert Production",
    "Stage Engineering",
    "Acoustic Physics",
    "Tour Lighting",
    "DMX Scenography",
    "Festival Staging",
  ],
  openGraph: {
    title: "WAVE — Global Staging Architecture",
    description:
      "At WAVE, we reject formulaic arena templates in pursuit of raw sensory synchronization.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/images/wave-nav-logo.png",
    shortcut: "/images/wave-nav-logo.png",
    apple: "/images/wave-nav-logo.png",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@400;500;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#090C25] text-[#C1C6D7] antialiased selection:bg-[#FF2D55] selection:text-white">
        {children}
      </body>
    </html>
  );
}
