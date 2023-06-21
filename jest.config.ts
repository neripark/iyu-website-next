import type { Config } from "jest";

const jestConfig: Config = {
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
  },
};

export default jestConfig;
