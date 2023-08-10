import styled from "@emotion/styled";

export const InstrumentButtonContainerStyle = styled.div`
  width: 70vw;
  height: 5vh;
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
  justify-content: start;
  align-items: start;
`;

export const SelectButtonWrapper = styled.div`
  width: 60px;
  height: 30px;
  cursor: grab;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3px 6px;

  border: 1px solid black;
`;

export const ImageStyle = styled.img`
  width: 50px;
  height: 50px;
  display: block;
  margin: auto;
`;

export const FolderSelectButtonContainerWrapper = styled.div`
  height: 10vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: center;
  overflow-x: scroll;
  overflow-y: hidden;
  border: 1px solid black;
`;

export const FolderSelectButtonWrapper = styled.button`
  height: 70px;
  width: 70px;
  border: 1px solid black;
  flex-shrink: 0;

  margin: 0px 5px;
  // border-radius: 2px;

  // border: none;
`;
