import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/website", destination: "/seo-websites", permanent: true },
      { source: "/get-more-clients", destination: "/meta-ads", permanent: true },
      { source: "/nfc-business-card", destination: "/business-cards", permanent: true },
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/brand-strategy-call", destination: "/contact", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/brand-ecosystem", destination: "/", permanent: true },
      { source: "/scale-personal-brand", destination: "/", permanent: true }
    ];
  }
};

export default nextConfig;
