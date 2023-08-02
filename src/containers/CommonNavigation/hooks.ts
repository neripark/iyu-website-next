import { useOffsetListAbsorbedDevice } from "@/hooks/useOffsetListAbsorbedDevice";

export const useHooks = () => {
  const { offsetArrayAbsorbedDevice } = useOffsetListAbsorbedDevice();
  const filteredAnchorList = offsetArrayAbsorbedDevice.filter(
    (element) => element.id !== "mainVisual",
  );

  return {
    anchorList: filteredAnchorList,
  };
};
