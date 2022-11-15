import styles from "./style.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = (props) => (
  <input {...props} className={`${styles["root"]} ${props.className}`} />
);
