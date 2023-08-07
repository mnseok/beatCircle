import BeatButtons from "./BeatButtons";
import { Round, Wrapper } from "./BeatCircle.styles";
import { Spinner } from "./Spinner";

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
      <Wrapper
        style={{ width: ` ${wrapperSize}px`, height: `${wrapperSize}px` }}
      >
        <Round
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            border: `${radius * 0.02}px solid #cdcdcd`,
          }}
        ></Round>
        <BeatButtons
          numButtons={numButtons}
          center={center}
          roundRadius={radius}
          activateButtonIndices={[0, 4, 8, 12]}
          handleButtonClick={() => {}}
        ></BeatButtons>
        <Spinner radius={radius} angle={angle} center={center} />
      </Wrapper>
    </div>
  );
}
