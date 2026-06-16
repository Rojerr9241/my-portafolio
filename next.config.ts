import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', /* Configure Next.js to generate HTML/CSS/JS (SSG) files. */
  reactCompiler: true,
  images: { unoptimized: true },
};

export default nextConfig;
