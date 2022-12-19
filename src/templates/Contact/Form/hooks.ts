import { postContactForm } from "@/repositories/innerApp";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useState,
} from "react";
import { UserInputContext } from "./UserInputProvider";

export const useHooks = () => {
  const { userInput, setUserInput } = useContext(UserInputContext);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  // todo: Context 側に寄せる
  const onChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setUserInput((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value || undefined,
        };
      });
    },
    [setUserInput]
  );

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setIsFormDisabled(true);

      try {
        await postContactForm(userInput);
      } catch (err) {
        alert(
          "申し訳ありません！エラーが発生しました。\r\nお手数ですが、メール（iyumusictokyo@gmail.com）かTwitterでお問い合わせください。\r\n\r\n" +
            err
        );
        return;
      }
      alert("ご連絡ありがとうございます！返信をお待ち下さい。");
      setIsFormDisabled(false);
    },
    [userInput]
  );

  return {
    onChange,
    onSubmit,
    isFormDisabled,
  };
};
