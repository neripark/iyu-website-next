import { categories, ContactFormItem } from "@/types/ContactForm";

type Props = ContactFormItem;

export class MessageService {
  private formItem: ContactFormItem;

  constructor(props: Props) {
    this.formItem = props;
  }

  // note: 必要なパラメータのみ公開する
  public get userName() {
    return this.formItem.name;
  }

  public get userEmail() {
    return this.formItem.email;
  }

  public getMessageToUser() {
    return toUser(this.getCommonMessage(), this.formItem.category);
  }

  public getMessageToIyuMember() {
    return toIyuMember(this.getCommonMessage());
  }

  private getCommonMessage() {
    // note:
    // 単純にテンプレートリテラル+dedentを用いると、特定条件下で行自体を削除する（空行を生まない）要件に対応できないため、
    // 愚直な文字列連結を選択している。
    // いい方法があったら改善する
    const items: string[] = [];
    items.push(`[お名前] ${this.formItem.name}`);
    items.push(`[お問い合わせ種類] ${categories[this.formItem.category]}`);
    if (this.formItem.category === "live") {
      items.push(`[お取り置き日程] ${this.formItem.reservedate}`);
      items.push(`[お取り置き枚数] ${this.formItem.reservecount}`);
    }
    items.push(`[メールアドレス] ${this.formItem.email}`);
    items.push(`[メッセージ]`);
    items.push(`${this.formItem.message}`);

    // cf) イミュータブルにするなら:
    // const items: string[] = [
    //   `[お名前] ${this.formItem.name}`,
    //   `[お問い合わせ種類] ${categories[this.formItem.category]}`,
    //   ...(() => {
    //     return this.formItem.category === "live"
    //       ? [
    //           `[お取り置き日程] ${this.formItem.reservedate}`,
    //           `[お取り置き枚数] ${this.formItem.reservecount}`,
    //         ]
    //       : [];
    //   })(),
    //   `[メールアドレス] ${this.formItem.email}`,
    //   `[メッセージ]`,
    //   `${this.formItem.message}`,
    // ];

    return items.join("\n");
  }
}

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
const toUser = (
  commonMessage: string,
  category: ContactFormItem["category"]
) => {
  const supplement =
    category === "live"
      ? `
当日はお会いできるのを楽しみにしております！`
      : `
内容確認次第、メンバーからご返信いたします。
数日経っても返信がない場合は、大変恐れ入りますが、Twitter DM にてご連絡をお願いいたします。`;

  return `この度はお問い合わせありがとうございます！
以下の内容で承りました。
${supplement}

--
${commonMessage}
`;
};
