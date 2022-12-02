import { Select } from "@/components/Select";
import { LiveInformationContext } from "@/providers/LiveInformationProvider";
import { ChangeEvent, useContext } from "react";
import { CategoryOptionElements } from "./CategoryOptionElements";
import { useHooks } from "./hooks";
import { ReserveCountOptionElements } from "./ReserveCountOptionElements";
import { ReserveDateOptionElements } from "./ReserveDateOptionElements";
import styles from "./style.module.scss";

interface Props {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const CategorySelect: React.FC<Props> = (props) => {
  const hooks = useHooks();
  const { lives } = useContext(LiveInformationContext);

  return (
    <>
      <Select
        className={
          hooks.isSelectedSomeCategory ? "" : styles["category-default"]
        }
        name="category"
        onChange={props.onChange}
        defaultValue="default" // todo: option 側と共通化する
        required
      >
        <CategoryOptionElements />
      </Select>
      {/* todo: 別コンポーネントに切り出す */}
      {hooks.isSelectedLiveReserve && (
        <div className={styles["wrapper"]}>
          <Select
            className={styles["is-small"]}
            disabled={lives.length === 0 || !hooks.isSelectedLiveReserve}
            name="reservedate"
          >
            <ReserveDateOptionElements />
          </Select>
          <Select
            className={styles["is-small"]}
            disabled={lives.length === 0 || !hooks.isSelectedLiveReserve}
            onChange={props.onChange}
            name="reservecount"
          >
            <ReserveCountOptionElements />
          </Select>
        </div>
      )}
    </>
  );
};
