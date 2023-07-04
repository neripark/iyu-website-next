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
  describe("ライブが0件の場合", () => {
    test("ライブがないことを伝えるテキストが表示されていること", () => {
      const data: TypeLive[] = [];
      renderLiveComponent(data);
      expect(screen.getByText(/現在予定しているライブはありません。/));
    });
  });
});
