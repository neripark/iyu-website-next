import { LabeledLive, Live } from "@/types";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { ReactNode, createContext, useMemo } from "react";

/**
 * note: ライブ情報は一度しか取得しない、かつUI側から更新しないこと、扱う値が少なくて単純なことから、
 * スケールしない作りになっている。
 * useSelector 的な抽出をできるようにすれば一番良い。
 */

dayjs.locale("ja");

type Lives = Live[];

// todo: 生データと加工後データの区別をわかりやすくする
type State = {
  lives: LabeledLive[];
};

const generateLabeledLives = (state: Lives) => {
  const _state = state.map((element) => {
    const _element = {
      ...element,
      date: dayjs(element.date).format("YYYY/M/D (ddd)"),
    };
    return _element;
  });
  return _state;
};

export const LiveInformationContext = createContext<State>({
  lives: [],
});

interface Props {
  children: ReactNode;
  lives: Lives;
}

export const LiveInformationProvider: React.FC<Props> = (props) => {
  const labeledLives = useMemo(() => {
    return generateLabeledLives(props.lives);
  }, [props.lives]);

  return (
    <LiveInformationContext.Provider
      value={{
        lives: labeledLives,
      }}
    >
      {props.children}
    </LiveInformationContext.Provider>
  );
};
