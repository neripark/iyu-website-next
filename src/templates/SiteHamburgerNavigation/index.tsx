import { useHooks } from "./hooks";
import styles from "./style.module.scss";
import { CommonNavigation } from "@/components/CommonNavigation";
import { CSSTransition } from "react-transition-group";

export const SiteHamburgerNavigation: React.FC = () => {
  const hooks = useHooks();
  return (
    <nav
      // v-scroll="scrollHandler"
      className={`${styles["site-ham-menu"]} ${
        hooks.isScrollTop && styles["is-scroll-top"]
      }`}
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
          hooks.isOpen ? styles["is-open-menu"] : ""
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
        nodeRef={hooks.ref}
        timeout={200} // css側と合わせる
        classNames={{
          enter: styles["enter"],
          enterActive: styles["enter-active"],
          exit: styles["exit"],
          exitActive: styles["exit-active"],
        }}
        mountOnEnter
        unmountOnExit
        // onEntering={() => console.log("onEntering...")}
        // onEnter={() => console.log("onEnter!")}
        // onExiting={() => console.log("onExiting...")}
        // onExited={() => console.log("onExited!")}
      >
        <CommonNavigation ref={hooks.ref} />
      </CSSTransition>
    </nav>
  );
};
