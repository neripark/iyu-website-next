import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"], // note: next/image を扱うための記述
  async viteFinal(config, options) {
    // ref: https://storybook.js.org/docs/react/builders/vite#configuration
    return mergeConfig(config, {
      resolve: {
        alias: [
          { find: "@/", replacement: `${__dirname}/../src/` },
          {
            find: "variables",
            replacement: `${__dirname}/../src/styles/variables`,
          },
          {
            find: "functions",
            replacement: `${__dirname}/../src/styles/functions`,
          },
          { find: "utils", replacement: `${__dirname}/../src/styles/utils` },
        ],
      },
      // note: next/image が読めないことの回避策
      // ref: https://github.com/vercel/next.js/issues/18393#issuecomment-750910068
      define: {
        "process.env": {},
      },
    });
  },
};
export default config;
