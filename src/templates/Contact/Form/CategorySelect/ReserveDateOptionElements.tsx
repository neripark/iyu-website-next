import { LiveInformationContext } from "@/providers/LiveInformationProvider";
import { useContext } from "react";

interface Props {
  defaultValue: string;
}

export const ReserveDateOptionElements: React.FC<Props> = (props) => {
  const { lives } = useContext(LiveInformationContext);
  return (
    <>
      <option value={props.defaultValue}>- お取り置き日程 -</option>
      {lives.map((element) => (
        <option key={element.date}>
          {/* todo: context 上でフォーマットする */}
          {/* {`${$dayjs(live.date).format("YYYY/M/D (ddd)")} - ${live.title}`} */}
          {element.date} {element.title}
        </option>
      ))}
    </>
  );
};
