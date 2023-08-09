import { ChangeEvent } from "react";
import { StyledInput, VolumeSliderWrapper } from "./BeatCircle.styles";

const VolumeSlider = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <VolumeSliderWrapper>
      <StyledInput
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
      />
    </VolumeSliderWrapper>
  );
};

export default VolumeSlider;
