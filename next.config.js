/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir: "out",
  basePath: "/transMigrate2.0",
  assetPrefix: "/transMigrate2.0/",
  experimental: {
    turbo: {
      resolveExtensions: [".mp4"],
    },
  },
};

module.exports = nextConfig;

const withVideos = require("next-videos");

module.exports = withVideos();
