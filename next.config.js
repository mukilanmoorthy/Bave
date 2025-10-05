const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: true, // disable PWA to test build
});

module.exports = withPWA({
  reactStrictMode: true,
});
