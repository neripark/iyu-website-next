type Section =
  | "mainVisual"
  | "profile"
  | "musicVideo"
  | "live"
  | "gallery"
  | "contact";

export const anchorList: Record<
  Section,
  { id: string; offsetPc: number; offsetSp: number }
> = {
  mainVisual: {
    id: "mainVisual",
    offsetPc: -60,
    offsetSp: -59,
  },
  profile: {
    id: "profile",
    offsetPc: -60,
    offsetSp: -59,
  },
  musicVideo: {
    id: "musicVideo",
    offsetPc: -60,
    offsetSp: -59,
  },
  live: {
    id: "live",
    offsetPc: -60,
    offsetSp: -59,
  },
  gallery: {
    id: "gallery",
    offsetPc: -60,
    offsetSp: -59,
  },
  contact: {
    id: "contact",
    offsetPc: -60,
    offsetSp: -59,
  },
};

export const scrollOptions = {
  duration: 400,
  easing: [0.86, 0, 0.07, 1],
};
