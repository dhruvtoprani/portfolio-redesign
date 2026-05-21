import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MainNav } from "@/components/navigation/main-nav";
import { SiteFooter } from "@/components/navigation/site-footer";
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
  metadataBase: new URL("https://dhruvtoprani.com"),
  title: {
    default: "Dhruv Toprani | Systems Portfolio",
    template: "%s | Dhruv Toprani",
  },
  description:
    "I build intelligent systems that turn complexity into leverage across AI, robotics, product, and engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink-base text-smoke font-sans">
        <div className="page-shell min-h-screen flex flex-col">
          <div className="grain-overlay" aria-hidden />
          <MainNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
