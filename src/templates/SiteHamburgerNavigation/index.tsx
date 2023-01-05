import { IyuLogo } from "@/components/IyuLogo";
import { CommonNavigation } from "@/containers/CommonNavigation";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { CSSTransition } from "react-transition-group";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";

export const SiteHamburgerNavigation: React.FC = () => {
  const hooks = useHooks();
  return (
    <nav
      className={`${styles["site-ham-menu"]} ${
        hooks.isScrollTop && styles["is-scroll-top"]
      }`}
    >
      <p className={styles["wrap-img"]}>
        <AnchorLink
          href={`#${hooks.offsetList.mainVisual.id}`}
          offset={hooks.offsetList.mainVisual.offset}
        >
          <IyuLogo className={styles["logo"]} colorType="white" />
        </AnchorLink>
      </p>
      <button
        aria-label={hooks.buttonLabel}
        className={`${styles["burger-button"]} ${
          hooks.isOpen ? styles["is-open-menu"] : ""
        }`}
        onClick={hooks.onClickHamburgerButton}
      >
        <span className={styles["line"]} />
        <span className={styles["line"]} />
        <span className={styles["line"]} />
      </button>
      <CSSTransition
        classNames={{
          enter: styles["enter"],
          enterActive: styles["enter-active"],
          exit: styles["exit"],
          exitActive: styles["exit-active"],
        }}
        in={hooks.isOpen}
        mountOnEnter
        nodeRef={hooks.ref}
        timeout={200} // css側と合わせる
        unmountOnExit
      >
        <CommonNavigation onClickLink={hooks.close} ref={hooks.ref} />
      </CSSTransition>
    </nav>
  );
};
