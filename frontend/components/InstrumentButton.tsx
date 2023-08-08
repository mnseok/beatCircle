import Image from "next/image";
import { useDrag } from "react-dnd";
import { ImageStyle, SelectButtonStyle } from "./SelectContainer.styles";
import img from "../public/icons/cymbal.png";

const InstrumentButton = ({
  instrumentName,
  fileExtension,
}: {
  instrumentName: string;
  fileExtension: string;
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "instrumentButton",
    item: { instrumentName, fileExtension },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <SelectButtonStyle
      ref={dragRef}
      style={{
        opacity: isDragging ? 0 : 1, // 드래그 중일 때 배경 투명하게 조절
      }}
    >
      <ImageStyle src="icons/cymbal.png" />
      <div style={{ fontSize: "8px" }}>{instrumentName}</div>
    </SelectButtonStyle>
  );
};

export default InstrumentButton;
