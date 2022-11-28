import { Live } from "@/types";
import { createContext, ReactNode } from "react";

type Lives = Live[];

// // todo: contentful のモックサーバーに置き換えて消す
// const dummyLives: Lives = [
//   {
//     date: "2022/12/31 (Sat)",
//     title: "イベントaaa",
//     place: "とあるライブハウス1",
//     timeOpen: "17:00",
//     timeStart: "18:00",
//     timeIyu: "21:00",
//     ticket: "¥2,800 (+1d)",
//     with: ["xxx", "yyy", "zzz"],
//   },
//   {
//     date: "2023/1/31 (Sat)",
//     title: "イベントbbb",
//     place: "とあるライブハウス2",
//     timeOpen: "20:00",
//     timeStart: "21:00",
//     ticket: "adv ¥2,000 / door ¥2,300",
//     with: ["jjj", "kkk", "lll"],
//   },
// ];

type State = {
  lives: Lives;
};

export const LiveInformationContext = createContext<State>({
  lives: [],
});

interface Props {
  children: ReactNode;
  lives: Lives;
}

export const LiveInformationProvider: React.FC<Props> = (props) => (
  <LiveInformationContext.Provider value={{ lives: props.lives }}>
    {props.children}
  </LiveInformationContext.Provider>
);
