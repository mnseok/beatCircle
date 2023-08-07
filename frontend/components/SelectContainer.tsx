import { BodySelectContainer } from "@/styles/Body.styles";
import InstrumentButton from "./InstrumentButton";
import { useEffect, useState } from "react";

const SelectContainer = () => {
  const [soundList, setSoundList] = useState([]);
  const [instrumentButtons, setInstrumentButtons] = useState([]);
  console.log(soundList);
  useEffect(() => {
    async function fetchSoundList() {
      const response = await fetch("/api/sounds");
      const data = await response.json();
      setSoundList(data);
    }
    fetchSoundList();
    const updatedInstrumentButtons = soundList.map((sound: string, index) => {
      const instrumentName = sound.split(".")[0];
      return <InstrumentButton key={index} instrumentName={instrumentName} />;
    });
    setInstrumentButtons(updatedInstrumentButtons);
  }, [soundList]);

  return <BodySelectContainer>{instrumentButtons}</BodySelectContainer>;
};

export default SelectContainer;
