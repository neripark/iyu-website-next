import { SelectedLive } from "@/types/ContactForm";
import { dedent } from "ts-dedent";
import { Message } from "./AbstractMessage";

export class MessageLive extends Message {
  constructor(props: SelectedLive) {
    if (props.category !== "live") {
      throw new Error("`live`以外のカテゴリが渡されました。");
    }
    super(props);
  }

  private messagePreservedUserInputs() {
    return dedent`
      [お名前] ${this.formItem.name}
      [お問い合わせ種類] ${this.categoryLabel}
      [お取り置き日程] ${this.formItem.reservedate}
      [お取り置き枚数] ${this.formItem.reservecount}
      [メールアドレス] ${this.formItem.email}
      [メッセージ]
      ${this.formItem.message}
    `;
  }

  public messageToUserByEmail() {
    return dedent`
      この度はお問い合わせありがとうございます！
      以下の内容で承りました。

      当日はお会いできるのを楽しみにしております！

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
