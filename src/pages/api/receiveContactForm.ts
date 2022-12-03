import { categories, ContactFormItem } from "@/types/ContactForm";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface NextApiRequestWithAppParams extends NextApiRequest {
  body: ContactFormItem;
}

type Result = "ok" | "error";

type LineResult = {
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

const handler = async (
  req: NextApiRequestWithAppParams,
  res: NextApiResponse<LineResult>
) => {
  console.log("req.body: ", req.body);

  const message = getMessage(req.body);

  const result: Result = await fetch("https://notify-api.line.me/api/notify", {
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
      return "ok" as Result;
    })
    .catch((err) => {
      console.error(`LINEへの通知でエラーが発生しました: ${err}`);
      return "error";
    });

  res.status(200).json({ result });
};

export default handler;
