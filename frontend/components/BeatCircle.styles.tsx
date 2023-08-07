import styled from "@emotion/styled";

export const InstrumentCircleContainer = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid aqua;
  backgroundcolor: transparent;
`;

export const CircleContainer = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  position: relative;
  border: 1px solid red;
  background-color: transparent;
`;

export const Button = styled.button`
  border-radius: 50%;
  border: none;
  position: absolute;
  padding: 0px;
  margin: 0px;
  transform: translate(-50%, -50%);
`;

export const Line = styled.canvas`
  position: absolute;
  background-color: black;
`;

export const Round = styled.div`
  mragin: 0px;
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

export const InstrumentText = styled.div`
  border: 1px solid purple;
  background-color: transparent;
  font-size: 0.8rem;
`;
