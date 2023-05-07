import { Select } from "@/components/Select";
import { LiveInformationContext } from "@/providers/LiveInformationProvider";
import { ChangeEvent, useContext } from "react";
import { CategoryOptionElements } from "./CategoryOptionElements";
import { ReserveCountOptionElements } from "./ReserveCountOptionElements";
import { ReserveDateOptionElements } from "./ReserveDateOptionElements";
import { useHooks } from "./hooks";
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
        defaultValue={DEFAULT_VALUE}
        name="category"
        onChange={props.onChange}
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
            defaultValue={DEFAULT_VALUE}
            disabled={lives.length === 0 || !hooks.isSelectedLiveReserve}
            name="reservedate"
            onChange={props.onChange}
            required
          >
            <ReserveDateOptionElements defaultValue={DEFAULT_VALUE} />
          </Select>
          <Select
            className={`${styles["is-small"]} ${
              hooks.isSelectedSomeReserveCount ? "" : styles["select-default"]
            }`}
            defaultValue={DEFAULT_VALUE}
            disabled={lives.length === 0 || !hooks.isSelectedLiveReserve}
            name="reservecount"
            onChange={props.onChange}
            required
          >
            <ReserveCountOptionElements defaultValue={DEFAULT_VALUE} />
          </Select>
        </div>
      )}
    </>
  );
};
