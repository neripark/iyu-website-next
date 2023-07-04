// contentful から取得するデータの型。
// todo: アプリ内で扱うライブの型、との区別をわかりやすくする
export type Live = {
  date: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
  title?: string;
  place: string;
  timeOpen?: string;
  timeStart?: string;
  timeIyu?: string;
  ticket?: string;
  with?: string[];
};

export interface LabeledLive extends Omit<Live, "date"> {
  date: string;
}
