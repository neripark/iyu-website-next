import { Heading } from "@/components/Heading";
import { anchorList } from "@/containers/CommonNavigation/anchorList";
import Image from "next/image";
import { Description } from "./Description";
import styles from "./style.module.scss";

export const Profile: React.FC = () => {
  return (
    <section className={styles["profile"]} id={anchorList.profile.id}>
      <Heading className={styles["heading"]} color="blue">
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
