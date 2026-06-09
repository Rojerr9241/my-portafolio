import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800" ],
  variable: "--font-jetbrainsMono",
  subsets: ["latin"], 
})

export const metadata: Metadata = {
  title: "My Portafolio",
  description: "Created with Next.js and AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
