import { CardGroup } from "./CardGroup";
import { InformationText } from "./InformationText";
import styles from "./style.module.scss";
import { Heading } from "@/components/Heading";

export const Live: React.FC = () => (
  <section className={styles["live"]}>
    <Heading color="yellow">Live</Heading>
    <InformationText />
    <CardGroup />
  </section>
);
