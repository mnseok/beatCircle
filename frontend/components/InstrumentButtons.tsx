import { useEffect, useState } from "react";
import InstrumentButton from "./InstrumentButton";

const InstrumentButtons = ({ soundList }: { soundList: Array<string> }) => {
  const [instrumentButtons, setInstrumentButtons] = useState([]);
  useEffect(() => {
    const updatedInstrumentButtons = soundList.map((sound: string, index) => {
      const instrumentName = sound.split(".")[0];
      const fileExtension = sound.split(".")[1];
      return (
        <InstrumentButton
          key={index}
          instrumentName={instrumentName}
          fileExtension={fileExtension}
        />
      );
    });
    setInstrumentButtons(updatedInstrumentButtons);
  }, [soundList]);
  return <>{instrumentButtons}</>;
};

export default InstrumentButtons;
