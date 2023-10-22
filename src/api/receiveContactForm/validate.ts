import { ContactFormItem } from "@/types/ContactForm";

export const validate = (body: ContactFormItem) => {
  switch (body.category) {
    case "live":
    case "together":
    case "other":
    default:
      throw new Error("定義外のクラスが渡されました。");
  }
};
