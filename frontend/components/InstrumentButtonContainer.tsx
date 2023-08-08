import { useEffect, useState } from "react";
import InstrumentButtons from "./InstrumentButtons";
import { InstrumentButtonContainerStyle } from "./SelectContainer.styles";

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
      <InstrumentButtons
        soundList={fileList}
        folderPath={folderPath}
      ></InstrumentButtons>
    </InstrumentButtonContainerStyle>
  );
};
export default InstrumentButtonContainer;
