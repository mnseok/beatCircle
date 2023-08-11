import styled from "@emotion/styled";

export const InstrumentSelectButtonContainerWrapper = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  //   justify-content: center;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 24px 24px;
  // border: 1px solid black;
`;

export const InstrumentSelectButtonWrapper = styled.button`
  height: 100px;
  width: 100px;
  flex-shrink: 0;
  margin: 0px 5px;
  border: none;
  // border: 1px solid black;
`;

export const ImageStyle = styled.img`
  width: 60px;
  height: 60px;
  display: block;
  margin: auto;
  // border: 1px solid red;
  -webkit-user-drag: none;
`;

export const InstrumentSelectText = styled.div`
  width: 100%;
  height: 15%;
  padding: 0px 0px;
  fontsize: 10%;
  // border: 1px solid red;
`;

// export const InstrumentSelectName;
