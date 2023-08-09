import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { VolumeMuteButton, VolumeWrapper } from "./BeatCircle.styles";
import VolumeSlider from "./VolumeSlider";

const Volume = ({
  volume,
  setVolume,
}: {
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
}) => {
  const handleVolumeChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    setVolume(event.target.valueAsNumber);
  };
  const handlerVolumeMute: () => void = () => {
    setVolume(0);
  };

  return (
    <VolumeWrapper>
      <VolumeSlider value={volume} onChange={handleVolumeChange} />
      <VolumeMuteButton onClick={handlerVolumeMute} />
    </VolumeWrapper>
  );
};

export default Volume;
