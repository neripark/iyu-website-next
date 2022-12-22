import { sendMailByGmail } from "@/repositories/gmail";
import { MessageService } from "./MessageService";

export const sendMailToUser = async (service: MessageService) => {
  const body = service.getMessageToUser();
  const to = service.getUserInput().email;

  return sendMailByGmail({
    to,
    subject: "お問い合わせを承りました！",
    body,
  })
    .then(() => {
      console.log(`ユーザーへの確認メール送信が完了しました。`);
    })
    .catch((err) => {
      console.error(`ユーザーへの確認メール送信でエラーが発生しました: ${err}`);
    });
};
