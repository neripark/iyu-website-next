import { useState, useRef } from "react";

export const useHooks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHamburgerButton = () => {
    setIsOpen((prev) => !prev);
  };
  const buttonLabel = isOpen ? "メニューを閉じる" : "メニューを開く";
  const ref = useRef(null);

  return {
    isOpen,
    buttonLabel,
    onClickHamburgerButton,
    ref,
  };
};
