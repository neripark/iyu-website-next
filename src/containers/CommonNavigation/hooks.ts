import { useOffsetListAbsorbedDevice } from "@/hooks/useOffsetListAbsorbedDevice";

export const useHooks = () => {
  const { offsetArrayAbsorbedDevice: offsetList } =
    useOffsetListAbsorbedDevice();

  return {
    offsetList,
  };
};
