import { useOffsetListAbsorbedDevice } from "@/hooks/useOffsetListAbsorbedDevice";

export const useHooks = () => {
  const offsetList = useOffsetListAbsorbedDevice();

  return {
    offsetList,
  };
};
