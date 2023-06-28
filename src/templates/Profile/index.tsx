import { Heading } from "@/components/Heading";
import { anchorList } from "@/constants/anchorList";
// import Image from "next/image";
import { Description } from "./Description";
import styles from "./style.module.scss";

export const Profile: React.FC = () => {
  return (
    <section className={styles["profile"]} id={anchorList.profile.id}>
      <Heading className={styles["heading"]} color="blue">
        Profile
      </Heading>
      <div className={styles["wrap-photo"]}>
        <img
          alt="profile photo"
          className={styles["profile-photo"]}
          height={1370}
          src="/assets/images/profile.jpg"
          width={1920}
        />
      </div>
      <Description />
    </section>
  );
};
