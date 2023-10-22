import { validate } from ".";
import type {
  ContactFormItem,
  SelectedLive,
  UnSelectedLive,
} from "@/types/ContactForm";

const validDataLive: SelectedLive = {
  category: "live",
  name: "neripark",
  email: "aaa@example.com",
  message: "こんにちは！",
  reservedate: "2021-01-01",
  reservecount: "1枚",
};

describe("validate", () => {
  describe("validな場合", () => {
    test("パスすること", () => {
      const data: ContactFormItem = validDataLive;
      expect(validate(data)).toEqual(data);
    });
    test("名前の前後にスペースが入力されている場合、スペースが取り除かれて返却されること", () => {
      const data: ContactFormItem = {
        ...validDataLive,
        name: "  test neripark　",
      };
      expect(validate(data)).toEqual({ ...data, name: "test neripark" });
    });
  });

  describe("invalidな場合", () => {
    test("名前が空の場合、例外が投げられること", () => {
      const data: ContactFormItem = {
        ...validDataLive,
        name: "",
      };
      expect(() => validate(data)).toThrowError("1文字以上必要です。");
    });
    test("名前がスペースのみで入力されている場合、例外が投げられること", () => {
      const data: ContactFormItem = {
        ...validDataLive,
        name: " ",
      };
      expect(() => validate(data)).toThrowError("1文字以上必要です。");
    });
    test("emailが不正な形式の場合、例外が投げられること", () => {
      const data: ContactFormItem = {
        ...validDataLive,
        email: "aaa",
      };
      expect(() => validate(data)).toThrowError(
        "メールアドレスの形式が不正です。",
      );
    });
  });
});
