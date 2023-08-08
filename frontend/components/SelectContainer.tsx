import { BodySelectContainer } from "@/styles/Body.styles";
import { useEffect, useState } from "react";
import InstrumentButtons from "./InstrumentButtons";

const SelectContainer = () => {
  const [soundList, setSoundList] = useState([]);

  useEffect(() => {
    async function fetchSoundList() {
      const response = await fetch("/api/sounds");
      const data = await response.json();
      setSoundList(data);
    }
    fetchSoundList();
  }, []);

  return (
    <BodySelectContainer>
      <InstrumentButtons soundList={soundList} />
    </BodySelectContainer>
  );
};

export default SelectContainer;
