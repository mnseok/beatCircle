import { BodySelectContainer } from "@/styles/Body.styles";
import { useEffect, useState } from "react";
import InstrumentButtons from "./InstrumentButtons";
import InstrumentButtonContainer from "./InstrumentButtonContainer";

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

  return (
    <BodySelectContainer>
      <InstrumentButtonContainer
        folderName={folderList[0]}
      ></InstrumentButtonContainer>
    </BodySelectContainer>
  );
};

export default SelectContainer;
