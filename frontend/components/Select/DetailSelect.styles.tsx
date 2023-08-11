import styled from "@emotion/styled";

export const DetailSelectContainerWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  //   border: 1px solid red;
`;

export const DetailSelectWrapper = styled.div`
  width: 90px;
  height: 80%;
  margin: 0px 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #cdcdcd;
`;

export const DetailSelectButtonWrapper = styled.div``;
