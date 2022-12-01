import { CommonNavigation } from "@/containers/CommonNavigation";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";

export const SiteFloatingNavigation: React.FC = () => {
  const hooks = useHooks();
  return (
    <nav
      ref={hooks.ref}
      className={`${styles["site-floating-nav"]} 
      ${hooks.isScrollStart ? styles["is-scroll-start"] : ""} ${
        hooks.isWindowTop ? styles["is-window-top"] : ""
      }
      `}
    >
      <CommonNavigation />
    </nav>
  );
};
