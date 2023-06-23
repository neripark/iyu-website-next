import { sendMailByGmail } from "@/repositories/gmail";

export const sendMailToUser = async (message: string, userEmail: string) => {
  return sendMailByGmail({
    to: userEmail,
    subject: "お問い合わせを承りました！",
    body: message,
  })
    .then(() => {
      console.log(`ユーザーへの確認メール送信が完了しました。`);
    })
    .catch((err) => {
      console.error(`ユーザーへの確認メール送信でエラーが発生しました: ${err}`);
    });
};
