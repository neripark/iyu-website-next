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

const validDataTogether: UnSelectedLive = {
  category: "together",
  name: "neripark",
  email: "aaa@example.com",
  message: "こんにちは！",
};

const validDataOther: UnSelectedLive = {
  category: "other",
  name: "neripark",
  email: "aaa@example.com",
  message: "こんにちは！",
};

describe("validate", () => {
  describe("カテゴリがLiveの場合", () => {
    describe("validなデータ", () => {
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

    describe("invalidなデータ", () => {
      test("名前が空の場合、例外が投げられること", () => {
        const data: ContactFormItem = {
          ...validDataLive,
          name: "",
        };
        expect(() => validate(data)).toThrow("1文字以上必要です。");
      });
      test("名前がスペースのみで入力されている場合、例外が投げられること", () => {
        const data: ContactFormItem = {
          ...validDataLive,
          name: " ",
        };
        expect(() => validate(data)).toThrow("1文字以上必要です。");
      });
      test("emailが不正な形式の場合、例外が投げられること", () => {
        const data: ContactFormItem = {
          ...validDataLive,
          email: "aaa",
        };
        expect(() => validate(data)).toThrow(
          "メールアドレスの形式が不正です。",
        );
      });
      test("messageが空の場合、例外が投げられること", () => {
        const data: ContactFormItem = {
          ...validDataLive,
          message: "",
        };
        expect(() => validate(data)).toThrow("1文字以上必要です。");
      });
      test("reservedateが空の場合、例外が投げられること", () => {
        const data: ContactFormItem = {
          ...validDataLive,
          reservedate: "",
        };
        expect(() => validate(data)).toThrow("1文字以上必要です。");
      });
      test("reservecountが空の場合、例外が投げられること", () => {
        const data: ContactFormItem = {
          ...validDataLive,
          reservecount: "",
        };
        expect(() => validate(data)).toThrow("1文字以上必要です。");
      });
      test("reservedateのフィールドが存在していない場合、例外が投げられること", () => {
        const data = {
          category: validDataLive.category,
          name: validDataLive.name,
          email: validDataLive.email,
          message: validDataLive.message,
          reservecount: validDataLive.reservecount,
        };
        expect(() => validate(data as any)).toThrow();
      });
      test("reservecountのフィールドが存在していない場合、例外が投げられること", () => {
        const data = {
          category: validDataLive.category,
          name: validDataLive.name,
          email: validDataLive.email,
          message: validDataLive.message,
          reservedate: validDataLive.reservedate,
        };
        expect(() => validate(data as any)).toThrow();
      });
    });
  });

  describe("カテゴリがTogetherの場合", () => {
    describe("validなデータ", () => {
      test("パスすること", () => {
        const data: ContactFormItem = validDataTogether;
        expect(validate(data)).toEqual(data);
      });
      // Note: 共通パターンは省略
    });
    describe("invalidなデータ", () => {
      // Note: 共通パターンは省略
      test("reservedateが存在している場合、例外が投げられること", () => {
        const data = {
          ...validDataTogether,
          reservedate: "hoge",
        };
        expect(() => validate(data as any)).toThrow();
      });
      test("reservecountが存在している場合、例外が投げられること", () => {
        const data = {
          ...validDataTogether,
          reservecount: "1枚",
        };
        expect(() => validate(data as any)).toThrow();
      });
    });
  });

  describe("カテゴリがOtherの場合", () => {
    describe("validなデータ", () => {
      test("パスすること", () => {
        const data: ContactFormItem = validDataOther;
        expect(validate(data)).toEqual(data);
      });
      // Note: 共通パターンは省略
    });
    describe("invalidなデータ", () => {
      // Note: 共通パターンは省略
      test("reservedateが存在している場合、例外が投げられること", () => {
        const data = {
          ...validDataOther,
          reservedate: "hoge",
        };
        expect(() => validate(data as any)).toThrow();
      });
      test("reservecountが存在している場合、例外が投げられること", () => {
        const data = {
          ...validDataOther,
          reservecount: "1枚",
        };
        expect(() => validate(data as any)).toThrow();
      });
    });
  });
});
