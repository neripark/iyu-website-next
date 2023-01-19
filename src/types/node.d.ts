/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly APP_ENV: string;
    readonly CONTENTFUL_SPACE_ID: string;
    readonly CONTENTFUL_ACCESS_TOKEN: string;
    readonly LINE_NOTIFY_TOKEN: string;
    readonly GOOGLE_TAG_MANAGER_CONTAINER_ID: string;
  }
}
