import styles from "./style.module.scss";

type Member = {
  name: string;
  part: string;
};

const memberList: Member[] = [
  {
    name: "nagata",
    part: "(Ba)",
  },

  {
    name: "koudai",
    part: "(Key)",
  },
  {
    name: "zun",
    part: "(Vo)",
  },
  {
    name: "kou",
    part: "(Dr)",
  },
  {
    name: "neri",
    part: "(Gt)",
  },
];

const Member: React.FC<Member> = (props) => (
  <li className={styles["member"]}>
    <p className={styles["name"]}>{props.name}</p>
    <p className={styles["part"]}>{props.part}</p>
  </li>
);

export const Description: React.FC = () => {
  return (
    <div className={styles["profile-description"]}>
      <ul className={styles["member-list"]}>
        {memberList.map((element, index) => (
          <Member name={element.name} part={element.part} key={index} />
        ))}
      </ul>
      <p className={styles["description"]}>
        2017年3月結成。都内を中心に活動中。
        <br />
        都市の雑踏、積み重ねの日々、
        <br className={styles["break-sp"]} />
        暮らしの中に等身大で身近な音楽。
      </p>
    </div>
  );
};
