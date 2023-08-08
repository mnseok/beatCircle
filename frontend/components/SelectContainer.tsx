import { SelectContainerWrapper } from "@/styles/Body.styles";
import { useEffect, useState } from "react";
import InstrumentButtons from "./InstrumentButtons";
import InstrumentButtonContainer from "./InstrumentButtonContainer";
import InstrumentSelectButtoncontainer from "./FolderSelectButtonContainer";

const SelectContainer = () => {
  const [folderList, setFolderList] = useState([]);
  useEffect(() => {
    async function fetchFolderList() {
      const response = await fetch("/api/soundFolders");
      const data = await response.json();
      setFolderList(data);
    }

    fetchFolderList();
  }, []);

  const [selectedFolder, setSelectedFolder] = useState("");
  const handleButtonClick = (folderName: string) => {
    setSelectedFolder(folderName);
  };
  // console.log(selectedFolder);
  return (
    <SelectContainerWrapper>
      <InstrumentButtonContainer folderName={selectedFolder || folderList[0]} />
      <InstrumentSelectButtoncontainer
        folderList={folderList}
        onClick={handleButtonClick}
      />
    </SelectContainerWrapper>
  );
};

export default SelectContainer;
