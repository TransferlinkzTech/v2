import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Stops `next dev` from generating AGENTS.md
  agentRules: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
