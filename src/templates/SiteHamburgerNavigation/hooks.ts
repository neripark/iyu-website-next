import { useState, useRef, useEffect } from "react";

export const useHooks = () => {
  const ADJUST_POSITION = 500; // 適当
  const [isOpen, setIsOpen] = useState(false);
  const onClickHamburgerButton = () => {
    setIsOpen((prev) => !prev);
  };
  const buttonLabel = isOpen ? "メニューを閉じる" : "メニューを開く";
  const ref = useRef(null);
  const [isScrollTop, updateIsScrollTop] = useState(true);

  useEffect(() => {
    if (typeof window === undefined) return;
    window.addEventListener("scroll", () => {
      updateIsScrollTop(window.scrollY < ADJUST_POSITION);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        updateIsScrollTop(window.scrollY < ADJUST_POSITION);
      });
    };
  }, []);

  return {
    isOpen,
    isScrollTop,
    buttonLabel,
    onClickHamburgerButton,
    ref,
  };
};
