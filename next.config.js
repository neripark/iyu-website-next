/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // scss の @import で相対パスを書かないようにするための設定
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

module.exports = nextConfig;
