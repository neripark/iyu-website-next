import { ComponentPropsWithoutRef, ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./style.module.scss";

// 通常のaタグ
interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export const TextLink: React.FC<Props> = (props) => (
  <a {...props} className={`${styles["root"]} ${props.className}`}>
    {props.children}
  </a>
);

// アンカージャンプする場合
export const TextAnchorLink: React.FC<
  ComponentPropsWithoutRef<typeof AnchorLink>
> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <AnchorLink {...rest} className={`${styles["root"]} ${className}`}>
      {children}
    </AnchorLink>
  );
};
