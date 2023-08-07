import styled from "@emotion/styled";

export const InstrumentCircleContainer = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  // border: 1px solid aqua;
`;

export const CircleContainer = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  position: relative;
  background-color: transparent;
  // border: 1px solid red;
`;

export const Button = styled.button`
  border-radius: 50%;
  border: none;
  position: absolute;
  padding: 0px;
  margin: 0px;
  transform: translate(-50%, -50%);
`;

export const Line = styled.div`
  position: absolute;
  background-color: black;
`;

export const Round = styled.div`
  margin: 0px; /* 수정된 부분 */
  position: absolute;
  border-radius: 50%;
  margin: 0px;
  padding: 0px;
  background-color: transparent;
`;

export const YellowDot = styled.div`
  border-radius: 50%;
  background-color: #ffc807;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const InstrumentInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 15px;
  background-color: transparent;
  font-size: 0.8rem;
  // border: 1px solid purple;
`;

export const VolumeSliderWrapper = styled.div`
  width: 10px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  // border: 1px solid red;
`;

export const StyledInput = styled.input`
  width: 50px;
  height: 10px;
  -webkit-appearance: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transform: rotate(-90deg);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 3px;
    height: 3px;
    background-color: ivory; /* 슬라이더 핸들 색상 */
    border-radius: 50%;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    background-color: lightgray; /* 슬라이더 트랙 색상 */
    border-radius: 2px;
  }
`;
