import { ContactFormItem, SubmitItem } from "@/types/ContactForm";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { UserInputContext } from "./UserInputProvider";

export const useHooks = () => {
  const { userInput, setUserInput } = useContext(UserInputContext);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const isSelectedLiveReserve = useMemo(() => {
    return userInput.category === "live";
  }, [userInput.category]);

  const isSelectedSomeCategory = useMemo(() => {
    return userInput.category !== undefined;
  }, [userInput.category]);

  const onChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setUserInput((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    },
    [setUserInput]
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const submitItem = encode(userInput);
    const url = "/api/receiveContactForm"; // Next.js api
    setIsFormDisabled(true);

    fetch(url, {
      method: "POST",
      headers: {
        accept: "Accept: application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: submitItem,
    })
      .then(() => {
        alert("ご連絡ありがとうございます！返信をお待ち下さい。");
      })
      .catch((err) =>
        alert(
          "申し訳ありません！エラーが発生しました。\r\nお手数ですが、メール（iyumusictokyo@gmail.com）かTwitterでお問い合わせください。\r\n\r\n" +
            err
        )
      )
      .finally(() => {
        setIsFormDisabled(false);
      });
  };

  return {
    onChange,
    onSubmit,
    isFormDisabled,
    isSelectedLiveReserve,
    isSelectedSomeCategory,
  };
};

const encode = (contactFormItem: Partial<ContactFormItem>) => {
  const data = {
    "form-name": "iyu-form", // todo: form 要素から取得できるか確認する。そのほうが堅牢
    ...contactFormItem,
  };

  return (Object.keys(data) as (keyof SubmitItem)[])
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(data[key] || "")}`
    )
    .join("&");
};
