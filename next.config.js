const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Set output mode to be more forgiving
  output: 'standalone',
  // Force the share page to be dynamic
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['next-pwa']
  }
};

module.exports = withPWA(nextConfig);
