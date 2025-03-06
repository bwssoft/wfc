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
  title: "WFC Technolgy",
  description: "Generated by BSoft",
  icons: "/logo/WFC.svg",
  openGraph: {
    title: "WFC Technology",
    description: "Generated by BSoft",
    siteName: "WFC Technology",
    images: [
      {
        url: "/public/logo/WFC.svg", // Substitua pelo caminho correto da imagem
        width: 1200, // Recomenda-se 1200x630 para melhor exibição
        height: 630,
        alt: "WFC Technology Logo",
      },
    ],
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
