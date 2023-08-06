import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: ${(props) => props.radius * 2.5}px;
  height: ${(props) => props.radius * 2.5}px;
  padding: 0px;
  margin: 0px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const Button = styled.button`
  border-radius: 50%;
  width: 3%;
  height: 3%;
  border: none;
  position: absolute;
  padding: 0px;
  margin: 0px;
  top: ${(props) =>
    props.radius -
    props.radius * 0.02 +
    (1 - 0.02 / 2) * props.radius * Math.sin((2 * Math.PI * props.key) / 16)}px;
  left: ${(props) =>
    props.radius -
    props.radius * 0.02 +
    (1 - 0.02 / 2) * props.radius * Math.sin((2 * Math.PI * props.key) / 16)}px;
  transform: translate(-50%, -50%);
`;

export const Round = styled.div`
  mragin: 0px;
  width: ${(props) => props.radius * 2}px;
  height: ${(props) => props.radius * 2}px;
  position: relative;
  border-radius: 50%;
  margin: 0px;
  padding: 0px;
  border: ${(props) => props.radius * 0.02}px solid #e2e2e2;
`;

export const YellowDot = styled.div`
  width: 3%;
  height: 3%;
  border-radius: 50%;
  background-color: yellow;
  position: absolute;
  transform: translate(-50%, -50%);
`;
