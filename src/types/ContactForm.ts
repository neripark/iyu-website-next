export type Category = "live" | "together" | "other";

export const categories: Record<Category, string> = {
  live: "ライブのチケットお取り置き",
  together: "共演のお誘い",
  other: "その他",
};

interface Basic {
  name: string;
  email: string;
  message: string;
}

interface SelectedLive extends Basic {
  category: "live";
  reservedate: string;
  reservecount: string;
}

interface UnSelectedLive extends Basic {
  category: "together" | "other";
  reservedate?: never;
  reservecount?: never;
}

export type ContactFormItem = SelectedLive | UnSelectedLive;

export type SubmitItem = ContactFormItem & { "form-name": string };

// const hoge1: ContactFormItem = {
//   name: "aaa",
//   email: "aaa",
//   message: "aaa",
//   category: "together",
// }

// const hoge2: ContactFormItem = {
//   name: "aaa",
//   email: "aaa",
//   message: "aaa",
//   category: "live",
//   reservedate: "",
//   reservecount: "",
// }
