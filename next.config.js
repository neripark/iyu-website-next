/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // scss の @import で相対パスを書かないようにするための設定
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  images: {
    // for resolve error: `Error: Image Optimization using Next.js' default loader is not compatible with `next export`.`
    unoptimized: true,
  },
  env: {
    // src/types/node.d.ts で要定義
    APP_ENV: process.env.APP_ENV, // NODE_ENV には `local` が存在しないので作成した。
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
