import { anchorList } from "@/constants/anchorList";
import { isSp } from "@/utils/isSp";
import { useMemo } from "react";

export const scrollOptions = {
  duration: 400,
  easing: [0.86, 0, 0.07, 1],
};

export const useOffsetListAbsorbedDevice = () => {
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

  return offsetListAbsorbedDevice;
};
