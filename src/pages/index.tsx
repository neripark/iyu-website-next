import { getEntries } from "@/lib/contentful";
import { LiveInformationProvider } from "@/providers/LiveInformationProvider";
import { Template } from "@/templates";
import { Live } from "@/types";
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
  const livePosts = await getEntries<Live>();
  const lives = livePosts.items.map((element) => element.fields);

  return {
    props: { lives },
  };
};
