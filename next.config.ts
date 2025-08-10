import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brand.stripe.com",
      },
    ],
  },
};

export default nextConfig;
