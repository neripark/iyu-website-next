import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { LiveInformationContext } from "@/providers/LiveInformationProvider";
import { useContext } from "react";
import { CategoryOptionElements } from "../CategoryOptionElements";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";
import { UserInputProvider } from "./UserInputProvider";

export const Form: React.FC = () => (
  <UserInputProvider>
    <FormParts />
  </UserInputProvider>
);

const FormParts: React.FC = () => {
  const hooks = useHooks();
  const { lives } = useContext(LiveInformationContext);
  const MAX_TICKET_NUMBER = 5;

  return (
    <>
      <form
        className={styles["contact-form"]}
        name="iyu-form"
        method="POST"
        // todo: netlify の form に認識されるか確認し、要不要を決める。preventDefault 書いてるからたぶんだめ？
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={hooks.onSubmit}
      >
        <Input
          name="name"
          type="text"
          placeholder="お名前"
          onChange={hooks.onChange}
          required
        />
        <Select
          className={
            hooks.isSelectedSomeCategory
              ? styles["category"]
              : styles["category-default"]
          }
          name="category"
          onChange={hooks.onChange}
          defaultValue="default" // todo: option 側と共通化する
          required
        >
          <CategoryOptionElements />
        </Select>
        {/* todo: 別コンポーネントに切り出す */}
        {hooks.isSelectedLiveReserve && (
          <div className={styles["show-only-live"]}>
            <Select
              className={styles["is-small"]}
              disabled={lives.length === 0 || !hooks.isSelectedLiveReserve}
              name="reservedate"
            >
              <>
                <option value="" disabled>
                  - お取り置き日程 -
                </option>
                {lives.map((element) => (
                  <option key={element.date}>
                    {/* todo: context 上でフォーマットする */}
                    {/* {`${$dayjs(live.date).format("YYYY/M/D (ddd)")} - ${live.title}`} */}
                    {element.date} {element.title}
                  </option>
                ))}
              </>
            </Select>
            <Select
              className={styles["is-small"]}
              disabled={lives.length === 0 || !hooks.isSelectedLiveReserve}
              onChange={hooks.onChange}
              name="reservecount"
            >
              <>
                <option value="" disabled>
                  - お取り置き枚数 -
                </option>
                {[...Array(MAX_TICKET_NUMBER)].map((_, index) => {
                  const value = index + 1;
                  return (
                    <option key={value} value={`${value}枚`}>
                      {`${value}枚`}
                    </option>
                  );
                })}
              </>
            </Select>
          </div>
        )}
        <Input
          name="email"
          type="email"
          placeholder="ご連絡先メールアドレス"
          onChange={hooks.onChange}
          required
        />
        <Textarea
          name="message"
          placeholder="内容"
          onChange={hooks.onChange}
          required
        />
        <button
          className={styles["send-button"]}
          disabled={hooks.isFormDisabled}
          type="submit"
        >
          {hooks.isFormDisabled ? "送信中..." : "送信する"}
        </button>
      </form>
    </>
  );
};
