export type SectionName =
  | "mainVisual"
  | "profile"
  | "musicVideo"
  | "live"
  | "gallery"
  | "contact";

type SectionOffset = {
  id: string;
  label: string;
  offsetPc: number;
  offsetSp: number;
};

export const anchorList: Record<SectionName, SectionOffset> = {
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

export const scrollOptions = {
  duration: 400,
  easing: [0.86, 0, 0.07, 1],
};
