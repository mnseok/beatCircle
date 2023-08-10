import BeatButtons from "./InstrumentContainer/BeatButton";
import {
  CircleContainer,
  Round,
} from "./InstrumentContainer/BeatCircle.styles";
import { Spinner } from "./InstrumentContainer/Spinner";

export function BeatCircle({
  radius,
  angle,
  numButtons,
}: {
  radius: number;
  angle: number;
  numButtons: number;
}): JSX.Element {
  const wrapperSize = radius * 2.5;
  const center = wrapperSize / 2;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircleContainer
        style={{ width: ` ${wrapperSize}px`, height: `${wrapperSize}px` }}
      >
        <Round
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            border: `${radius * 0.02}px solid #cdcdcd`,
            top: `${center - radius}px`,
            left: `${center - radius}px`,
          }}
        ></Round>
        <BeatButtons
          numButtons={numButtons}
          center={center}
          roundRadius={radius}
          activateButtonIndices={[0, 3, 6, 9]}
          handleButtonClick={() => {}}
        ></BeatButtons>
        <Spinner radius={radius} angle={angle} center={center} />
      </CircleContainer>
    </div>
  );
}
