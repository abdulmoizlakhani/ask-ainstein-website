import type { Metadata } from "next";
import { Inter, Source_Sans_3 as SourceSans3 } from "next/font/google";
import React from "react";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/Header/SubHeader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSans = SourceSans3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ask Ainstein",
  description:
    "Master every topic with personalized, Ai-powered guidance and curriculum-aligned practice questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSans.variable} bg-secondary-bg antialiased`}
      >
        <SubHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
