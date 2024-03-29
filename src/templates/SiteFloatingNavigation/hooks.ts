import { useCallback, useEffect, useRef, useState } from "react";

export const useHooks = () => {
  const [isScrollStarted, setIsScrollStarted] = useState(false);
  const [isScrolledOver1vh, setIsScrolledOver1vh] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const handleScroll = useCallback(() => {
    if (typeof window === undefined) return;
    setIsScrollStarted(window.pageYOffset > 0);
    setIsScrolledOver1vh(
      ref.current !== null &&
        window.pageYOffset > window.innerHeight - ref.current.clientHeight,
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
    isScrolledOver1vh,
  };
};
