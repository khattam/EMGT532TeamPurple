import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StayAwake - Drowsiness Detection Wearable",
  description: "Revolutionary wearable device that detects drowsiness and keeps you alert with progressive shock technology. Safe, comfortable, and designed for daily use.",
  keywords: ["drowsiness detection", "wearable", "safety device", "alertness", "shock technology"],
  authors: [{ name: "EMGT532 Team Purple" }],
  openGraph: {
    title: "StayAwake - Drowsiness Detection Wearable",
    description: "Revolutionary wearable device that detects drowsiness and keeps you alert.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnalyticsTracker />
        <Navigation />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
