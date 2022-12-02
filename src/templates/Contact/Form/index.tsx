import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { CategorySelect } from "./CategorySelect";
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
  return (
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
      <CategorySelect onChange={hooks.onChange} />
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
  );
};
