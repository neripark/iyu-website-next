import { categories, type Category } from "@/types/ContactForm";

interface Props {
  defaultValue: string;
}

export const CategoryOptionElements: React.FC<Props> = (props) => {
  return (
    <>
      <option value={props.defaultValue}>- お問い合わせ種類 -</option>
      {(Object.keys(categories) as Category[]).map((element) => (
        <option key={element} value={element}>
          {categories[element]}
        </option>
      ))}
    </>
  );
};
