import { UnSelectedLive } from "@/types/ContactForm";
import { dedent } from "ts-dedent";
import { Message } from "./AbstractMessage";

export class MessageOther extends Message {
  constructor(props: UnSelectedLive) {
    if (props.category !== "other") {
      throw new Error("`other`以外のカテゴリが渡されました。");
    }
    super(props);
  }

  private messagePreservedUserInputs() {
    return dedent`
      [お名前] ${this.formItem.name}
      [お問い合わせ種類] ${this.categoryLabel}
      [メールアドレス] ${this.formItem.email}
      [メッセージ]
      ${this.formItem.message}
    `;
  }

  public messageToUserByEmail() {
    return dedent`
      この度はお問い合わせありがとうございます！
      以下の内容で承りました。

      内容確認次第、メンバーからご返信いたします。
      数日経っても返信がない場合は、大変恐れ入りますが、Twitter DM にてご連絡をお願いいたします。

      --
      ${this.messagePreservedUserInputs()}

    `;
  }

  public messageToIyuMemberByEmail() {
    return dedent`
      webサイトからContactがありました！

      --
      ${this.messagePreservedUserInputs()}

    `;
  }

  public messageToIyuMemberByLine() {
    return this.messageToIyuMemberByEmail();
  }
}
