import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import StyledComponentsRegistry from "./registry";
import "./globals.css";
import { Suspense } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "$CALTYCAP - The Captain of Meme Coins on BSC",
  description:
    "Join the $CALTYCAP crew! The most adventurous meme coin on Binance Smart Chain, listed on Four.meme",
  generator: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./images/pirate-octopus.jpg" />
      </head>
      <body className={spaceGrotesk.variable}>
        <Suspense fallback={null}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
