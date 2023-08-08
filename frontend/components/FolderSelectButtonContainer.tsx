import { useEffect, useState } from "react";
import FolderSelectButton from "./FolderSelectButton";
import { FolderSelectButtonContainerWrapper } from "./SelectContainer.styles";

export const FolderSelectButtoncontainer = ({
  folderList,
  onClick,
}: {
  folderList: Array<string>;
  onClick: (folderName: string) => void;
}) => {
  const [FolderSelectButtons, setFolderSelectButtons] = useState<JSX.Element>(
    []
  );
  useEffect(() => {
    const folderSelectButtons: Array<JSX.Element> = [];
    for (let i = 0; i < folderList.length; i++) {
      folderSelectButtons.push(
        <FolderSelectButton
          key={i}
          instrument={folderList[i]}
          onClick={onClick}
        />
      );
    }
    setFolderSelectButtons(folderSelectButtons);
  }, [folderList]);
  return (
    <FolderSelectButtonContainerWrapper>
      {FolderSelectButtons}
    </FolderSelectButtonContainerWrapper>
  );
};
export default FolderSelectButtoncontainer;
