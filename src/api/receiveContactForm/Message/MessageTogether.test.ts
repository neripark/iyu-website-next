import { ContactFormItem } from "@/types/ContactForm";
import { MessageTogether } from "./MessageTogether";

const basicData = {
  name: "テスト太郎",
  email: "test@example.com",
  message: "こんにちは！",
};

describe("MessageTogether クラスのテスト", () => {
  describe("お問い合わせ種類が together のとき", () => {
    const data: ContactFormItem = {
      ...basicData,
      category: "together",
    };
    const message = new MessageTogether(data);

    test("emailを返却可能", () => {
      expect(message.userEmail).toEqual("test@example.com");
    });
    test("ユーザーネームを返却可能", () => {
      expect(message.userName).toEqual("テスト太郎");
    });
    test("カテゴリのラベルが正しいこと", () => {
      expect(message.categoryLabel).toEqual("共演のお誘い");
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
  describe("お問い合わせ種類が together ではないとき", () => {
    const data: ContactFormItem = {
      ...basicData,
      category: "other",
    };
    test("インスタンス化すると例外をスローすること", () => {
      expect(() => {
        new MessageTogether(data);
      }).toThrow();
    });
  });
});

// ____________________________________________________________________________________
const messageToIyuMember = `webサイトからContactがありました！

--
[お名前] テスト太郎
[お問い合わせ種類] 共演のお誘い
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
[お問い合わせ種類] 共演のお誘い
[メールアドレス] test@example.com
[メッセージ]
こんにちは！
`;
