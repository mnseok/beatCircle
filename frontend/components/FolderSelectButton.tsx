import { FolderSelectButtonWrapper } from "./SelectContainer.styles";

const FolderSelectButton = ({
  instrument,
  onClick,
}: {
  instrument: string;
  onClick: (folderName: string) => void;
}) => {
  return (
    <FolderSelectButtonWrapper onClick={() => onClick(instrument)}>
      <div style={{ fontSize: "8px" }}>{instrument?.split("_")[0]}</div>
    </FolderSelectButtonWrapper>
  );
};
export default FolderSelectButton;
