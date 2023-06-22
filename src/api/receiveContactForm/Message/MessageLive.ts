import { categories, SelectedLive } from "@/types/ContactForm";
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
    const items: string[] = [];
    items.push(`[お名前] ${this.formItem.name}`);
    items.push(`[お問い合わせ種類] ${categories[this.formItem.category]}`);
    items.push(`[お取り置き日程] ${this.formItem.reservedate}`);
    items.push(`[お取り置き枚数] ${this.formItem.reservecount}`);
    items.push(`[メールアドレス] ${this.formItem.email}`);
    items.push(`[メッセージ]`);
    items.push(`${this.formItem.message}`);
    return items.join("\n");
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
