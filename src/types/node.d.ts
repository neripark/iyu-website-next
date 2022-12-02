/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly APP_ENV: string;
    readonly CONTENTFUL_SPACE_ID: string;
    readonly CONTENTFUL_ACCESS_TOKEN: string;
    readonly LINE_TOKEN_TEST: string;
  }
}
