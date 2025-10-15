import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "./providers/QueryProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Axiom",
  description: "The Gateway to DeFi",
  keywords: "cryptocurrency, trading, DeFi, Solana, token pairs, market analytics",
  authors: [{ name: "Axiom Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Axiom",
    description: "Discover, track, and trade cryptocurrency pairs with advanced analytics and real-time market data.",
    type: "website",
    siteName: "Axiom",
    images: [
      {
        url: "/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Axiom - The Gateway to DeFi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiom",
    description: "Discover, track, and trade cryptocurrency pairs with advanced analytics and real-time market data.",
    images: ["/social-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#06070B" />
      </head>
      <body className={`${inter.variable}`}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
