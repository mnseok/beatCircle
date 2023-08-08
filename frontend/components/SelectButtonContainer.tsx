import { useEffect, useState } from "react";
import InstrumentButton from "./InstrumentButton";
import { SelectButtonContainerWrapper } from "./SelectContainer.styles";

const SelectButtonContainer = ({
  soundList,
  folderPath,
}: {
  soundList: Array<string>;
  folderPath: string;
}) => {
  const [instrumentButtons, setInstrumentButtons] = useState([]);
  useEffect(() => {
    const updatedInstrumentButtons = soundList.map(
      (soundFile: string, index: number) => {
        const name = soundFile.split(".")[0];
        const path = folderPath + soundFile;

        return <InstrumentButton key={index} name={name} path={path} />;
      }
    );
    setInstrumentButtons(updatedInstrumentButtons);
  }, [soundList]);

  return (
    <SelectButtonContainerWrapper
      style={{
        justifyContent: soundList.length < 9 ? "start" : "space-between",
      }}
    >
      {instrumentButtons}
    </SelectButtonContainerWrapper>
  );
};

export default SelectButtonContainer;
