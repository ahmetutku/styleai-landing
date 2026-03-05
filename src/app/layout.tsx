import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://styleai.app"),
  title: "StyleAI | AI That Styles Your Closet",
  description:
    "StyleAI helps you generate polished outfits from the clothes you already own with a privacy-first experience.",
  openGraph: {
    title: "StyleAI | AI That Styles Your Closet",
    description:
      "Generate outfits from your existing wardrobe with a calm, privacy-first AI styling experience.",
    url: "https://styleai.app",
    siteName: "StyleAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StyleAI | AI That Styles Your Closet",
    description:
      "Generate outfits from your existing wardrobe with a calm, privacy-first AI styling experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
