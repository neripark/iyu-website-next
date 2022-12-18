import { Heading } from "@/components/Heading";
import { anchorList } from "@/containers/CommonNavigation/anchorList";
import { Carousel } from "./Carousel";
import styles from "./style.module.scss";

export const Gallery: React.FC = () => (
  <section className={styles["gallery"]} id={anchorList.gallery.id}>
    <Heading color="blue">Gallery</Heading>
    <Carousel />
  </section>
);
