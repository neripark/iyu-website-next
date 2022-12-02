import { ContactFormItem } from "@/types/ContactForm";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface FormContext {
  userInput: Partial<ContactFormItem>;
  setUserInput: Dispatch<SetStateAction<Partial<ContactFormItem>>>;
}

export const UserInputContext = createContext<FormContext>({
  userInput: {},
  setUserInput: () => {},
});

interface Props {
  children: ReactNode;
}

export const UserInputProvider: React.FC<Props> = (props) => {
  const [userInput, setUserInput] = useState<Partial<ContactFormItem>>({});
  return (
    <UserInputContext.Provider value={{ userInput, setUserInput }}>
      {props.children}
    </UserInputContext.Provider>
  );
};
