import { createClient, type EntrySkeletonType } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getEntries = <T extends EntrySkeletonType>(query?: any) =>
  client.getEntries<T>(query);
