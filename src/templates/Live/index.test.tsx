import { LiveInformationProvider } from "@/providers/LiveInformationProvider";
import { Live as TypeLive } from "@/types";
import { render, screen } from "@testing-library/react";
import { Live } from "./";

const renderLiveComponent = (data: TypeLive[]) => {
  render(
    <LiveInformationProvider lives={data}>
      <Live />
    </LiveInformationProvider>
  );
};

describe("Live コンポーネントのテスト", () => {
  describe("ライブが1件以上ある場合", () => {
    beforeEach(() => {
      const data: TypeLive[] = [
        {
          date: "2022-12-31",
          title: "イベントaaa",
          place: "とあるライブハウス1",
          timeOpen: "17:00",
          timeStart: "18:00",
          ticket: "¥2,800 (+1d)",
          with: [],
        },
      ];
      renderLiveComponent(data);
    });
    test("ライブの一覧が表示されていること", () => {
      // note: Cardが表示されているかどうかの確認をしたいだけなので、リストの表示確認にとどめている
      // todo: 細かい表示の制御のテストは LiveCard コンポーネント側で書く
      expect(screen.getByRole("list")).toBeVisible();
    });
    test("フォームからお取り置きができる旨を伝えるテキストが表示されていること", () => {
      expect(screen.getByText(/チケットのお取置きは/));
    });
    test("サイト内フォームまでのアンカーリンクが表示されていること", () => {
      expect(
        screen.getByRole("link", { name: "こちらのフォーム" })
      ).toHaveAttribute("href", "#contact");
    });
    test("Twitter DM でもお取り置きができる旨を伝えるテキストが表示されていること", () => {
      expect(screen.getByText(/でも承っております。/));
    });
    test("iyu Twitter アカウントへのリンクが表示されていること", () => {
      expect(screen.getByRole("link", { name: "Twitter" })).toHaveAttribute(
        "href",
        "https://twitter.com/iyu_band"
      );
    });
  });

  describe("ライブが0件の場合", () => {
    beforeEach(() => {
      const data: TypeLive[] = [];
      renderLiveComponent(data);
    });
    test("ライブのリストが表示されていないこと", () => {
      expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });
    test("ライブがないことを伝えるテキストが表示されていること", () => {
      expect(screen.getByText(/現在予定しているライブはありません。/));
    });
    test("Twitter の情報をチェックしてほしい旨のテキストが表示されていること", () => {
      expect(screen.getByText(/もぜひチェックしてくださいね。/));
    });
    test("iyu Twitter アカウントへのリンクが表示されていること", () => {
      expect(screen.getByRole("link", { name: "Twitter" })).toHaveAttribute(
        "href",
        "https://twitter.com/iyu_band"
      );
    });
  });
});
