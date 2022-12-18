import { CommonNavigation } from "@/containers/CommonNavigation";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";

export const SiteFloatingNavigation: React.FC = () => {
  const hooks = useHooks();
  return (
    <nav
      className={`${styles["site-floating-nav"]} 
      ${hooks.isScrollStarted ? styles["is-scroll-start"] : ""} ${
        hooks.isScrolledOver1vh ? styles["is-window-top"] : ""
      }
      `}
      ref={hooks.ref}
    >
      <CommonNavigation />
    </nav>
  );
};
