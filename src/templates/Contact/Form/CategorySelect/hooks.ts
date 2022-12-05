import { useContext, useMemo } from "react";
import { UserInputContext } from "../UserInputProvider";

export const useHooks = () => {
  const { userInput } = useContext(UserInputContext);

  // todo: Context 側に寄せる
  const isSelectedLiveReserve = useMemo(() => {
    return userInput.category === "live";
  }, [userInput.category]);

  // todo: Context 側に寄せる
  const isSelectedSomeCategory = useMemo(() => {
    return userInput.category !== undefined;
  }, [userInput.category]);

  // todo: Context 側に寄せる
  const isSelectedSomeReserveDate = useMemo(() => {
    return userInput.reservedate !== undefined;
  }, [userInput.reservedate]);

  // todo: Context 側に寄せる
  const isSelectedSomeReserveCount = useMemo(() => {
    return userInput.reservecount !== undefined;
  }, [userInput.reservecount]);

  return {
    isSelectedLiveReserve,
    isSelectedSomeCategory,
    isSelectedSomeReserveDate,
    isSelectedSomeReserveCount,
  };
};
