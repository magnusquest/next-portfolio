import { Analytics } from "@vercel/analytics/react";
import AppHeader from "@/components/AppHeader";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Hamburger from "@/components/Hamburger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin Cordero",
  description: "Full Stack Software Engineer and AI Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <Hamburger />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
