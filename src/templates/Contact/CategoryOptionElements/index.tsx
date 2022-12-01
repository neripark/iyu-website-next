import { Category } from "@/types/ContactForm";

const optionElementsData: Record<Category, string> = {
  live: "ライブのチケットお取り置き",
  together: "共演のお誘い",
  other: "その他",
};

export const CategoryOptionElements: React.FC = () => {
  return (
    <>
      <option value="default" disabled style={{ display: "none" }}>
        - お問い合わせ種類 -
      </option>
      {(Object.keys(optionElementsData) as Category[]).map((element) => (
        <option value={element} key={element}>
          {optionElementsData[element]}
        </option>
      ))}
    </>
  );
};
