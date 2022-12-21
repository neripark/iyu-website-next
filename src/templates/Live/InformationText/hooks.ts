import { useOffsetListAbsorbedDevice } from "@/hooks/useOffsetListAbsorbedDevice";
import { LiveInformationContext } from "@/providers/LiveInformationProvider";
import { useContext } from "react";

export const useHooks = () => {
  const { lives } = useContext(LiveInformationContext);
  const { anchorListAbsorbedDevice: anchorList } =
    useOffsetListAbsorbedDevice();

  return {
    lives,
    anchorList,
  };
};
