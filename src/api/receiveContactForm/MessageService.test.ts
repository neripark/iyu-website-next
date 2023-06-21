import { ContactFormItem } from "@/types/ContactForm";
import { MessageService } from "./MessageService";

const basicData = {
  name: "テスト太郎",
  email: "test@example.com",
  message: "こんにちは！",
};

describe("MessageService のテスト", () => {
  describe("カテゴリが live の場合", () => {
    const data: ContactFormItem = {
      ...basicData,
      category: "live",
      reservedate: "2022/12/31 (土) イベントaaa",
      reservecount: "2枚",
    };
    const messageService = new MessageService(data);

    test("emailを返却可能", () => {
      expect(messageService.userEmail).toEqual("test@example.com");
    });
    test("ユーザーネームを返却可能", () => {
      expect(messageService.userName).toEqual("テスト太郎");
    });
    test("メンバー向けメッセージが正しいこと", () => {
      expect(messageService.getMessageToIyuMember()).toEqual(
        messageToIyuMemberWhenLive
      );
    });
    test("ユーザ向けメッセージが正しいこと", () => {
      expect(messageService.getMessageToUser()).toEqual(messageToUserWhenLive);
    });
  });

  describe("カテゴリが together の場合", () => {
    const data: ContactFormItem = {
      ...basicData,
      category: "together",
    };
    const messageService = new MessageService(data);

    test("emailを返却可能", () => {
      expect(messageService.userEmail).toEqual("test@example.com");
    });
    test("ユーザーネームを返却可能", () => {
      expect(messageService.userName).toEqual("テスト太郎");
    });
    test("メンバー向けメッセージが正しいこと", () => {
      expect(messageService.getMessageToIyuMember()).toEqual(
        messageToIyuMemberWhenTogether
      );
    });
    test("ユーザ向けメッセージが正しいこと", () => {
      expect(messageService.getMessageToUser()).toEqual(
        messageToUserWhenTogether
      );
    });
  });

  describe("カテゴリが other の場合", () => {
    const data: ContactFormItem = {
      ...basicData,
      category: "other",
    };
    const messageService = new MessageService(data);

    test("emailを返却可能", () => {
      expect(messageService.userEmail).toEqual("test@example.com");
    });
    test("ユーザーネームを返却可能", () => {
      expect(messageService.userName).toEqual("テスト太郎");
    });
    test("メンバー向けメッセージが正しいこと", () => {
      expect(messageService.getMessageToIyuMember()).toEqual(
        messageToIyuMemberWhenOther
      );
    });
    test("ユーザ向けメッセージが正しいこと", () => {
      expect(messageService.getMessageToUser()).toEqual(messageToUserWhenOther);
    });
  });
});

// ____________________________________________________________________________________
const messageToIyuMemberWhenLive = `webサイトからContactがありました！

--
[お名前] テスト太郎
[お問い合わせ種類] ライブのチケットお取り置き
[お取り置き日程] 2022/12/31 (土) イベントaaa
[お取り置き枚数] 2枚
[メールアドレス] test@example.com
[メッセージ]
こんにちは！
`;

// ____________________________________________________________________________________
const messageToUserWhenLive = `この度はお問い合わせありがとうございます！
以下の内容で承りました。

当日はお会いできるのを楽しみにしております！

--
[お名前] テスト太郎
[お問い合わせ種類] ライブのチケットお取り置き
[お取り置き日程] 2022/12/31 (土) イベントaaa
[お取り置き枚数] 2枚
[メールアドレス] test@example.com
[メッセージ]
こんにちは！
`;

// ____________________________________________________________________________________
const messageToIyuMemberWhenTogether = `webサイトからContactがありました！

--
[お名前] テスト太郎
[お問い合わせ種類] 共演のお誘い
[メールアドレス] test@example.com
[メッセージ]
こんにちは！
`;

// ____________________________________________________________________________________
const messageToUserWhenTogether = `この度はお問い合わせありがとうございます！
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

// ____________________________________________________________________________________
const messageToIyuMemberWhenOther = `webサイトからContactがありました！

--
[お名前] テスト太郎
[お問い合わせ種類] その他
[メールアドレス] test@example.com
[メッセージ]
こんにちは！
`;

// ____________________________________________________________________________________
const messageToUserWhenOther = `この度はお問い合わせありがとうございます！
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
