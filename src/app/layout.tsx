import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "วิศรุต ปะวันนา | Digital Product / UX/UI / Graphic Portfolio",
  description:
    "Portfolio bilingual ของวิศรุต ปะวันนา สำหรับงาน Digital Product, UX/UI, Graphic, Workflow และ Developer Handoff",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={kanit.variable}>{children}</body>
    </html>
  );
}
