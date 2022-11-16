import { useState } from "react";

export const useHooks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHamburgerButton = () => {
    setIsOpen((prev) => !prev);
  };
  const buttonLabel = isOpen ? "メニューを閉じる" : "メニューを開く";

  return {
    isOpen,
    buttonLabel,
    onClickHamburgerButton,
  };
};
