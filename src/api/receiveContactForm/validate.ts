import { notifyToLine } from "@/repositories/line";

export const varidate = async (message: string) => {
  return notifyToLine(message)
    .then((res) => {
      console.log(`LINEへの通知が完了しました: ${res}`);
    })
    .catch((err) => {
      console.error(`LINEへの通知でエラーが発生しました: ${err}`);
    });
};
