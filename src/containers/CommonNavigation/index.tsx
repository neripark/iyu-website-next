import { forwardRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";

interface Props {
  onClickLink?: () => void;
}

// note: react-transition-group の都合で ref を使うためにフォワーディング
export const CommonNavigation = forwardRef<HTMLUListElement, Props>(
  // note: displayName のために function で書いている
  function CommonNavigation(props, ref) {
    const hooks = useHooks();
    return (
      <ul className={styles["anchor-list"]} ref={ref}>
        {hooks.offsetList.map((element) => {
          return (
            <Item {...element} key={element.id} onClick={props.onClickLink} />
          );
        })}
      </ul>
    );
  }
);

const Item: React.FC<{
  id: string;
  offset: number;
  label: string;
  onClick?: () => void;
}> = (props) => {
  return (
    <li className={styles["anchor-item"]}>
      <AnchorLink
        className={styles["anchor"]}
        href={`#${props.id}`}
        offset={props.offset}
        onClick={props.onClick}
      >
        <span className={styles["string"]}>{props.label}</span>
      </AnchorLink>
    </li>
  );
};
