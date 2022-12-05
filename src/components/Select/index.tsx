import styles from "./style.module.scss";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select: React.FC<Props> = (props) => {
  return (
    <select {...props} className={`${styles["root"]} ${props.className}`}>
      {props.children}
    </select>
  );
};
