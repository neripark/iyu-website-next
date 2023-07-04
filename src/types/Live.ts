export type Live = {
  date: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
  title: string;
  place: string;
  timeOpen: string;
  timeStart: string;
  timeIyu?: string;
  ticket: string;
  with: string[];
};

export interface LabeledLive extends Omit<Live, "date"> {
  date: string;
}
