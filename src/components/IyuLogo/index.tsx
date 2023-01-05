import { fullColor, whiteColor } from "./colorSet";
import styles from "./style.module.scss";

interface Props extends React.SVGProps<SVGSVGElement> {
  colorType?: "fullColor" | "white";
}

export const IyuLogo: React.FC<Props> = (props) => {
  const color = props.colorType === "white" ? whiteColor : fullColor;
  const { className, ...rest } = props;
  return (
    <svg
      className={`${className} ${styles["root"]}`}
      viewBox="0 0 960 540"
      {...rest}
    >
      <title>iyu-logo-RGB</title>
      {/* i */}
      <rect
        fill={color.i}
        height="233.48"
        width="127.74"
        x="77.78"
        y="172.89"
      />
      <circle
        cx="141.65"
        cy="113.88"
        fill={color.i}
        r="40.87"
        transform="translate(-33 63.58) rotate(-22.73)"
      />
      {/* y */}
      <path
        d="M366.89,172.88H228L336.67,372.33a55.2,55.2,0,0,1,62,83.22,199.59,199.59,0,0,0,16.29-13.05,161.2,161.2,0,0,0,12.3-12.91q6.28-7.5,14.13-18.59A239.8,239.8,0,0,0,455,388.22q8-14.76,14.84-28.87Z"
        fill={color.y1}
      />
      <circle
        cx="352.57"
        cy="425.17"
        fill={color.y1}
        r="40.83"
        transform="translate(-136.89 169.24) rotate(-22.73)"
      />
      <polygon
        fill={color.y2}
        points="486.36 333.32 397.97 172.89 578.58 172.89 486.36 333.32"
      />
      <circle
        cx="488.27"
        cy="113.88"
        fill={color.y2}
        r="40.87"
        transform="translate(265.97 563.28) rotate(-76.81)"
      />
      {/* u */}
      <path
        d="M601.11,325.85v-153H727.64V406.37H713.51q-34.11,0-59.53-9.69a96.8,96.8,0,0,1-22.6-11.8,76.49,76.49,0,0,1-16.55-16Q601.1,350.47,601.11,325.85Z"
        fill={color.u1}
      />
      <circle
        cx="664.37"
        cy="113.88"
        fill={color.u1}
        r="40.87"
        transform="translate(-9.67 108.43) rotate(-9.26)"
      />
      <rect
        fill={color.u2}
        height="233.48"
        width="127.74"
        x="754.48"
        y="172.89"
      />
      <circle
        cx="818.35"
        cy="113.88"
        fill={color.u2}
        r="40.87"
        transform="translate(19.55 325.04) rotate(-22.73)"
      />
    </svg>
  );
};
