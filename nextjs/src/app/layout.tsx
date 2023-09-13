"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import nexys from "./nexys";
import { useReportWebVitals } from "next/web-vitals";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexys NextJS Example",
  description: "Nexys NextJS Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useReportWebVitals((metric) => {
    nexys.metric(metric);
  });

  useEffect(() => {
    nexys.init();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
