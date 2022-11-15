import styles from "./style.module.scss";
import { CommonNavigation } from "@/components/CommonNavigation";

export const SiteFloatingNavigation: React.FC = () => {
  return (
    <nav
      // v-scroll="scrollHandler"
      className={styles["site-floating-nav"]}
      // :class="{
      //   'is-scroll-start': isNavScrollStart,
      //   'is-window-top': isNavWindowTop
      // }"
    >
      <CommonNavigation />
    </nav>
  );
};
