import { getEntries } from "@/lib/contentful";
import { Live } from "@/types";
import dayjs from "dayjs";
import { dummyLives } from "./mockData";

export const getLiveInfo = async (): Promise<Live[]> => {
  // note: 使用頻度が増えたら msw などの採用を考えること。現状は contentful からはモックの手段は提供されていない様子
  if (process.env.APP_ENV === "local") {
    return dummyLives;
  }
  return await repository();
};

const repository = async () => {
  const now = new Date();
  // note: ライブが終わっても1週間は表示しておく
  // todo: ただし、Contactフォームの選択肢には入れない。どこでフィルタリングしたほうがいいか考える。
  const pastOneWeekFromNow = dayjs(now).add(1, "w").format("YYYY-MM-DD");
  const livePosts = await getEntries<Live>({
    content_type: "liveInfo",
    "fields.date[gte]": pastOneWeekFromNow,
    order: "fields.date",
  }).catch((err) => {
    throw new Error(
      `Error: contentful からLive情報を取得できませんでした。${err}`
    );
  });
  return livePosts.items.map((element) => element.fields);
};
