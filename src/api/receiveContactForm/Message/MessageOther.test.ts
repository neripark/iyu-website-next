import { ContactFormItem } from "@/types/ContactForm";
import { MessageOther } from "./MessageOther";

const basicData = {
  name: "テスト太郎",
  email: "test@example.com",
  message: "こんにちは！",
};

describe("MessageOther クラスのテスト", () => {
  describe("お問い合わせ種類が other のとき", () => {
    const data: ContactFormItem = {
      ...basicData,
      category: "other",
    };
    const message = new MessageOther(data);

    test("emailを返却可能", () => {
      expect(message.userEmail).toEqual("test@example.com");
    });
    test("ユーザーネームを返却可能", () => {
      expect(message.userName).toEqual("テスト太郎");
    });
    test("カテゴリのラベルが正しいこと", () => {
      expect(message.categoryLabel).toEqual("その他");
    });
    test("メンバー向けメッセージ（LINE）が正しいこと", () => {
      expect(message.messageToIyuMemberByLine()).toEqual(messageToIyuMember);
    });
    test("メンバー向けメッセージ（メール）が正しいこと", () => {
      expect(message.messageToIyuMemberByEmail()).toEqual(messageToIyuMember);
    });
    test("ユーザ向けメッセージが正しいこと", () => {
      expect(message.messageToUserByEmail()).toEqual(messageToUser);
    });
  });
  describe("お問い合わせ種類が other ではないとき", () => {
    const data: ContactFormItem = {
      ...basicData,
      category: "together",
    };
    test("インスタンス化すると例外をスローすること", () => {
      expect(() => {
        new MessageOther(data);
      }).toThrowError();
    });
  });
});

// ____________________________________________________________________________________
const messageToIyuMember = `webサイトからContactがありました！

--
[お名前] テスト太郎
[お問い合わせ種類] その他
[メールアドレス] test@example.com
[メッセージ]
こんにちは！
`;

// ____________________________________________________________________________________
const messageToUser = `この度はお問い合わせありがとうございます！
以下の内容で承りました。

内容確認次第、メンバーからご返信いたします。
数日経っても返信がない場合は、大変恐れ入りますが、Twitter DM にてご連絡をお願いいたします。

--
[お名前] テスト太郎
[お問い合わせ種類] その他
[メールアドレス] test@example.com
[メッセージ]
こんにちは！
`;
