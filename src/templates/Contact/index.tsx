import { Heading } from "@/components/Heading";
import { anchorList } from "@/containers/CommonNavigation/anchorList";
import { Form } from "./Form";
import styles from "./style.module.scss";

export const Contact: React.FC = () => (
  <section className={styles["contact"]} id={anchorList.contact.id}>
    <Heading color="yellow">Contact</Heading>
    <div className={styles["wrap"]}>
      <p className={styles["lead"]}>
        ライブのチケットお取り置き、共演のお誘い、
        <br />
        メッセージなど、お気軽にご連絡ください。
      </p>
      <Form />
    </div>
  </section>
);
