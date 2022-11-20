export const isSp = () => {
  if (typeof window === "undefined") return true;
  return window.innerWidth < 840; // scssの値と合わせる
};
