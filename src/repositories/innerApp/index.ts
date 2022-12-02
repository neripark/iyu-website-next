import { ContactFormItem, SubmitItem } from "@/types/ContactForm";

const URL = "/api/receiveContactForm"; // Next.js api

export const postContactForm = (
  contactFormItem: Partial<ContactFormItem>
): Promise<Response> => {
  return fetch(URL, {
    method: "POST",
    headers: {
      accept: "Accept: application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encode(contactFormItem),
  });
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
