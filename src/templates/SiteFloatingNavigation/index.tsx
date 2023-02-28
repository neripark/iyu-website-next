import { CommonNavigation } from "@/containers/CommonNavigation";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";

export const SiteFloatingNavigation: React.FC = () => {
  const hooks = useHooks();
  const className = [
    styles["site-floating-nav"],
    hooks.isScrollStarted ? styles["is-scroll-start"] : undefined,
    hooks.isScrolledOver1vh ? styles["is-window-top"] : undefined,
  ]
    .filter((e) => e)
    .join(" ");

  return (
    <nav className={className} ref={hooks.ref}>
      <CommonNavigation />
    </nav>
  );
};
