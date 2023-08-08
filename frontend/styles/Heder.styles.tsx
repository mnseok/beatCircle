import styled from "@emotion/styled";

export const Header = styled.div`
  height: 20vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 3vw;
  border: 1px solid lightgreen;
`;

export const HeaderLeft = styled.div`
  width: 30vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  padding: 0px 3vw;
  border: 1px solid orange;
`;

export const HeaderCenter = styled.div`
  width: 30vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  border: 1px solid orange;
`;

export const HeaderRight = styled.div`
  width: 30vw;
  height: 15vh;
  // border: 1px solid orange;
`;
