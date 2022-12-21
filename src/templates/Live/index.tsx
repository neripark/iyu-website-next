import { Heading } from "@/components/Heading";
import { anchorList } from "@/constants/anchorList";
import { CardGroup } from "./CardGroup";
import { InformationText } from "./InformationText";
import styles from "./style.module.scss";

export const Live: React.FC = () => (
  <section className={styles["live"]} id={anchorList.live.id}>
    <Heading color="yellow">Live</Heading>
    <InformationText />
    <CardGroup />
  </section>
);
