import { DetailSelectWrapper } from "./DetailSelect.styles";
import { AiOutlineCheck } from "react-icons/ai";
import DetailSelectSoundButton from "./DetailSelectSoundButton";
import useSound from "use-sound";
import { useEffect, useState } from "react";

const DetailSelectButton = ({
  detailName,
  soundPath,
  onClick,
}: {
  detailName: string;
  soundPath: string;
  onClick: () => void;
}) => {
  const name = detailName.split("_")[1].split(".")[0];
  const [instrumentPlay] = useSound(`${soundPath}`);

  return (
    <DetailSelectWrapper>
      {name}
      <div
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AiOutlineCheck size="50%" onClick={onClick} />
        <DetailSelectSoundButton onClick={instrumentPlay} />
      </div>
    </DetailSelectWrapper>
  );
};
export default DetailSelectButton;
