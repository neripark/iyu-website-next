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
        name="message"
        onChange={hooks.onChange}
        placeholder="内容"
        required
      />
      <SubmitButton
        className={styles["send-button"]}
        disabled={hooks.isFormDisabled}
      />
    </form>
  );
};
