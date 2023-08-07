import Image from "next/image";
import { useDrag } from "react-dnd";

const InstrumentButton = ({ instrumentName }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "instrumentButton",
    item: { instrumentName },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const buttonStyle = {
    width: "30px",
    height: "30px",
    opacity: isDragging ? 0 : 1, // 드래그 중일 때 배경 투명하게 조절
    cursor: "grab",
    boxShadow: "none", // 그림자 없애기
  };

  const imageStyle = {
    width: `100%`,
    height: "100%",

    display: "block", // 이미지를 블록 요소로 설정하여 줄바꿈 방지
    margin: "auto", // 이미지를 중앙에 정렬
  };

  return (
    <div ref={dragRef} style={buttonStyle}>
      <img src="/icons/cymbal.png" style={imageStyle} />
    </div>
  );
};

export default InstrumentButton;
