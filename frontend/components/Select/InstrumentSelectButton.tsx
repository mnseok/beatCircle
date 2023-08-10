import {
  FolderSelectButtonWrapper,
  ImageStyle,
} from "./SelectContainer.styles";

const InstrumentSelectButton = ({
  instrument,
  onClick,
}: {
  instrument: string;
  onClick: (folderName: string) => void;
}) => {
  const imgPath = `/icons/${instrument?.split("_")[0]}.png`;

  return (
    <FolderSelectButtonWrapper onClick={() => onClick(instrument)}>
      <ImageStyle src={imgPath} />
      <div style={{ fontSize: "8px" }}>{instrument?.split("_")[0]}</div>
    </FolderSelectButtonWrapper>
  );
};
export default InstrumentSelectButton;
