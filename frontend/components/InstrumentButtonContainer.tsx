import { useEffect, useState } from "react";
import InstrumentButtons from "./InstrumentButtons";

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

  const soundPath = `/sounds/${folderName}/`;
  soundPath;
  return (
    <InstrumentButtons
      soundList={fileList}
      soundPath={soundPath}
    ></InstrumentButtons>
  );
};
export default InstrumentButtonContainer;
