import { anchorList } from "./anchorList";
import { isSp } from "@/utils/isSp";
import { useMemo } from "react";

export const useHooks = () => {
  const _isSp = useMemo(() => isSp(), []);
  const offsetListAbsorbedDevice = useMemo(() => {
    return (Object.keys(anchorList) as (keyof typeof anchorList)[])
      .filter((element) => element !== "mainVisual")
      .map((element) => {
        return {
          id: anchorList[element].id,
          label: anchorList[element].label,
          offset: _isSp
            ? anchorList[element].offsetSp
            : anchorList[element].offsetPc,
        };
      });
  }, [_isSp]);

  return {
    offsetListAbsorbedDevice,
  };
};
