/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveExtensions: [".mp4"],
    },
  },
};

module.exports = nextConfig;

const withVideos = require("next-videos");

module.exports = withVideos();
