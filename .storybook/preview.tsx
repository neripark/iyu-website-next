import type { Preview } from "@storybook/react";
// import * as NextImage from "next/image";
import * as Image from "next/image";

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   // @ts-ignore
//   value: (props: any) => <OriginalNextImage {...props} unoptimized />,
// });

Object.defineProperty(Image, "default", {
  configurable: true,
  value: (props: any) => {
    const { width, height } = props;
    const ratio = (height / width) * 100;
    return (
      <div
        style={{
          paddingBottom: `${ratio}%`,
          position: "relative",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            position: "absolute",
            minWidth: "100%",
            minHeight: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          {...props}
        />
      </div>
    );
  },
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
