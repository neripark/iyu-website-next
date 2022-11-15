import styles from "./style.module.scss";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<Props> = (props) => (
  <textarea {...props} className={`${styles["root"]} ${props.className}`} />
);
