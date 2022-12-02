import { LiveInformationContext } from "@/providers/LiveInformationProvider";
import { useContext } from "react";

export const ReserveDateOptionElements: React.FC = () => {
  const { lives } = useContext(LiveInformationContext);
  return (
    <>
      <option value="" disabled>
        - お取り置き日程 -
      </option>
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
