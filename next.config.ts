import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.corbettvanvaas.com",
      },
    ],
  },
};

export default nextConfig;
