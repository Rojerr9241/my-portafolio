import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800" ],
  variable: "--font-jetbrainsMono",
  subsets: ["latin"], 
})

export const metadata: Metadata = {
  title: "My Portafolio",
  description: "Created with Next.js and AWS",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
