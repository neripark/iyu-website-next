import { notifyToLine } from "@/repositories/line";
import { MessageService } from "./MessageService";

export const notifyIyuLine = async (service: MessageService) => {
  const message = service.getMessageToIyuMember();
  return notifyToLine(message)
    .then((res) => {
      console.log(`LINEへの通知が完了しました: ${res}`);
    })
    .catch((err) => {
      console.error(`LINEへの通知でエラーが発生しました: ${err}`);
    });
};
