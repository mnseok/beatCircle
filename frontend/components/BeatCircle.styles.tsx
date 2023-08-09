import styled from "@emotion/styled";

export const InstrumentCircleContainer = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ;
  background-color: transparent;
  border-radius: 2px;
  margin: 5px;
  border: 1px solid #a0a0a0;
`;

export const CircleContainer = styled.div`
  height: 100%;
  width: 60%;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: transparent;
  border: 1px solid green;
`;

export const BeatButton = styled.button`
  border: none;
  position: absolute;
  padding: 0px;
  margin: 0px;
  transform: translate(-50%, -50%);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #black;
`;

export const BeatButtonDot = styled.div`
  border-radius: 50%;
  padding: 0px;
  margin: 0px;
`;

export const Line = styled.div`
  position: absolute;
  background-color: black;
`;

export const Round = styled.div`
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
  height: 5%;
  padding: 0px 4px;
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
  width: 10px;
  height: 10px;
  display: flex;
  margin: 0px 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  // border: 1px solid blue;
`;

export const HeaderButton = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const VolumeWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  // justify-content: space-evenly;
  justify-content: center;
  align-items: space-between;
  border: 1px solid black;
`;

export const VolumeSliderWrapper = styled.div`
  width: 170px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  transform: rotate(-90deg);
  background-color: transparent;
  border: 1px solid orange;
`;

export const StyledInput = styled.input`
  width: 160px;
  -webkit-appearance: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 15px;
    background-color: ivory; /* 슬라이더 핸들 색상 */
    // border-radius: 50%;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    width: 130px;
    height: 15px;
    background-color: lightgray; /* 슬라이더 트랙 색상 */
    // border-radius: 2px;
  }
`;

export const VolumeMuteButton = styled.button`
  width: 10px;
  height: 10px;
  border: 1px solid black;
`;
