import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

import NavProps from "./components/nav";
import { Suspense } from "react";
import Loading from "./components/loading";

const inter = Inter({ subsets: ["latin"] });

const NueueMontreal = localFont({
  src: [
    {
      path: './NeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './NeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './NeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: false,
  variable: '--neue',
  fallback: [
    'apple-system',
    'blinkmacsystemfont',
    'segoe ui',
    'roboto',
    'oxygen',
    'ubuntu',
    'cantarell',
    'fira sans',
    'droid sans',
    'helvetica neue',
    'sans-serif',
  ],
})

export const metadata: Metadata = {
  title: "Jimi Denysiak",
  description: "Junior Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NueueMontreal.className}>
        <NavProps>
          <Suspense fallback={<Loading />}>
            <div className="">
              {children}
            </div>
          </Suspense>
        </NavProps>
      </body>
    </html>
  );
}
