import { useEffect, useState } from "react";
import DetailSelectButton from "./DetailSelectButton";
import { DetailSelectContainerWrapper } from "./DetailSelect.styles";

const DetailSelectButtonContainer = ({
  instrumentName,
  handleDetailSelectButtonClick,
}: {
  instrumentName: string | null;
  handleDetailSelectButtonClick: (
    instrumentName: string,
    detailName: string
  ) => void;
}) => {
  const [detailList, setDetailList] = useState([]);
  const [folderPath, setFolderPath] = useState("");
  useEffect(() => {
    async function fetchFileList() {
      if (instrumentName) {
        const response = await fetch(
          `/api/sounds?instrumentName=${encodeURIComponent(instrumentName)}`
        );
        const data = await response.json();
        setDetailList(data);
        setFolderPath(`/sounds/${instrumentName}`);
      }
    }

    fetchFileList();
  }, [instrumentName]);
  if (!instrumentName) {
    return null;
  }

  // const folderPath = `/sounds/${instrumentName}/`;
  return (
    <DetailSelectContainerWrapper>
      {instrumentName
        ? detailList.map((detailName: string) => {
            return (
              <DetailSelectButton
                key={detailName}
                detailName={detailName}
                soundPath={`${folderPath}/${detailName}`}
                onClick={() => {
                  handleDetailSelectButtonClick(instrumentName, detailName);
                }}
              />
            );
          })
        : null}
    </DetailSelectContainerWrapper>
  );
};
export default DetailSelectButtonContainer;
