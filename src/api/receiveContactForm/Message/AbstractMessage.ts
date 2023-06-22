import { categories, ContactFormItem } from "@/types/ContactForm";

export abstract class Message {
  public formItem: ContactFormItem;
  public categoryLabel: string;

  constructor(props: ContactFormItem) {
    this.formItem = props;
    this.categoryLabel = categories[props.category];
  }

  // note: private と abstract は同時に書けない。
  // 外からアクセスされないものは実装を強制する必要がないため？
  // abstract messagePreservedUserInputs(): string;
  public abstract messageToUserByEmail(): string;
  public abstract messageToIyuMemberByEmail(): string;
  public abstract messageToIyuMemberByLine(): string;
}

// const messagePreservedUserInputs = (props: ContactFormItem) => {
//     return `[お名前] ${props.name}
// [お問い合わせ種類] ${categories[this.formItem.category]}${
//       this.formItem.category === "live"
//         ? `
// [お取り置き日程] ${this.formItem.reservedate}
// [お取り置き枚数] ${this.formItem.reservecount}`
//         : ""
//     }
// [メールアドレス] ${this.formItem.email}
// [メッセージ]
// ${this.formItem.message}
// `;
// }
