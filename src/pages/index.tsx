import { getEntries } from "@/lib/contentful";
import { LiveInformationProvider } from "@/providers/LiveInformationProvider";
import { Template } from "@/templates";
import { Live } from "@/types";
import dayjs from "dayjs";
import { GetStaticProps } from "next";

export default function Index(props: { lives: Live[] }) {
  return (
    <LiveInformationProvider lives={props.lives}>
      <Template />;
    </LiveInformationProvider>
  );
}

// note: SSG 時に一度だけ実行する手段は現状これしかない
// グローバルな場所に置きたい場合はやり方を考える
export const getStaticProps: GetStaticProps = async () => {
  const now = new Date();
  // note: ライブが終わっても1週間は表示しておく
  // todo: ただし、Contactフォームの選択肢には入れない。どこでフィルタリングしたほうがいいか考える。
  const pastOneWeekFromNow = dayjs(now).add(1, "w").format("YYYY-MM-DD");
  const livePosts = await getEntries<Live>({
    content_type: "liveInfo",
    "fields.date[gte]": pastOneWeekFromNow,
  }).catch((err) => {
    throw new Error(
      `Error: contentful からLive情報を取得できませんでした。${err}`
    );
  });
  const lives = livePosts.items.map((element) => element.fields);

  return {
    props: { lives },
  };
};
