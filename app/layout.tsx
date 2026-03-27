import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IOTA Builder Passport",
  description:
    "Premium YC-style demo for builder identity, credentials, notarized proof bundles, and committee-grade review on IOTA."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
