import { ChangeEvent, use, useEffect, useState } from "react";
import {
  CircleContainer,
  ImageStyle,
  InstrumentBody,
  InstrumentCircleContainer,
  InstrumentDetail,
  InstrumentHeader,
  InstrumentInfo,
  InstrumentName,
  Round,
} from "./BeatCircle.styles";
import React from "react";
import useSound from "use-sound";

import BeatButtons from "./BeatButton";
import { Spinner } from "./Spinner";
import VolumeSlider from "./VolumeSlider";
import RemoveButton from "./RemoveButton";
import ResetButton from "./ResetButton";
import Volume from "./Volume";

export function InstrumentCircle({
  radius,
  numButtons,
  angle,
  instrumentInfo,
  onDelete,
}: {
  radius: number;
  numButtons: number;
  angle: number;
  instrumentInfo: { name: string; detail: string; soundPath: string };
  onDelete: () => void;
}): JSX.Element {
  const center = (radius * 2.4) / 2;
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
  };
  const onReset = () => {
    setActivateButtonIndices([]);
  };

  const [isCollided, setIsCollided] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const [instrumentPlay] = useSound(`${instrumentInfo?.soundPath}`, {
    volume: isMuted ? 0 : volume / 100,
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
  const imgPath = `/icons/${instrumentInfo.name.split("_")[0]}.png`;

  return (
    <InstrumentCircleContainer
      style={{ width: `${radius * 3}px`, height: `${radius * 3}px` }}
    >
      <InstrumentHeader>
        <RemoveButton onClick={onDelete} />
        <ResetButton onClick={onReset}></ResetButton>
      </InstrumentHeader>
      <InstrumentBody>
        <CircleContainer
          style={{ width: `${radius * 2.4}px`, height: `${radius * 2.4}px` }}
        >
          <ImageStyle
            src={imgPath}
            style={{
              width: `${roundRadius / 2}px`,
              height: `${roundRadius / 2}px`,
              top: `${center}px`,
              left: `${center}px`,
            }}
          />
          <Round
            style={{
              width: `${roundRadius * 2}px`,
              height: `${roundRadius * 2}px`,
              top: `${center - roundRadius}px`,
              left: `${center - roundRadius}px`,
              border: `${roundRadius * 0.02}px solid #cdcdcd`,
              // border: "1px solid #cdcdcd",
            }}
          ></Round>
          <BeatButtons
            numButtons={numButtons}
            center={center}
            roundRadius={roundRadius}
            activateButtonIndices={activateButtonIndices}
            handleButtonClick={handleButtonClick}
          ></BeatButtons>
          <Spinner radius={radius} angle={angle} center={center}></Spinner>
        </CircleContainer>
        <Volume
          volume={isMuted ? 0 : volume}
          setVolume={setVolume}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
        />
      </InstrumentBody>
      <InstrumentInfo>
        <InstrumentName>{instrumentInfo.name.split("_")[0]}</InstrumentName>
        <InstrumentDetail>
          {instrumentInfo.detail.split("_")[1].split(".")[0]}
        </InstrumentDetail>
      </InstrumentInfo>
    </InstrumentCircleContainer>
  );
}
