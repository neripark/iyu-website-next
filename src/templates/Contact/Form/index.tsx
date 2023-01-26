import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { CategorySelect } from "./CategorySelect";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";
import { SubmitButton } from "./SubmitButton";
import { UserInputProvider } from "./UserInputProvider";

export const Form: React.FC = () => (
  <UserInputProvider>
    <FormParts />
  </UserInputProvider>
);

// note:
// LINE notify の文字数制限が1000文字だが、長文を送信したい人も多そうなので多めの設定をしている。
// 見切れたぶんはメールで見られるのでいったん今は許容する。
// todo: サーバーサイドで分割送信をできるようにする。
const MESSAGE_MAX_LENGTH = 1500;

const FormParts: React.FC = () => {
  const hooks = useHooks();
  return (
    <form
      className={styles["contact-form"]}
      method="POST"
      onSubmit={hooks.onSubmit}
    >
      <Input
        name="name"
        onChange={hooks.onChange}
        placeholder="お名前"
        required
        type="text"
      />
      <CategorySelect onChange={hooks.onChange} />
      <Input
        name="email"
        onChange={hooks.onChange}
        placeholder="ご連絡先メールアドレス"
        required
        type="email"
      />
      <Textarea
        maxLength={MESSAGE_MAX_LENGTH}
        name="message"
        onChange={hooks.onChange}
        placeholder="内容"
        required
      />
      <p className={styles["user-input-length"]}>
        {hooks.userMessageLength} / {MESSAGE_MAX_LENGTH}
      </p>
      <SubmitButton
        className={styles["send-button"]}
        disabled={hooks.isFormDisabled}
      />
    </form>
  );
};
