import { useState } from "react";
import {
  CircleContainer,
  InstrumentCircleContainer,
  InstrumentInfo,
  Round,
} from "./BeatCircle.styles";
import React from "react";
import useSound from "use-sound";

import BeatButtons from "./BeatButtons";
import { Spinner } from "./Spinner";
import VolumeSlider from "./VolumeSlider";

export function InstrumentCircle({
  radius,
  numButtons,
  angle,
  instrument,
}: {
  radius: number;
  numButtons: number;
  angle: number;
  instrument: string;
}): JSX.Element {
  const center = radius * 1.25;
  const [activateButtonIndices, setActivateButtonIndices] = useState<number[]>(
    []
  );
  const handleButtonClick = (index: number) => {
    const updatedIndices = [...activateButtonIndices];
    if (updatedIndices.includes(index)) {
      updatedIndices.splice(updatedIndices.indexOf(index), 1);
    } else {
      updatedIndices.push(index);
    }
    setActivateButtonIndices(updatedIndices.sort((a, b) => a - b));
    // setActivateButtonIndices(updatedIndices);
  };

  const [isCollided, setIsCollided] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    // 여기에 볼륨 변경을 위한 추가 동작을 수행할 수 있습니다.
  };

  const [instrumentPlay] = useSound(`sounds/${instrument}.mp3`, {
    volume: volume / 100,
  });

  const collidedButtonIndex = activateButtonIndices.filter((index) => {
    return Math.abs(angle - (index / numButtons) * 360) < 3;
  });
  const dotOnClicked: boolean = collidedButtonIndex.length > 0 && !isCollided;
  const roundRadius = isCollided ? radius * 1.05 : radius;

  if (dotOnClicked) {
    instrumentPlay();
    setIsCollided(true);
  } else if (isCollided && collidedButtonIndex.length === 0) {
    setIsCollided(false);
  }

  return (
    <InstrumentCircleContainer>
      <div style={{ display: "flex" }}>
        <CircleContainer
          style={{
            width: ` ${radius * 2.5}px`,
            height: `${radius * 2.5}px`,
          }}
        >
          <Round
            style={{
              width: `${roundRadius * 2}px`,
              height: `${roundRadius * 2}px`,
              top: `${center - roundRadius}px`,
              left: `${center - roundRadius}px`,
              border: `${roundRadius * 0.02}px solid #cdcdcd`,
            }}
          ></Round>
          <BeatButtons
            numButtons={numButtons}
            center={center}
            roundRadius={roundRadius}
            activateButtonIndices={activateButtonIndices}
            handleButtonClick={handleButtonClick}
          ></BeatButtons>
          <Spinner radius={radius} angle={angle} center={center} />
        </CircleContainer>

        <VolumeSlider
          volume={volume}
          onChange={handleVolumeChange}
        ></VolumeSlider>
      </div>
      <InstrumentInfo>{/* {instrument} */}</InstrumentInfo>
    </InstrumentCircleContainer>
  );
}
