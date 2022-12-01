import { LiveInformationContext } from "@/providers/LiveInformationProvider";
import { useContext } from "react";
import { LiveCard } from "./LiveCard";
import styles from "./style.module.scss";

export const CardGroup: React.FC = () => {
  const { lives } = useContext(LiveInformationContext);
  if (lives.length === 0) return null;
  return (
    <ul className={styles["live-cards"]}>
      {lives.map((element, index) => (
        <LiveCard key={index} {...element} />
      ))}
    </ul>
  );
};
