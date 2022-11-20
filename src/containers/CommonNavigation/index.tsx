import { anchorList } from "./anchorList";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";
import { forwardRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Item: React.FC<{ id: string; offset: number; label: string }> = (
  props
) => {
  return (
    <li className={styles["anchor-item"]}>
      <AnchorLink
        className={styles["anchor"]}
        href={`#${props.id}`}
        offset={props.offset}
      >
        <span className={styles["string"]}>{props.label}</span>
      </AnchorLink>
    </li>
  );
};

// note: react-transition-group の都合で ref を使うためにフォワーディング
export const CommonNavigation = forwardRef<HTMLUListElement>(
  // note: displayName のために function で書いている
  function CommonNavigation(_props, ref) {
    const hooks = useHooks();
    return (
      <ul className={styles["anchor-list"]} ref={ref}>
        {hooks.offsetListAbsorbedDevice.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </ul>
    );
  }
);
