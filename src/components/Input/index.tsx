import styles from "./style.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = (props) => {
  const { className = "", ...rest } = props;
  return <input {...rest} className={`${styles["root"]} ${className}`} />;
};
