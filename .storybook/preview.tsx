import type { Preview } from "@storybook/react";
// import * as NextImage from "next/image";
import * as Image from "next/image";
// note:
// React を import しないとJSXのところで `'React' は UMD グローバルを参照していますが、...` エラーが出る。
// todo: React を import しなくても済む方法を探す。
import * as React from "react";

// note: next/image に width と height を要求される。なぜアプリケーション側では怒られないの？？
// const OriginalNextImage = NextImage.default;
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   // @ts-ignore
//   value: (props: any) => <OriginalNextImage {...props} unoptimized />,
// });

interface Config {
  configurable: boolean;
  value: React.FC;
}

const config: Config = {
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
};

Object.defineProperty(Image, "default", config);

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
