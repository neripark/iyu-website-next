import { sendMailByGmail } from "@/repositories/gmail";

export const sendMailToIyuMember = async (
  message: string,
  userName: string
) => {
  return sendMailByGmail({
    to: process.env.MAIL_TO_IYU_MEMBER || "",
    subject: `お問い合わせが届きました！: ${userName} 様より`,
    body: message,
  })
    .then(() => {
      console.log(`iyuメンバーへのメール送信が完了しました。`);
    })
    .catch((err) => {
      console.error(`iyuメンバーへのメール送信でエラーが発生しました: ${err}`);
    });
};
