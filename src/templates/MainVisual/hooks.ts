import { isSp } from "@/utils/isSp";
import { useEffect, useState } from "react";

export const useHooks = () => {
  const [_isSp, updateIsSp] = useState(false);

  // note:
  // SSR 時と違う結果が出力される場合、クライアント側で
  // Warning: Prop `src` did not match エラーが出るため、対策としてクライアント側で再算出する
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("resize", () => {
      updateIsSp(isSp());
    });
    return () => {
      window.removeEventListener("resize", () => {
        updateIsSp(isSp());
      });
    };
  }, []);

  return {
    _isSp,
  };
};
