import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["chanhdai-macbook.local"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
};

export default nextConfig;
