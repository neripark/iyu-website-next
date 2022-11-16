import { useHooks } from "./hooks";
import styles from "./style.module.scss";
import { CommonNavigation } from "@/components/CommonNavigation";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

export const SiteHamburgerNavigation: React.FC = () => {
  const hooks = useHooks();
  const ref = useRef(null);
  return (
    <nav
      // v-scroll="scrollHandler"
      className={styles["site-ham-menu"]}
      // :class="{ 'is-scroll-top': isScrollTop }"
    >
      <p className={styles["wrap-img"]}>
        <a
          v-scroll-to="scrollTo(anchorList.mainVisual)"
          className={styles["anchor"]}
          // :href="`#${anchorList.profile.id}`"
        >
          <img
            className={styles["logo"]}
            src="/assets/images/iyu-logo-White.svg"
            alt="iyu-logo"
          />
        </a>
      </p>
      <button
        className={`${styles["burger-button"]} ${
          hooks.isOpen && styles["is-open-menu"]
        }`}
        aria-label={hooks.buttonLabel}
        onClick={hooks.onClickHamburgerButton}
      >
        <span className={styles["line"]} />
        <span className={styles["line"]} />
        <span className={styles["line"]} />
      </button>
      <CSSTransition
        in={hooks.isOpen}
        nodeRef={ref}
        timeout={0}
        classNames={{
          enter: styles["enter"],
          enterDone: styles["enter-active"],
          exit: styles["exit"],
          exitDone: styles["exit-active"],
        }}
        // unmountOnExit
        onEntering={() => console.log("onEntering...")}
        onEnter={() => console.log("onEnter!")}
        onExiting={() => console.log("onExiting...")}
        onExited={() => console.log("onExited!")}
      >
        {/* todo: transition 消す */}
        {/* todo: 初期状態は閉じているようにする */}
        <CommonNavigation ref={ref} />
      </CSSTransition>
    </nav>
  );
};
