import { MouseEvent } from "react";
import {
  StyledInput,
  VolumeSliderContainer,
  VolumeSliderHandle,
  VolumeSliderTrack,
  VolumeSliderWrapper,
} from "./BeatCircle.styles";

// const VolumeSlider = ({
//   volume,
//   setVolume,
// }: {
//   volume: number;
//   setVolume: React.Dispatch<React.SetStateAction<number>>;
// }) => {
//   const handleDrag = (e) => {
//     // let volume = (e.target.offsetLeft - 100) / 1000;
//     const volume = e.clientX;
//     console.log(volume);
//     setVolume(volume);
//   };

//   return (
//     <VolumeSliderContainer>
//       <VolumeSliderTrack>
//         <VolumeSliderHandle
//           //   style={{ left: `${volume * 100}%` }}
//           style={{ left: volume }}
//           onMouseDown={(e) => {
//             handleDrag(e);
//             window.addEventListener("mousemove", handleDrag);
//             window.addEventListener("mouseup", () => {
//               window.removeEventListener("mousemove", handleDrag);
//             });
//           }}
//         />
//       </VolumeSliderTrack>
//     </VolumeSliderContainer>
//   );
// };

// export default VolumeSlider;

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
