import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { anchorList } from "@/containers/CommonNavigation/anchorList";
import { LiveInformationContext } from "@/providers/LiveInformationProvider";
import { useContext } from "react";
import { CategoryOptionElements } from "./CategoryOptionElements";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";

export const Contact: React.FC = () => {
  const hooks = useHooks();
  const { lives } = useContext(LiveInformationContext);
  // todo: 実装する
  const isFormDisabled = false;
  const maxTicketNumber = 5;

  return (
    <section className={styles["contact"]} id={anchorList.contact.id}>
      <Heading color="yellow">Contact</Heading>
      <div className={styles["wrap"]}>
        <p className={styles["lead"]}>
          ライブのチケットお取り置き、共演のお誘い、
          <br />
          メッセージなど、お気軽にご連絡ください。
        </p>
        <button onClick={hooks.debug}>debug</button>
        <form
          className={styles["contact-form"]}
          name="iyu-form"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          // @submit.prevent="handleSubmit"
        >
          {/* todo: hidden, 必要かどうか確認する */}
          <input type="hidden" name="form-name" value="iyu-form" />
          <Input
            // v-model="formData.name"
            name="name"
            type="text"
            placeholder="お名前"
            onChange={hooks.onChange}
            required
          />
          <Select
            // v-model="formData.category"
            className={
              hooks.isSelectedSomeCategory
                ? styles["category"]
                : styles["category-default"]
            }
            name="category"
            // onChange={() => console.log("select changed!!")}
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
                // v-model="formData.reservedate"
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
                // v-model="formData.reservecount"
                className={styles["is-small"]}
                disabled={lives.length === 0 || !hooks.isSelectedLiveReserve}
                onChange={hooks.onChange}
                name="reservecount"
              >
                <>
                  <option value="" disabled>
                    - お取り置き枚数 -
                  </option>
                  {[...Array(maxTicketNumber)].map((_, index) => {
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
            // v-model="formData.email"
            name="email"
            type="email"
            placeholder="ご連絡先メールアドレス"
            onChange={hooks.onChange}
            required
          />
          <Textarea
            // v-model="formData.message"
            name="message"
            placeholder="内容"
            onChange={hooks.onChange}
            required
          />
          <button
            className={styles["send-button"]}
            // :disabled="isFormDisabled"
            type="submit"
          >
            {isFormDisabled ? "送信中..." : "送信する"}
          </button>
        </form>
      </div>
    </section>
  );
};
