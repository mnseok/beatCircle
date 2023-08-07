import { Button } from "./BeatCircle.styles";

export default function BeatButtons({
  numButtons,
  center,
  roundRadius,
  activateButtonIndices,
  handleButtonClick,
}: {
  numButtons: number;
  center: number;
  roundRadius: number;
  activateButtonIndices: number[];
  handleButtonClick: (index: number) => void;
}): Array<JSX.Element> {
  const buttons = Array.from(Array(numButtons).keys()).map((index) => {
    const { x, y } = {
      x:
        center +
        roundRadius * (1 - 0.01) * Math.cos((2 * Math.PI * index) / numButtons),
      y:
        center +
        roundRadius * (1 - 0.01) * Math.sin((2 * Math.PI * index) / numButtons),
    };
    const isClicked: boolean = activateButtonIndices.includes(index);
    const radius = roundRadius * (isClicked ? 0.05 : 0.04);

    return (
      <Button
        key={index}
        onClick={() => handleButtonClick(index)}
        style={{
          backgroundColor: isClicked ? "black" : "#CDCDCD",
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          top: y,
          left: x,
        }}
      ></Button>
    );
  });
  return buttons;
}
