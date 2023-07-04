import type { Config } from "jest";
import nextJest from "next/jest";

// ref: https://nextjs.org/docs/pages/building-your-application/optimizing/testingimport type { Config } from "jest";
const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
