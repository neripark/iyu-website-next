import { LoadingIcon } from "@/components/LoadingIcon";
import styles from "./style.module.scss";

interface Props {
  disabled?: boolean;
  className?: string;
}

export const SubmitButton: React.FC<Props> = (props) => {
  return (
    <button
      className={`${styles["send-button"]} ${props.className}`}
      disabled={props.disabled}
      type="submit"
    >
      {props.disabled ? "送信中..." : "送信する"}
      {props.disabled ? (
        <LoadingIcon className={styles["loading-icon"]} />
      ) : null}
    </button>
  );
};
