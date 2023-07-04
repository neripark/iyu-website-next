import { LabeledLive } from "@/types";
import { render, screen } from "@testing-library/react";
import { LiveCard } from "./";

describe("LiveCard コンポーネントのテスト", () => {
  const basicData: LabeledLive = {
    date: "2022/12/31 (土)",
    title: "イベントaaa",
    place: "とあるライブハウス1",
    timeOpen: "17:00",
    timeStart: "18:00",
    timeIyu: "21:00",
    ticket: "¥2,800 (+1d)",
    with: [
      "ダミーバンド",
      "ダミーアーティスト",
      "ダミーインストバンド",
      "ダミージャズバンド",
    ],
  };
  test("各項目が表示されていること", () => {
    render(<LiveCard {...basicData} />);
    expect(screen.getByText("2022/12/31 (土)")).toBeVisible();
    expect(screen.getByText("イベントaaa")).toBeVisible();
    expect(screen.getByText("@とあるライブハウス1")).toBeVisible();
    expect(screen.getByText("open 17:00 / start 18:00")).toBeVisible();
    expect(screen.getByText("※iyuの出演は21:00頃の予定です。")).toBeVisible();
    expect(
      screen.getByText(
        "w) ダミーバンド / ダミーアーティスト / ダミーインストバンド / ダミージャズバンド"
      )
    ).toBeVisible();
  });
  test("iyuの出演時間が未設定の場合、項目自体が表示されないこと", () => {
    const data = {
      ...basicData,
      timeIyu: undefined,
    };
    render(<LiveCard {...data} />);
    expect(
      screen.queryByText("※iyuの出演は21:00頃の予定です。")
    ).not.toBeInTheDocument();
  });
  test("出演時間が未定の場合、未定と表示されること", () => {
    const data = {
      ...basicData,
      timeOpen: undefined,
      timeStart: undefined,
    };
    render(<LiveCard {...data} />);
    expect(screen.getByText("open 未定 / start 未定")).toBeVisible();
  });
  test("共演が0件（未設定）の場合、「未定」と表示されること", () => {
    const data = {
      ...basicData,
      with: undefined,
    };
    render(<LiveCard {...data} />);
    expect(screen.getByText("w) 未定")).toBeVisible();
  });
});
