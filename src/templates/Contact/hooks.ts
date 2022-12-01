import { ContactFormItem } from "@/types/ContactForm";
import React, { useCallback, useMemo, useState } from "react";

export const useHooks = () => {
  const [userInput, setUserInput] = useState<Partial<ContactFormItem>>({});

  const isSelectedLiveReserve = useMemo(() => {
    return userInput.category === "live";
  }, [userInput.category]);

  const isSelectedSomeCategory = useMemo(() => {
    return userInput.category !== undefined;
  }, [userInput.category]);

  const onChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setUserInput((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    },
    []
  );

  //
  const debug = () => {
    console.log(userInput);
  };
  //

  return {
    onChange,
    isSelectedLiveReserve,
    isSelectedSomeCategory,
    debug, //
  };
};
