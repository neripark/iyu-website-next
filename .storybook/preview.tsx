import type { Preview } from "@storybook/nextjs";
import { Meta } from "../src/components/Meta";
import "../src/styles/base.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Meta />
        <Story />
      </>
    ),
  ],
};

export default preview;
