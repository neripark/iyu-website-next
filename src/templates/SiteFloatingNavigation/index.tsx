import { CommonNavigation } from "@/containers/CommonNavigation";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";

export const SiteFloatingNavigation: React.FC = () => {
  const hooks = useHooks();
  console.log("isScrollTop", hooks.isScrollStarted);
  console.log("isWindowTop", hooks.isScrolled1vh);
  return (
    <nav
      className={`${styles["site-floating-nav"]} 
      ${hooks.isScrollStarted ? styles["is-scroll-start"] : ""} ${
        hooks.isScrolled1vh ? styles["is-window-top"] : ""
      }
      `}
      ref={hooks.ref}
    >
      <CommonNavigation />
    </nav>
  );
};
