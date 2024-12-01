'use client'
import { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import { RootProvider } from "./providers";
import localFont from "next/font/local";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

// Remove the metadata export since it can't be in a client component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebProvider>
      <html lang="en">
        <body>
          <RootProvider>{children}</RootProvider>
        </body>
      </html>
    </ThirdwebProvider>
  );
}

