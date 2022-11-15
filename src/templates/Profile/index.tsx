import { Description } from "./Description";
import styles from "./style.module.scss";
import { Heading } from "@/components/Heading";
import Image from "next/image";

export const Profile: React.FC = () => {
  return (
    <section className={styles["profile"]}>
      <Heading
        className={styles["heading"]}
        color="blue"
        data-testid="hogehoge"
      >
        Profile
      </Heading>
      <div className={styles["wrap-photo"]}>
        <Image
          className={styles["profile-photo"]}
          src="/assets/images/profile.jpg"
          width={1920}
          height={1370}
          alt="profile photo"
        />
      </div>
      <Description />
    </section>
  );
};
