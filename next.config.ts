import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "img.missiongujarat.in",
        pathname: "/i/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
