import { ContactFormItem } from "@/types/ContactForm";
import { MessageLive } from "./MessageLive";

const basicData = {
  name: "テスト太郎",
  email: "test@example.com",
  message: "こんにちは！",
};

describe("MessageLive クラスのテスト", () => {
  const data: ContactFormItem = {
    ...basicData,
    category: "live",
    reservedate: "2022/12/31 (土) イベントaaa",
    reservecount: "2枚",
  };
  const message = new MessageLive(data);

  test("emailを返却可能", () => {
    expect(message.userEmail).toEqual("test@example.com");
  });
  test("ユーザーネームを返却可能", () => {
    expect(message.userName).toEqual("テスト太郎");
  });
  test("カテゴリのラベルが正しいこと", () => {
    expect(message.categoryLabel).toEqual("ライブのチケットお取り置き");
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

// ____________________________________________________________________________________
const messageToIyuMember = `webサイトからContactがありました！

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
const messageToUser = `この度はお問い合わせありがとうございます！
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
