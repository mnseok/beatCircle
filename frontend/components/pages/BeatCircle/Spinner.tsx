import { YellowDot } from "./BeatCircle.styles";

export function Spinner({
  radius,
  angle,
  center,
}: {
  radius: number;
  angle: number;
  center: number;
}): JSX.Element {
  const { x, y } = {
    x:
      center -
      (radius * 0.02) / 2 +
      (1 - 0.02 / 2) * radius * Math.cos((angle * Math.PI) / 180),
    y:
      center -
      (radius * 0.02) / 2 +
      (1 - 0.02 / 2) * radius * Math.sin((angle * Math.PI) / 180),
  };

  return (
    <YellowDot
      style={{
        width: `${radius * 0.1}px`,
        height: `${radius * 0.1}px`,
        top: y,
        left: x,
      }}
    ></YellowDot>
  );
}
