import { useCallback, useEffect, useRef, useState } from "react";

export const useHooks = () => {
  const [isScrollStart, setIsScrolStart] = useState(false);
  const [isWindowTop, setIsWindowTop] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const handleScroll = useCallback(() => {
    if (typeof window === undefined) return;
    setIsScrolStart(window.pageYOffset > 0);
    setIsWindowTop(
      window.pageYOffset > window.innerHeight - ref.current!.clientHeight
    );
  }, []);

  // 初回用
  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  useEffect(() => {
    if (typeof window === undefined) return;
    window.addEventListener("scroll", () => {
      handleScroll();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll();
      });
    };
  }, [handleScroll]);

  return {
    ref,
    isScrollStart,
    isWindowTop,
  };
};
