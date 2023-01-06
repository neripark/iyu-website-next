import styles from "./style.module.scss";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<Props> = (props) => {
  const { className = "", ...rest } = props;
  return <textarea {...rest} className={`${styles["root"]} ${className}`} />;
};
