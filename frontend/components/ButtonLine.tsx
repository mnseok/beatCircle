import { Line } from "./BeatCircle.styles";

const ButtonLine = ({
  index,
  startPoint,
  endPoint,
  strokeWidth,
}: {
  index: number;
  startPoint: { x: number; y: number };
  endPoint: { x: number; y: number };
  strokeWidth: number;
}) => {
  return (
    <Line
      key={index}
      style={{
        position: "absolute",
        width:
          Math.sqrt(
            (endPoint.x - startPoint.x) ** 2 + (endPoint.y - startPoint.y) ** 2
          ) + "px",
        height: strokeWidth + "px",
        top: startPoint.y + "px",
        left: startPoint.x + "px",
        transformOrigin: "center left",

        transform: `translate(0%, 0%) 
        rotate(${Math.atan2(
          endPoint.y - startPoint.y,
          endPoint.x - startPoint.x
        )}rad)`,
      }}
    ></Line>
  );
};

export default ButtonLine;
