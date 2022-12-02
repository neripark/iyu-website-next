import { useContext, useMemo } from "react";
import { UserInputContext } from "../UserInputProvider";

export const useHooks = () => {
  const { userInput } = useContext(UserInputContext);

  const isSelectedLiveReserve = useMemo(() => {
    return userInput.category === "live";
  }, [userInput.category]);

  const isSelectedSomeCategory = useMemo(() => {
    return userInput.category !== undefined;
  }, [userInput.category]);

  return {
    isSelectedLiveReserve,
    isSelectedSomeCategory,
  };
};
