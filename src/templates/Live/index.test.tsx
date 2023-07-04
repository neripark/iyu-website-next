import { LiveInformationProvider } from "@/providers/LiveInformationProvider";
import { Live as TypeLive } from "@/types";
import { render, screen } from "@testing-library/react";
import { Live } from "./";

describe("Live コンポーネントのテスト", () => {
  test("test 1", () => {
    const data: TypeLive[] = [];
    render(
      <LiveInformationProvider lives={data}>
        <Live />
      </LiveInformationProvider>
    );
    expect(screen.getByText(/現在予定しているライブはありません。/));
  });
});
