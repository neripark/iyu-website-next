import { categories, ContactFormItem } from "@/types/ContactForm";

type Props = ContactFormItem;

export class MessageService {
  private formItem: ContactFormItem;

  constructor(props: Props) {
    this.formItem = props;
  }

  public getUserInput() {
    return this.formItem;
  }

  public getMessageToUser() {
    return toUser(this.getCommonMessage());
  }

  public getMessageToIyuMember() {
    return toIyuMember(this.getCommonMessage());
  }

  private getCommonMessage() {
    return `[お名前] ${this.formItem.name}
[お問い合わせ種類] ${categories[this.formItem.category]}${
      this.formItem.category === "live"
        ? `
[お取り置き日程] ${this.formItem.reservedate}
[お取り置き枚数] ${this.formItem.reservecount}`
        : ""
    }
[メールアドレス] ${this.formItem.email}
[メッセージ]
${this.formItem.message}
`;
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
const toUser = (commonMessage: string) => {
  return `この度はお問い合わせありがとうございます！
以下の内容で承りました。

内容確認次第、メンバーからご返信いたします。
数日経っても返信がない場合は、大変恐れ入りますが、Twitter DM にてご連絡をお願いいたします。

--
${commonMessage}
`;
};
