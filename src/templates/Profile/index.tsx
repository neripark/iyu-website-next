import styles from "./style.module.scss";
import Image from "next/image";

export const Profile: React.FC = () => {
  return (
    <section className={styles["profile"]}>
      {/* todo */}
      {/* <heading className="heading" text="Profile" color="blue" /> */}
      <div className={styles["wrap-photo"]}>
        <Image
          className={styles["profile-photo"]}
          src="/assets/images/profile.jpg"
          width={1920}
          height={1370}
          alt="profile photo"
        />
      </div>
      {/* todo */}
      {/* <profile-description /> */}
    </section>
  );
};
