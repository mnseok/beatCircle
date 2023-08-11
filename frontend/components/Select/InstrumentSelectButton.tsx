import { useDrag } from "react-dnd";
import {
  ImageStyle,
  InstrumentSelectButtonWrapper,
  InstrumentSelectText,
} from "./InstrumentSelect.styles";

const InstrumentSelectButton = ({
  instrument,
  dragable,
  onClick,
}: {
  instrument: { name: string; detail: string | null };
  dragable: boolean;
  onClick: (folderName: string) => void;
}) => {
  const soundPath = `/sounds/${instrument.name}/${instrument.detail}`;
  const [, dragRef] = useDrag({
    type: "instrumentButton",
    item: { name: instrument.name, detail: instrument.detail, soundPath },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const imgPath = `/icons/${instrument.name?.split("_")[0]}.png`;
  return (
    <InstrumentSelectButtonWrapper
      onClick={() => onClick(instrument.name)}
      ref={dragable ? dragRef : null}
    >
      <ImageStyle src={imgPath} />
      <InstrumentSelectText>
        {instrument.name?.split("_")[0]}
      </InstrumentSelectText>
      <InstrumentSelectText>
        {instrument.detail?.split("_")[1].split(".")[0]}
      </InstrumentSelectText>
    </InstrumentSelectButtonWrapper>
  );
};
export default InstrumentSelectButton;
