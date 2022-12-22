import { useContext, useMemo } from "react";
import { UserInputContext } from "../UserInputProvider";

export const useHooks = () => {
  const { userInput } = useContext(UserInputContext);

  // todo: Context 側に寄せる
  // https://github.com/neripark/iyu-website-next/issues/50
  const isSelectedLiveReserve = useMemo(() => {
    return userInput.category === "live";
  }, [userInput.category]);
  const isSelectedSomeCategory = useMemo(() => {
    return userInput.category !== undefined;
  }, [userInput.category]);
  const isSelectedSomeReserveDate = useMemo(() => {
    return userInput.reservedate !== undefined;
  }, [userInput.reservedate]);
  const isSelectedSomeReserveCount = useMemo(() => {
    return userInput.reservecount !== undefined;
  }, [userInput.reservecount]);
  // -------------------------------------------------------

  return {
    isSelectedLiveReserve,
    isSelectedSomeCategory,
    isSelectedSomeReserveDate,
    isSelectedSomeReserveCount,
  };
};
