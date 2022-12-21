import { SectionName } from "@/types";

export type Offset = {
  id: string;
  label: string;
  offsetPc: number;
  offsetSp: number;
};

export const anchorList: Record<SectionName, Offset> = {
  mainVisual: {
    id: "mainVisual",
    label: "MainVisual", // 使わない
    offsetPc: 60,
    offsetSp: 59,
  },
  profile: {
    id: "profile",
    label: "Profile",
    offsetPc: 60,
    offsetSp: 59,
  },
  musicVideo: {
    id: "musicVideo",
    label: "Music",
    offsetPc: 60,
    offsetSp: 59,
  },
  live: {
    id: "live",
    label: "Live",
    offsetPc: 60,
    offsetSp: 59,
  },
  gallery: {
    id: "gallery",
    label: "Gallery",
    offsetPc: 60,
    offsetSp: 59,
  },
  contact: {
    id: "contact",
    label: "Contact",
    offsetPc: 60,
    offsetSp: 59,
  },
};
