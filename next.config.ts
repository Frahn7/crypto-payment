import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["payments.pre-bnvo.com"],
  },
};

export default nextConfig;
