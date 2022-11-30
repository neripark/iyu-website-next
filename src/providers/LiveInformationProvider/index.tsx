import { Live } from "@/types";
import { createContext, ReactNode } from "react";

type Lives = Live[];

type State = {
  lives: Lives;
};

export const LiveInformationContext = createContext<State>({
  lives: [],
});

interface Props {
  children: ReactNode;
  lives: Lives;
}

export const LiveInformationProvider: React.FC<Props> = (props) => (
  <LiveInformationContext.Provider value={{ lives: props.lives }}>
    {props.children}
  </LiveInformationContext.Provider>
);
