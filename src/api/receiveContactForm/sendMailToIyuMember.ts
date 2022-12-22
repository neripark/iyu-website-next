import { sendMailByGmail } from "@/repositories/gmail";
import { MessageService } from "./MessageService";

export const sendMailToIyuMember = async (service: MessageService) => {
  const body = service.getMessageToIyuMember();
  const name = service.userName;

  return sendMailByGmail({
    to: process.env.MAIL_TO_IYU_MEMBER || "",
    subject: `お問い合わせが届きました！: ${name} 様より`,
    body,
  })
    .then(() => {
      console.log(`iyuメンバーへのメール送信が完了しました。`);
    })
    .catch((err) => {
      console.error(`iyuメンバーへのメール送信でエラーが発生しました: ${err}`);
    });
};
