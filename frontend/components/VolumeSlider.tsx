import { MouseEvent } from "react";
import { StyledInput, VolumeSliderWrapper } from "./BeatCircle.styles";

const VolumeSlider = ({ value, onChange }: { value: number }) => {
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
