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
  const DEFAULT_VALUE = ""; // 初期状態で未選択にするために必要

  return (
    <>
      <Select
        className={hooks.isSelectedSomeCategory ? "" : styles["select-default"]}
        name="category"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUE}
        required
      >
        <CategoryOptionElements defaultValue={DEFAULT_VALUE} />
      </Select>
      {hooks.isSelectedLiveReserve && (
        <div className={styles["wrapper"]}>
          <Select
            className={`${styles["is-small"]} ${
              hooks.isSelectedSomeReserveDate ? "" : styles["select-default"]
            }`}
            onChange={props.onChange}
            disabled={lives.length === 0 || !hooks.isSelectedLiveReserve}
            defaultValue={DEFAULT_VALUE}
            required
            name="reservedate"
          >
            <ReserveDateOptionElements defaultValue={DEFAULT_VALUE} />
          </Select>
          <Select
            className={`${styles["is-small"]} ${
              hooks.isSelectedSomeReserveCount ? "" : styles["select-default"]
            }`}
            disabled={lives.length === 0 || !hooks.isSelectedLiveReserve}
            onChange={props.onChange}
            defaultValue={DEFAULT_VALUE}
            required
            name="reservecount"
          >
            <ReserveCountOptionElements defaultValue={DEFAULT_VALUE} />
          </Select>
        </div>
      )}
    </>
  );
};
