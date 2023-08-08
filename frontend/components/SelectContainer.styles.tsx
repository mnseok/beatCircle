import styled from "@emotion/styled";

export const InstrumentButtonContainerStyle = styled.div`
  width: 70vw;
  height: 15vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: scroll;
  justify-content: center;
  align-items: space-evenly;
  border-radius: 10px;
  border: 1px solid black;
`;

export const SelectButtonContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const SelectButtonWrapper = styled.div`
  width: 45px;
  height: 30px;
  cursor: grab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3px 6px;

  // border: 1px solid black;
`;

export const ImageStyle = styled.img`
  width: 10px;
  height: 10px;
  display: block;
  margin: auto;
`;

export const FolderSelectButtonContainerWrapper = styled.div`
  height: 15vh;
  width: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

  // border-radius: 10px;
  // border: 1px solid black;
`;

export const FolderSelectButtonWrapper = styled.button`
  height: 3vh;
  width: 80%;
  border: 1px solid black;

  margin: 1px 0px;
  border-radius: 2px;

  // border: none;
`;
