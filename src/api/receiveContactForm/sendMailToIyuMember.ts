import { sendMailByGmail } from "@/repositories/gmail";

export const sendMailToIyuMember = async (userName: string, body: string) => {
  return sendMailByGmail({
    title: `お問い合わせが届きました！: ${userName} 様より`,
    body,
  })
    .then(() => {
      console.log(`Gmailへの送信が完了しました。`);
    })
    .catch((err) => {
      console.error(`Gmailへの送信でエラーが発生しました: ${err}`);
    });
};
