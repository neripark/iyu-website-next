import { useHooks } from "./hooks";
import styles from "./style.module.scss";
import { CommonNavigation } from "@/containers/CommonNavigation";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";

export const SiteHamburgerNavigation: React.FC = () => {
  const hooks = useHooks();
  return (
    <nav
      className={`${styles["site-ham-menu"]} ${
        hooks.isScrollTop && styles["is-scroll-top"]
      }`}
    >
      <p className={styles["wrap-img"]}>
        <a className={styles["anchor"]}>
          <Image
            className={styles["logo"]}
            src="/assets/images/iyu-logo-White.svg"
            alt="iyu-logo"
            width={70}
            height={39}
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
        <CommonNavigation ref={hooks.ref} onClickLink={hooks.close} />
      </CSSTransition>
    </nav>
  );
};
