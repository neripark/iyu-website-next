import styles from "./style.module.scss";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  // optionElementsProps: React.OptionHTMLAttributes<HTMLOptionElement>[];
}

export const Select: React.FC<Props> = (props) => {
  return (
    <select {...props} className={`${styles["root"]} ${props.className}`}>
      {props.children}
    </select>
  );
  // todo: どちらの方式でいくか決める
  // const { optionElementsProps, ...rest } = props;
  // return (
  //   <select {...rest} className={`${styles["root"]} ${props.className}`}>
  //     {optionElementsProps.map((element, index) => (
  //       <option {...element} key={index} />
  //     ))}
  //   </select>
  // );
};
