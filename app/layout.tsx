import "./globals.css";
import type { Metadata } from "next";
import { siteMetadata } from "./site-metadata";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
