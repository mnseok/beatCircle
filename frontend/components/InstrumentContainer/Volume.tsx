import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  VolumeMuteButton,
  VolumeStatusWrapper,
  VolumeWrapper,
} from "./BeatCircle.styles";
import VolumeSlider from "./VolumeSlider";
import { FiVolume2, FiVolume1, FiVolumeX, FiVolume } from "react-icons/fi";
import {
  IoMdVolumeHigh,
  IoMdVolumeLow,
  IoMdVolumeMute,
  IoMdVolumeOff,
} from "react-icons/io";
import {
  BsFillVolumeUpFill,
  BsFillVolumeDownFill,
  BsFillVolumeMuteFill,
  BsFillVolumeOffFill,
} from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Volume = ({
  volume,
  setVolume,
  isMuted,
  setIsMuted,
}: {
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleVolumeChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    if (isMuted) setIsMuted((prev) => !prev);
    setVolume(event.target.valueAsNumber);
  };
  const handlerVolumeMute: () => void = () => {
    setIsMuted((prev) => !prev);
  };

  const IconStyle = {
    width: "100%",
    height: "100%",
    color: "lightgray",

    display: "flex",
    justifyContent: "start",
  };
  const VolumeMuteButtonIcon = isMuted ? (
    // <BsFillVolumeMuteFill style={IconStyle} />
    <IoMdVolumeOff style={IconStyle} />
  ) : volume > 50 ? (
    // <BsFillVolumeUpFill style={IconStyle} />
    <IoMdVolumeHigh style={IconStyle} />
  ) : volume > 0 ? (
    // <BsFillVolumeDownFill style={IconStyle} />
    <IoMdVolumeLow style={IconStyle} />
  ) : (
    // <BsFillVolumeOffFill style={IconStyle} />
    <IoMdVolumeMute style={IconStyle} />
  );
  return (
    <VolumeWrapper>
      <VolumeSlider value={volume} onChange={handleVolumeChange} />
      <VolumeMuteButton onClick={handlerVolumeMute}>
        {VolumeMuteButtonIcon}
      </VolumeMuteButton>
    </VolumeWrapper>
  );
};

export default Volume;
