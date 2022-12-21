import { anchorList, type Offset } from "@/constants/anchorList";
import { SectionName } from "@/types";
import { isSp } from "@/utils/isSp";
import { useMemo } from "react";

interface OffsetAbsorbedDevice extends Omit<Offset, "offsetPc" | "offsetSp"> {
  offset: number;
}

type AnchorListAbsorbedDevice = Record<SectionName, OffsetAbsorbedDevice>;

export const useOffsetListAbsorbedDevice = () => {
  const _isSp = useMemo(() => isSp(), []);

  const offsetArrayAbsorbedDevice = useMemo(() => {
    return (
      (Object.keys(anchorList) as (keyof typeof anchorList)[])
        // todo: UI側でフィルタリングするようにする
        .filter((element) => element !== "mainVisual")
        .map((element) => {
          return {
            id: anchorList[element].id,
            label: anchorList[element].label,
            offset: _isSp
              ? anchorList[element].offsetSp
              : anchorList[element].offsetPc,
          };
        })
    );
  }, [_isSp]);

  const anchorListAbsorbedDevice = useMemo(() => {
    return (Object.keys(anchorList) as (keyof typeof anchorList)[]).reduce(
      (prev, current) => {
        prev[current] = {
          id: anchorList[current].id,
          label: anchorList[current].label,
          offset: _isSp
            ? anchorList[current].offsetSp
            : anchorList[current].offsetPc,
        };
        return prev;
      },
      {} as AnchorListAbsorbedDevice
    );
  }, [_isSp]);

  return { offsetArrayAbsorbedDevice, anchorListAbsorbedDevice };
};
