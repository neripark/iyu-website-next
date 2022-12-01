import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { anchorList } from "@/containers/CommonNavigation/anchorList";
import { LiveInformationContext } from "@/providers/LiveInformationProvider";
import { useContext } from "react";
import styles from "./style.module.scss";

export const Contact: React.FC = () => {
  const { lives } = useContext(LiveInformationContext);
  // todo: 実装する
  const isFormDisabled = false;
  const isSelectedTicketReserve = true;
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
            required
          >
            <option value="" disabled>
              - お問い合わせ種類 -
            </option>
            <option value="live">ライブのチケットお取り置き</option>
            <option value="together">共演のお誘い</option>
            <option value="other">その他</option>
          </Select>
          {/* todo: 別コンポーネントに切り出す */}
          {isSelectedTicketReserve && (
            <div className={styles["show-only-live"]}>
              <Select
                // v-model="formData.reservedate"
                className={styles["is-small"]}
                disabled={lives.length === 0 || !isSelectedTicketReserve}
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
                disabled={lives.length === 0 || !isSelectedTicketReserve}
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
            required
          />
          <Textarea
            // v-model="formData.message"
            name="message"
            placeholder="内容"
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
