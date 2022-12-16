import { sendMailByGmail } from "@/repositories/gmail";
import { categories, ContactFormItem } from "@/types/ContactForm";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface NextApiRequestWithAppParams extends NextApiRequest {
  body: ContactFormItem;
}

type Result = "ok" | "error";

type AppApiResponse = {
  result: Result;
};

const getMessage = (params: ContactFormItem) => {
  const msg = `
webサイトからContactがありました！

--
[お名前] ${params.name}
[お問い合わせ種類] ${categories[params.category]}${
    params.category === "live"
      ? `
[お取り置き日程] ${params.reservedate}
[お取り置き枚数] ${params.reservecount}`
      : ""
  }
[メールアドレス] ${params.email}
[メッセージ]
${params.message}
`;

  return msg;
};

const notifyToLine = async (message: string) => {
  return fetch("https://notify-api.line.me/api/notify", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.LINE_NOTIFY_TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      message,
    }).toString(),
  })
    .then((res) => {
      console.log(`LINEへの通知が完了しました: ${res}`);
    })
    .catch((err) => {
      console.error(`LINEへの通知でエラーが発生しました: ${err}`);
    });
};

const sendMail = async (userName: string, body: string) => {
  return sendMailByGmail({
    title: `iyu webサイトから問い合わせ: ${userName} 様より`,
    body,
  })
    .then(() => {
      console.log(`Gmailへの送信が完了しました。`);
    })
    .catch((err) => {
      console.error(`Gmailへの送信でエラーが発生しました: ${err}`);
    });
};

const handler = async (
  req: NextApiRequestWithAppParams,
  res: NextApiResponse<AppApiResponse>
) => {
  console.log("req.body: ", req.body);

  const message = getMessage(req.body);

  const result: Result = await Promise.all([
    notifyToLine(message),
    sendMail(req.body.name, message),
  ])
    .then(() => {
      return "ok" as Result;
    })
    .catch(() => {
      return "error";
    });

  res.status(200).json({ result });
};

export default handler;
