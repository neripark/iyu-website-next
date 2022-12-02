import { categories, type Category } from "@/types/ContactForm";

export const CategoryOptionElements: React.FC = () => {
  return (
    <>
      <option value="default" disabled style={{ display: "none" }}>
        - お問い合わせ種類 -
      </option>
      {(Object.keys(categories) as Category[]).map((element) => (
        <option value={element} key={element}>
          {categories[element]}
        </option>
      ))}
    </>
  );
};
