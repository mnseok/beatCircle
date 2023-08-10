import { useEffect, useState } from "react";
import { InstrumentButtonContainerStyle } from "./SelectContainer.styles";
import SelectButtonContainer from "./SelectButtonContainer";

const InstrumentButtonContainer = ({ folderName }: { folderName: string }) => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    async function fetchFileList() {
      if (folderName) {
        const response = await fetch(
          `/api/sounds?folderName=${encodeURIComponent(folderName)}`
        );
        const data = await response.json();
        setFileList(data);
      }
    }

    fetchFileList();
  }, [folderName]);

  const folderPath = `/sounds/${folderName}/`;

  return (
    <InstrumentButtonContainerStyle>
      <SelectButtonContainer
        soundList={fileList}
        folderPath={folderPath}
      ></SelectButtonContainer>
    </InstrumentButtonContainerStyle>
  );
};
export default InstrumentButtonContainer;
