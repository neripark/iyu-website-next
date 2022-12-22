import { sendMailByGmail } from "@/repositories/gmail";

export const sendMailToUser = async (body: string, to: string) => {
  return sendMailByGmail({
    to,
    subject: `お問い合わせを承りました！`,
    body,
  })
    .then(() => {
      console.log(`ユーザーへの確認メール送信が完了しました。`);
    })
    .catch((err) => {
      console.error(`ユーザーへの確認メール送信でエラーが発生しました: ${err}`);
    });
};
