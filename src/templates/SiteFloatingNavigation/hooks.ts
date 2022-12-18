import { useCallback, useEffect, useRef, useState } from "react";

export const useHooks = () => {
  const [isScrollStarted, setIsScrollStarted] = useState(false);
  const [isScrolled1vh, setIsScrolled1vh] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const handleScroll = useCallback(() => {
    if (typeof window === undefined) return;
    setIsScrollStarted(window.pageYOffset > 0);
    setIsScrolled1vh(
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
    isScrollStarted,
    isScrolled1vh,
  };
};
