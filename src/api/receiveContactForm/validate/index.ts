import type { ContactFormItem } from "@/types/ContactForm";
import { z } from "zod";

const commonEmailSchema = z.string().email("メールアドレスの形式が不正です。");
const commonStringSchema = z.string().trim().min(1, "1文字以上必要です。");

const Live = z.object({
  category: z.literal("live"),
  name: commonStringSchema,
  email: commonEmailSchema,
  message: commonStringSchema,
  reservedate: commonStringSchema,
  reservecount: commonStringSchema,
});

const Together = z.object({
  category: z.literal("together"),
  name: commonStringSchema,
  email: commonEmailSchema,
  message: commonStringSchema,
  reservedate: z.undefined(),
  reservecount: z.undefined(),
});

const Other = z.object({
  category: z.literal("other"),
  name: commonStringSchema,
  email: commonEmailSchema,
  message: commonStringSchema,
  reservedate: z.undefined(),
  reservecount: z.undefined(),
});

export const validate = (body: ContactFormItem) => {
  switch (body.category) {
    case "live":
      return Live.parse(body);
    case "together":
      return Together.parse(body);
    case "other":
      return Other.parse(body);
    default:
      throw new Error("定義外のカテゴリが渡されました。");
  }
};
