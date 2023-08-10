import { useDrag } from "react-dnd";
import { SelectButtonWrapper } from "./SelectContainer.styles";

const InstrumentButton = ({ name, path }: { name: string; path: string }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "instrumentButton",
    item: { name, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <SelectButtonWrapper
      ref={dragRef}
      style={{
        opacity: isDragging ? 0 : 1, // 드래그 중일 때 배경 투명하게 조절
      }}
    >
      <div style={{ fontSize: "8px" }}>{name.split("_")[1]}</div>
    </SelectButtonWrapper>
  );
};

export default InstrumentButton;
