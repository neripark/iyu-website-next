export type Category = "live" | "together" | "other";

export type ContactFormItem = {
  name: string;
  category: Category;
  // todo: ライブ予約以外のときは存在しないよう型を改善する
  reservedate?: string;
  reservecount?: string;
  email: string;
  message: string;
};
