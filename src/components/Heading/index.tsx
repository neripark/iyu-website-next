import styles from "./style.module.scss";
import { ReactElement } from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  color: "yellow" | "blue";
  children: string;
}

export const Heading: React.FC<Props> = (props) => {
  const { color, className, children, ...rest } = props;
  return (
    <h2
      // className を上書きしないように文字列連結で書く
      className={`${styles["heading"]} ${styles[color]} ${className}`}
      {...rest}
    >
      {children}
    </h2>
  );
};
