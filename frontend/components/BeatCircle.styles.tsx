import styled from "@emotion/styled";

export const InstrumentCircleContainer = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ;
  background-color: transparent;
  border: 1px solid #a0a0a0;
  border-radius: 2px;
  margin: 5px;
`;

export const CircleContainer = styled.div`
  height: 100%;
  padding: 0px;
  margin: 0px;
  display: flex;
  position: relative;
  background-color: transparent;
  // border: 1px solid green;
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
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 15px;
  background-color: transparent;
  font-size: 0.8rem;
  // border: 1px solid purple;
`;

export const InstrumentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: #a0a0a0;
`;

export const InstrumentBody = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  backgroundcolor: "transparent";
  // border: 1px solid red;
`;
export const CircleStatusWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // border: 1px solid red;
`;

export const HeaderButtonWrapper = styled.div`
  width: 5px;
  height: 5px;
  display: flex;
  margin: 1px 2px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VolumeSliderWrapper = styled.div`
  width: 10px;
  height: 100%;
  // width: 80%;
  // height: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  background-color: transparent;
  // border: 1px solid orange;
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
