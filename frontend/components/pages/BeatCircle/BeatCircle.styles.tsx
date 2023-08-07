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
`;

export const Button = styled.button`
  border-radius: 50%;
  border: none;
  position: absolute;
  padding: 0px;
  margin: 0px;
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
  border: ${(props) => props.radius * 0.02}px solid #cdcdcd;
`;

export const YellowDot = styled.div`
  border-radius: 50%;
  background-color: #ffc807;
  position: absolute;
  transform: translate(-50%, -50%);
`;
