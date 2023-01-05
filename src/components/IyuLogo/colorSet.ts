type PartsName = "i" | "y1" | "y2" | "u1" | "u2";

// note:
// 現状はサイト全体の色とは異なるカラーセット。
// 追加があったら src/styles/variables.scss を確認する。
const colorSet = {
  blue: "#00aecb",
  pink: "#e85382",
  purple: "#a54a96",
  yellow: "#ffd800",
  green: "#c3d600",
};

const WHITE = "#fff";

export const fullColor: Record<PartsName, string> = {
  i: colorSet.blue,
  y1: colorSet.purple,
  y2: colorSet.pink,
  u1: colorSet.yellow,
  u2: colorSet.green,
};

export const whiteColor: Record<PartsName, string> = {
  i: WHITE,
  y1: WHITE,
  y2: WHITE,
  u1: WHITE,
  u2: WHITE,
};
