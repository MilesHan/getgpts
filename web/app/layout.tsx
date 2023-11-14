import "./globals.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GetGPTs - Get Useful GPTs From Third-party GPTs'store",
  description:
    "GetGPTs is a Third-party GPTs collection website. Support search useful GPTs",
  keywords:
    "GPTs,gpts,useful GPTs,GPTsHunter,GPTs Hunter,GPTs Works,GPTs Today,GPTs store,ChatGPT,OpenAI,OpenAI GPTs,vector search GPTs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>

        <script
          defer
          data-domain="getgpts.xyz"
          src="https://plausible.io/js/script.js"
        ></script>
      </body>
    </html>
  );
}
