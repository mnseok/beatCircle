import { useEffect, useState } from "react";
import InstrumentButton from "./InstrumentButton";
import SelectButtonContainer from "./SelectButtonContainer";

const SelectButtonContainers = ({
  folderPath,
  soundList,
}: {
  folderPath: string;
  soundList: Array<string>;
}) => {
  const [soundChunks, setSoundChunks] = useState<Array<Array<string>>>([]);

  useEffect(() => {
    const chunks: Array<Array<string>> = [];
    for (let i = 0; i < soundList.length; i += 9) {
      chunks.push(soundList.slice(i, i + 9));
    }
    setSoundChunks(chunks);
  }, [soundList]);

  return (
    <>
      {soundChunks.map((soundChunk, index) => {
        return (
          <SelectButtonContainer
            key={index}
            soundList={soundChunk}
            folderPath={folderPath}
          />
        );
      })}
    </>
  );
};

export default SelectButtonContainers;
