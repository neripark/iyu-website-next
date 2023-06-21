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
      expect(messageService.getMessageToUser())
        .toEqual(messageToUserWhenLive);
    });
  });

  xdescribe("カテゴリが together の場合", () => {});
  xdescribe("カテゴリが other の場合", () => {});
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
