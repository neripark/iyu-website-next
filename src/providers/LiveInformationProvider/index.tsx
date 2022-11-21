import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type Live = {
  date: string;
  title: string;
  place: string;
  timeOpen: string;
  timeStart: string;
  timeIyu?: string;
  ticket: string;
  with: string[];
};

type Lives = Live[];

// todo: contentful のモックサーバーに置き換えて消す
const dummyLives: Lives = [
  {
    date: "2022/12/31 (Sat)",
    title: "イベントaaa",
    place: "とあるライブハウス1",
    timeOpen: "17:00",
    timeStart: "18:00",
    timeIyu: "21:00",
    ticket: "¥2,800 (+1d)",
    with: ["xxx", "yyy", "zzz"],
  },
  {
    date: "2023/1/31 (Sat)",
    title: "イベントbbb",
    place: "とあるライブハウス2",
    timeOpen: "20:00",
    timeStart: "21:00",
    ticket: "adv ¥2,000 / door ¥2,300",
    with: ["jjj", "kkk", "lll"],
  },
];

type State = {
  lives: Lives;
  updateLives?: Dispatch<SetStateAction<Lives>>;
};

export const LiveInformationContext = createContext<State>({
  lives: [],
});

export const LiveInformationProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const [lives, updateLives] = useState<Lives>(dummyLives);
  return (
    <LiveInformationContext.Provider value={{ lives, updateLives }}>
      {props.children}
    </LiveInformationContext.Provider>
  );
};
