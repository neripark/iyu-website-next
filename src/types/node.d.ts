/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly APP_ENV: string;
    readonly CONTENTFUL_SPACE_ID: string;
    readonly CONTENTFUL_ACCESS_TOKEN: string;
    readonly LINE_MESSAGING_API_CHANNEL_ACCESS_TOKEN: string;
    readonly LINE_GROUP_ID: string;
    readonly GOOGLE_TAG_MANAGER_CONTAINER_ID: string;
  }
}
