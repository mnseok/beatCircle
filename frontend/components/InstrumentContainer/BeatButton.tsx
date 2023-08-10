import { BeatButton, BeatButtonDot } from "./BeatCircle.styles";
import ButtonLine from "./ButtonLine";

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
}): JSX.Element {
  const buttons = Array.from(Array(numButtons).keys()).map((index) => {
    const { x, y } = {
      x:
        center +
        0.99 * roundRadius * Math.cos((2 * Math.PI * index) / numButtons),
      y:
        center +
        0.99 * roundRadius * Math.sin((2 * Math.PI * index) / numButtons),
    };
    const isClicked: boolean = activateButtonIndices.includes(index);
    const radius = roundRadius * (isClicked ? 0.05 : 0.04);

    return (
      <BeatButton
        key={index}
        onClick={() => handleButtonClick(index)}
        style={{
          width: `${radius * 4}px`,
          height: `${radius * 4}px`,
          top: `${y}px`,
          left: `${x}px`,
        }}
      >
        <BeatButtonDot
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            backgroundColor: isClicked ? "black" : "#CDCDCD",
          }}
        ></BeatButtonDot>
      </BeatButton>
    );
  });

  const lines = [];
  for (let i = 0; i < activateButtonIndices.length; i++) {
    if (
      activateButtonIndices.length < 3 &&
      i === activateButtonIndices.length - 1
    ) {
      break;
    }
    const startPoint = {
      x:
        center +
        roundRadius *
          Math.cos((2 * Math.PI * activateButtonIndices[i]) / numButtons),
      y:
        center +
        roundRadius *
          Math.sin((2 * Math.PI * activateButtonIndices[i]) / numButtons),
    };

    const endPoint = {
      x:
        center +
        roundRadius *
          Math.cos(
            (2 *
              Math.PI *
              activateButtonIndices[(i + 1) % activateButtonIndices.length]) /
              numButtons
          ),
      y:
        center +
        roundRadius *
          Math.sin(
            (2 *
              Math.PI *
              activateButtonIndices[(i + 1) % activateButtonIndices.length]) /
              numButtons
          ),
    };

    lines.push(
      <ButtonLine
        key={i}
        index={i}
        startPoint={startPoint}
        endPoint={endPoint}
        strokeWidth={roundRadius * 0.02}
      ></ButtonLine>
    );
  }

  return (
    <>
      {buttons}
      {lines}
    </>
  );
}
