import { Live } from "@/types";

export const dummyLives: Live[] = [
  {
    date: "2022/12/31 (Sat)",
    title: "イベントaaa",
    place: "とあるライブハウス1",
    timeOpen: "17:00",
    timeStart: "18:00",
    timeIyu: "21:00",
    ticket: "¥2,800 (+1d)",
    with: [
      "ダミーバンド",
      "ダミーアーティスト",
      "ダミーインストバンド",
      "ダミージャズバンド",
    ],
  },
  {
    date: "2023/1/31 (Sat)",
    title: "イベントbbb とっても楽しくて名前がとてーもながいイベント",
    place: "とあるライブハウス2",
    timeOpen: "20:00",
    timeStart: "21:00",
    ticket: "adv ¥2,000 / door ¥2,300",
    with: ["ダミーシンガー", "ダミーソロアーティスト"],
  },
  {
    date: "2024/1/24 (Mon)",
    title: "イベントccc ご飯がおいしいイベント",
    place: "とあるライブハウス3",
    timeOpen: "11:30",
    timeStart: "12:00",
    ticket: "¥3,000 （ランチ・ドリンクつき）",
    with: ["ダミーバンド", "ダミーアーティスト"],
  },
];
