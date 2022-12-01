import { Handler } from "@netlify/functions";

type Params = {
  name: string;
  // todo: カテゴリぶんUnion Typesにする
  category: string;
  // todo: ライブ予約以外のときは存在しないよう型を改善する
  reservedate: string;
  reservecount: string;
  email: string;
  message: string;
};

const getMessage = (params: Params) => {
  // todo: reservedateとreservecountがなかったら表示しない制御
  const msg = `
webサイトからContactがありました！

--
[Name] ${params.name}
[Category] ${params.category}
[ReserveDate] ${params.reservedate}
[ReserveCount] ${params.reservecount}
[Email] ${params.email}
[Message]
${params.message}
  `;

  return msg;
};

export const handler: Handler = (event, context, callback) => {
  // todo: 前回やったときは分岐があったため確認する
  // const params = process.env.IYU_FORM_NOTIFY_TOKEN_TEST
  //   ? querystring.parse(decodeURIComponent(event.body))
  //   : JSON.parse(event.body).payload.data;
  const message = getMessage(JSON.parse(event.body || "").payload.data);
  fetch("https://notify-api.line.me/api/notify", {
    method: "POST",
    headers: {
      // todo: Prodと出し分ける
      Authorization: `Bearer ${process.env.LINE_TOKEN_TEST}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      message,
    }).toString(),
  })
    .then((res) => {
      const _res = {
        ...res,
        data: {
          statusCode: 200,
          body: "ok",
        },
      };
      if (callback) {
        callback(null, _res.data);
      }
      return _res;
    })
    .catch((err) => {
      if (callback) {
        callback(err, { statusCode: 500, body: err });
      }
      console.error(`Contact Form Error: ${err}`);
    });
};
