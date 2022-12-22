import { categories, ContactFormItem } from "@/types/ContactForm";

export const getMessage = (params: ContactFormItem) => {
  const commonMsg = `[お名前] ${params.name}
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

  return {
    messageToIyuMember: toIyuMember(commonMsg),
    messageToUser: toUser(commonMsg),
  };
};

// ______________________________
//
const toIyuMember = (commonMessage: string) => {
  return `webサイトからContactがありました！

--
${commonMessage}
`;
};

// ______________________________
//
const toUser = (commonMessage: string) => {
  return `この度はお問い合わせありがとうございます！
以下の内容で承りました。

内容確認次第、メンバーからご返信いたします。
数日経っても返信がない場合は、大変恐れ入りますが、Twitter DM にてご連絡をお願いいたします。

--
${commonMessage}
`;
};
