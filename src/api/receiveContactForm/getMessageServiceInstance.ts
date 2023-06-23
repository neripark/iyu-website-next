import { ContactFormItem } from "@/types/ContactForm";
import { MessageLive } from "./Message/MessageLive";
import { MessageOther } from "./Message/MessageOther";
import { MessageTogether } from "./Message/MessageTogether";

export const getMessageServiceInstance = (props: ContactFormItem) => {
  switch (props.category) {
    case "live":
      return new MessageLive(props);
    case "together":
      return new MessageTogether(props);
    case "other":
      return new MessageOther(props);
    default:
      throw new Error("定義外のクラスが渡されました。");
  }
};
