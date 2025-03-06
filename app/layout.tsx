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
  title: "WFC Technology",
  description: "Generated by BSoft",
  icons: "https://www.wfctechnology.com/logo/WFC.png",
  openGraph: {
    title: "WFC Technology",
    description: "Generated by BSoft",
    siteName: "WFC Technology",
    url: "https://www.wfctechnology.com",
    // images: [
    //   {
    //     url: "https://www.wfctechnology.com/logo/WFC.png",
    //     alt: "WFC Technology Logo",
    //   },
    // ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
