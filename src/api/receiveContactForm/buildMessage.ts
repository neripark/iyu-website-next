import { categories, ContactFormItem } from "@/types/ContactForm";

export const getMessage = (params: ContactFormItem) => {
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
