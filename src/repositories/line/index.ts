export const notifyToLine = async (message: string) => {
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
