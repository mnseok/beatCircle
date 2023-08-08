import { useEffect, useState } from "react";
import InstrumentButton from "./InstrumentButton";

const InstrumentButtons = ({
  soundPath,
  soundList,
}: {
  soundPath: string;
  soundList: Array<string>;
}) => {
  const [instrumentButtons, setInstrumentButtons] = useState([]);
  useEffect(() => {
    const updatedInstrumentButtons = soundList.map(
      (soundFile: string, index) => {
        const name = soundFile.split(".")[0];
        const path = soundPath + soundFile;
        return <InstrumentButton key={index} name={name} path={path} />;
      }
    );
    setInstrumentButtons(updatedInstrumentButtons);
  }, [soundList]);
  return <>{instrumentButtons}</>;
};

export default InstrumentButtons;
